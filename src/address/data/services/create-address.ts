import { CreateAddressRepository } from '@address/data/protocols/db/create-address-repository';
import { UuidGenerator } from '@address/data/protocols/generator/uuid';
import { CreateAddressUseCase } from '@address/domain/usecases/create-address';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateAddressService implements CreateAddressUseCase {
  constructor(
    @Inject('CreateAddressRepository')
    private createAddressRepository: CreateAddressRepository,
    @Inject('UuidGenerator')
    private uuidGenerator: UuidGenerator,
  ) {}
  async execute(
    data: CreateAddressUseCase.Params,
  ): Promise<CreateAddressUseCase.Result> {
    const id = await this.uuidGenerator.generate();
    return await this.createAddressRepository.createAddress({ ...data, id });
  }
}
