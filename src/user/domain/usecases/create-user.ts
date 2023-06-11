import { User } from '@user/domain';

export interface CreateUserUseCase {
  execute: (
    data: CreateUserUseCase.Params,
  ) => Promise<CreateUserUseCase.Result>;
}

export namespace CreateUserUseCase {
  export type Params = {
    name: string;
    email: string;
    phone: string;
    cpf: string;
    password: string;
  };

  export type Result = User;
}
