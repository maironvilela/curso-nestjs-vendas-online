import { CreateAddressUseCase } from '@address/domain/usecases/create-address';

export interface CreateAddressRepository {
  createAddress: (
    data: CreateAddressRepository.Params,
  ) => Promise<CreateAddressRepository.Result>;
}

export namespace CreateAddressRepository {
  export type Params = CreateAddressUseCase.Params;
  export type Result = CreateAddressUseCase.Result;
}
