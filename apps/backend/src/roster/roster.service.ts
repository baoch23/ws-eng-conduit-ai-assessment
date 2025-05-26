import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { User } from '../user/user.entity';
import { Article } from '../article/article.entity';

@Injectable()
export class RosterService {
  constructor(private readonly em: EntityManager) {}

  async getAll(userId?: number) {
    if (userId) {
      const user = await this.em.findOne(User, { id: userId }, { populate: ['followed', 'articles'] });
      await user?.articles.init();
      if (!user) {
        throw new NotFoundException({
          errorCode: 404,
          errorMsg: 'User not found.',
        });
      }
      const following = await user.followed.init();
      return following.getItems().map(f => this.mapUserToResponse(f));
    } else {
      const users = await this.em.find(User, {}, { populate: ['articles'] });
      return users.map(user => this.mapUserToResponse(user)).sort((a, b) => b.favoritesCount - a.favoritesCount);
    }
  }

  private mapUserToResponse(user: User) {
    const articles = user.articles.getItems();
    const articlesCount = articles.length;
    const favoritesCount = articles.reduce((sum, article) => sum + article.favoritesCount, 0);
    const firstArticleAt = articles.length ? articles.reduce((earliest, article) => article.createdAt < earliest ? article.createdAt : earliest, articles[0].createdAt) : '';
    return {
      username: user.username,
      userId: user.id,
      articlesCount,
      favoritesCount,
      firstArticleAt: firstArticleAt ? firstArticleAt.toISOString() : '',
    };
  }
}
