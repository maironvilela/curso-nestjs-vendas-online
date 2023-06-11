import { CreateUserUseCase } from '@user/domain';

export interface CreateUserRepository {
  create: (
    data: CreateUserRepository.Params,
  ) => Promise<CreateUserRepository.Result>;
}

export namespace CreateUserRepository {
  export type Params = {
    id: string;
    name: string;
    email: string;
    phone: string;
    cpf: string;
    password: string;
  };
  export type Result = CreateUserUseCase.Result;
}
