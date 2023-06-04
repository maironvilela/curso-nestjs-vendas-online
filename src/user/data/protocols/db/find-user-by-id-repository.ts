import { FindUserByIdUseCase } from '@user/domain';

export interface FindUserByIdRepository {
  findUserById(
    userId: FindUserByIdUseCase.Params,
  ): Promise<FindUserByIdUseCase.Result>;
}
