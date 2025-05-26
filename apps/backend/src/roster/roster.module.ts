import { Module } from '@nestjs/common';
import { RosterController } from './roster.controller';
import { RosterService } from './roster.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from '../user/user.entity';
import { Article } from '../article/article.entity';

@Module({
  imports: [MikroOrmModule.forFeature([User, Article])],
  controllers: [RosterController],
  providers: [RosterService],
})
export class RosterModule {}
