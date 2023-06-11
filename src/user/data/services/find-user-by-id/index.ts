import { Inject, Injectable } from '@nestjs/common';
import { FindUserByIdRepository } from '@user/data';
import { FindUserByIdUseCase } from '@user/domain';

@Injectable()
export class FindUserByIdService implements FindUserByIdUseCase {
  constructor(
    @Inject('FindUserByIdRepository')
    private findUserByIdRepository: FindUserByIdRepository,
  ) {}
  async execute({
    id,
  }: FindUserByIdUseCase.Params): Promise<FindUserByIdUseCase.Result> {
    return await this.findUserByIdRepository.findUserById({ id });
  }
}
