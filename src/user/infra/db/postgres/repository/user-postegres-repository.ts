import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserRepository } from 'src/user/data';
import { User as UserModel } from 'src/user/domain';
import { Repository } from 'typeorm';
import { User } from '../';

@Injectable()
export class UserPostegresRepository implements CreateUserRepository {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}
  async create(data: UserModel): Promise<UserModel> {
    const userEntity = { ...data };
    const user = this.repository.create(userEntity);
    return this.repository.save(user);
  }
}
