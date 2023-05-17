import { CreateAddressRepository } from '@address/data/protocols/db/create-address-repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServerError } from '@shared/presentation/errors';
import { Repository } from 'typeorm';
import { Address } from '../entities/address';

@Injectable()
export class AddressTypeOrmRepository implements CreateAddressRepository {
  constructor(
    @InjectRepository(Address)
    private repository: Repository<Address>,
  ) {}
  async createAddress(
    data: CreateAddressRepository.Params,
  ): Promise<CreateAddressRepository.Result> {
    try {
      return this.repository.save(data);
    } catch (error) {
      console.error(error);
      throw new ServerError(error);
    }
  }
}
