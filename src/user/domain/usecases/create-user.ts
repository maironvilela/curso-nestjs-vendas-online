import { User } from '../';

export type CreateUserParams = {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
};

export interface CreateUser {
  execute(data: CreateUserParams): Promise<User>;
}
