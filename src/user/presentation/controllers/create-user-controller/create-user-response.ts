import { User } from '@user/domain';

export class CreateUserResponse {
  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
  }
  id: string;
  name: string;
  email: string;
  phone: string;
}
