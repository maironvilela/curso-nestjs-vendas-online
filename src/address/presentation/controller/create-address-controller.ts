import { AddressDTO } from '@address/domain/dto/address-dto';
import { CreateAddressUseCase } from '@address/domain/usecases/create-address';
import { Inject, Injectable } from '@nestjs/common';
import { BadRequestError, HttpResponse } from '@shared/presentation';
import { create } from '@shared/presentation/helpers/http-helper';
import { Controller } from '@shared/presentation/protocols/controller';
import { CreateAddressValidation } from './create-address-validation';

@Injectable()
export class CreateAddressController
  implements Controller<CreateAddressUseCase.Params>
{
  constructor(
    @Inject('CreateAddressUseCase')
    private createAddressService: CreateAddressUseCase,
    private createAddressValidation: CreateAddressValidation,
  ) {}
  async handle(data?: AddressDTO): Promise<HttpResponse> {
    const validation =
      this.createAddressValidation.makeCreateAddressValidation();

    const error = validation.validate(data);

    if (error) {
      throw new BadRequestError(error.message);
    }

    const address = await this.createAddressService.execute(data);
    return create(address);
  }
}

export namespace CreateAddressController {
  export type Request = AddressDTO;
  export type Response = HttpResponse;
}
