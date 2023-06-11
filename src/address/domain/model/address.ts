export type Address = {
  id: string;
  cep: string; // zipCode
  logradouro: string;
  number: number;
  complement: string;
  neighborhood: string;
  cityId: number;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
};
