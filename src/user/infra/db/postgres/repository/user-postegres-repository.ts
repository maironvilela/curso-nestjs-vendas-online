import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserRepository } from '@user/data';
import { UserEntity } from '@user/infra';
import { Repository } from 'typeorm';

@Injectable()
export class UserPostegresRepository implements CreateUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}
  async create(
    data: CreateUserRepository.Params,
  ): Promise<CreateUserRepository.Result> {
    const userEntity = { ...data };
    const user = this.repository.create(userEntity);
    return this.repository.save(user);
  }
}
