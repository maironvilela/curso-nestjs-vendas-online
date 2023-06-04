import { AddressDTO } from '@address/domain/dto/address-dto';
import { CreateAddressUseCase } from '@address/domain/usecases/create-address';
import { Inject, Injectable } from '@nestjs/common';
import { HttpResponse } from '@shared/presentation';
import { create } from '@shared/presentation/helpers/http-helper';
import { Controller } from '@shared/presentation/protocols/controller';

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

export namespace CreateAddressController {
  export type Request = AddressDTO;
  export type Response = HttpResponse;
}
