import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserRepository } from '@user/data';
import { User } from '@user/infra';
import { Repository } from 'typeorm';

@Injectable()
export class UserPostegresRepository implements CreateUserRepository {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}
  async create(
    data: CreateUserRepository.Params,
  ): Promise<CreateUserRepository.Result> {
    try {
      return await this.repository.save(data);
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
