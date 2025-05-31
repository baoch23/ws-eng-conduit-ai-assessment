import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { EntityRepository, MikroORM } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from '../user/user.entity';
import { Article } from '../article/article.entity';

@Injectable()
export class RosterService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
    private readonly orm: MikroORM,
  ) {}

  async getAll(userId?: number) {
    const users = userId ? await this.getUsersFollowedBy(userId) : await this.userRepository.findAll();
    return this.buildRoster(users);
  }

  private async getUsersFollowedBy(userId: number): Promise<User[]> {
    const user = await this.userRepository.findOne({ id: userId });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return this.userRepository.find({ followers: user });
  }

  private async buildRoster(users: User[]): Promise<any[]> {
    return Promise.all(users.map(user => this.buildUserRoster(user)));
  }

  private async buildUserRoster(user: User): Promise<any> {
    const articles = await this.orm.em.find(Article, { author: user });
    const articlesCount = articles.length;
    const favoritesCount = articles.reduce((sum, article) => sum + article.favoritesCount, 0);
    const firstArticleDate = articlesCount > 0 ? articles[0].createdAt.toISOString() : '';

    return {
      username: user.username,
      userId: user.id,
      email: user.email,
      articleCount: articlesCount,
      totalFavorites: favoritesCount,
      firstArticleDate,
    };
  }
}
