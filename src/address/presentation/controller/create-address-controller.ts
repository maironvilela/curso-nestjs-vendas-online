import { AddressDTO } from '@address/domain/dto/address-dto';
import { CreateAddressUseCase } from '@address/domain/usecases/create-address';
import { Inject, Injectable } from '@nestjs/common';
import { create } from '@shared/helpers/http-helper';
import { Controller, HttpResponse } from '@shared/protocols';

export namespace CreateAddressController {
  export type Request = AddressDTO;
  export type Response = HttpResponse;
}

@Injectable()
export class CreateAddressController
  implements Controller<CreateAddressUseCase.Params>
{
  constructor(
    @Inject('CreateAddressUseCase')
    private createAddressUseCase: CreateAddressUseCase,
  ) {}
  async handle(data?: AddressDTO): Promise<HttpResponse> {
    const address = await this.createAddressUseCase.execute(data);
    return create(address);
  }
}