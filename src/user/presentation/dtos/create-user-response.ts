import { User } from '@user/domain';

export class CreateUserResponse {
  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.cpf = user.cpf;
  }
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
}
