import { CreateAddressRepository } from '@address/data/protocols/db/create-address-repository';
import { CreateAddressUseCase } from '@address/domain/usecases/create-address';
import { FindCityByIdUseCase } from '@city/domain/usecases/find-city-by-id';
import { Inject, Injectable } from '@nestjs/common';
import { UuidGenerator } from '@shared/data';
import { BadRequestError } from '@shared/presentation';
import { FindUserByIdUseCase } from '@user/domain';

@Injectable()
export class CreateAddressService implements CreateAddressUseCase {
  constructor(
    @Inject('CreateAddressRepository')
    private createAddressRepository: CreateAddressRepository,
    @Inject('UuidGenerator')
    private uuidGenerator: UuidGenerator,
    @Inject('FindUserByIdUseCase')
    private findUserByIdService: FindUserByIdUseCase,
    @Inject('FindCityByIdUseCase')
    private findCityByIdService: FindCityByIdUseCase,
  ) {}
  async execute(
    data: CreateAddressUseCase.Params,
  ): Promise<CreateAddressUseCase.Result> {
    const user = await this.findUserByIdService.execute({ id: data.userId });
    if (!user) {
      throw new BadRequestError('User not found');
    }

    const city = await this.findCityByIdService.execute({
      id: Number(data.cityId),
    });

    if (!city) {
      throw new BadRequestError('City not found');
    }

    const id = await this.uuidGenerator.generate();
    return await this.createAddressRepository.createAddress({ ...data, id });
  }
}
