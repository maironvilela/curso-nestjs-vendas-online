import { City } from '@city/domain/model/city';

export type Address = {
  id: string;
  zipCode: string;
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
  cityId: number;
  city?: City;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
};
