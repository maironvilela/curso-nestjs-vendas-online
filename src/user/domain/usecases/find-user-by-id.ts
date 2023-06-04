import { User } from '../model/user';

export interface FindUserByIdUseCase {
  execute(
    data: FindUserByIdUseCase.Params,
  ): Promise<FindUserByIdUseCase.Result>;
}

export namespace FindUserByIdUseCase {
  export type Params = {
    id: string;
  };

  export type Result = User;
}
