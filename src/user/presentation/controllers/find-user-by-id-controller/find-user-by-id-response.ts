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
      cep: user.address.cep,
      number: user.address.number,
      complement: user.address.complement,
      neighborhood: user.address.neighborhood,
      logradouro: user.address.logradouro,
    };
  }

  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: {
    id: string;
    cep: string;
    logradouro: string;
    number: number;
    complement: string;
    neighborhood: string;
  };
}
