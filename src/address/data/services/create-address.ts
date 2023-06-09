import { CreateAddressRepository } from '@address/data/protocols/db/create-address-repository';
import { CreateAddressUseCase } from '@address/domain/usecases/create-address';
import { Inject, Injectable } from '@nestjs/common';
import { UuidGenerator } from '@shared/data';
import { BadRequestError } from '@shared/presentation';
import { FindUserByIdService } from '@user/data';

@Injectable()
export class CreateAddressService implements CreateAddressUseCase {
  constructor(
    @Inject('CreateAddressRepository')
    private createAddressRepository: CreateAddressRepository,
    @Inject('UuidGenerator')
    private uuidGenerator: UuidGenerator,
    private findUserByIdService: FindUserByIdService,
  ) {}
  async execute(
    data: CreateAddressUseCase.Params,
  ): Promise<CreateAddressUseCase.Result> {
    const user = await this.findUserByIdService.execute({ id: data.userId });
    console.log(!!user);
    if (!user) {
      throw new BadRequestError('User not found');
    }
    // verificar se cidade existe

    const id = await this.uuidGenerator.generate();
    return await this.createAddressRepository.createAddress({ ...data, id });
  }
}
