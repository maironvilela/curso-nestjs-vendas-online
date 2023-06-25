import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestError, ServerError } from '@shared/presentation';
import { CreateUserRepository, FindUserByIdRepository } from '@user/data';
import { FindUserByIdUseCase } from '@user/domain';
import { User } from '@user/infra';
import { QueryFailedError, Repository } from 'typeorm';

@Injectable()
// alterar nome da classe para UserTypeormRepository
export class UserPostegresRepository
  implements CreateUserRepository, FindUserByIdRepository
{
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async findUserById({
    id,
  }: FindUserByIdUseCase.Params): Promise<FindUserByIdUseCase.Result> {
    try {
      const user = await this.repository.findOne({
        where: {
          id: id,
        },
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          cpf: true,
        },
        relations: ['address'],
      });

      return user;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new BadRequestError(`User ${id} Not Found`);
      }
      throw new ServerError('Server Error');
    }
  }

  async create(
    data: CreateUserRepository.Params,
  ): Promise<CreateUserRepository.Result> {
    return await this.repository.save(data);
  }
}
