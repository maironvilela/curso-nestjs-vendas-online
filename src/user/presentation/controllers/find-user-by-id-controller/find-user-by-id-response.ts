import { User } from '@user/domain';

export class FindUserByIdResponse {
  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.cpf = user.cpf;
    this.address = {
      id: user.address.id,
      zipCode: user.address.zipCode,
      number: user.address.number,
      complement: user.address.complement,
      neighborhood: user.address.neighborhood,
      street: user.address.street,
      city: user.address.city.name,
      state: user.address.city.state.name,
    };
  }

  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: {
    id: string;
    zipCode: string;
    street: string;
    number: number;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
}
