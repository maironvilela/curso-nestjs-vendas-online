import { Address } from '@address/domain/model/address';

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: Address;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};
