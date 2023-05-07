import { AddressDTO } from '../dto/address-dto';
import { Address } from '../model/address';

export interface CreateAddressUseCase {
  execute(
    data: CreateAddressUseCase.Params,
  ): Promise<CreateAddressUseCase.Result>;
}

export namespace CreateAddressUseCase {
  export type Params = AddressDTO;
  export type Result = Address;
}
