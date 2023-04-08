import { User } from '../../../domain';

export interface CreateUserRepository {
  create: (data: User) => Promise<User>;
}
