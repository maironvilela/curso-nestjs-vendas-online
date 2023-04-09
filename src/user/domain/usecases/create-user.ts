/* eslint-disable @typescript-eslint/no-namespace */
import { User } from '../';

export interface CreateUser {
  execute: (data: CreateUser.Params) => Promise<CreateUser.Result>;
}

export namespace CreateUser {
  export type Params = {
    name: string;
    email: string;
    phone: string;
    cpf: string;
    password: string;
  };

  export type Result = User;
}
