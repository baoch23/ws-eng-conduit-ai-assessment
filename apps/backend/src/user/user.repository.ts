import { EntityRepository } from '@mikro-orm/mysql';
import { User } from './user.entity';

export class UserRepository extends EntityRepository<User> {}
import { EntityRepository } from '@mikro-orm/core';
import { User } from './user.entity';

export class UserRepository extends EntityRepository<User> {
  // Add custom methods for the UserRepository if needed
}
