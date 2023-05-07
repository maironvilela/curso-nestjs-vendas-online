import { CreateAddressService } from '@address/data/services/create-address';
import { Address } from '@address/infra/db/typeorm/entities/address';
import { AddressController } from '@address/main/router/address.controller';
import { CreateAddressController } from '@address/presentation/controller/create-address-controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressTypeOrmRepository } from './infra/db/typeorm/repositories/address-repository';
import { UuidAdapter } from './infra/generator/uuid-adapter';
import { UuidV4AdapterGenerator } from './main/factories/adapters/generator/uuidv4-adapter-generator';

@Module({
  controllers: [AddressController],
  providers: [
    CreateAddressController,
    CreateAddressService,
    {
      provide: 'UuidGenerator',
      useClass: UuidAdapter,
    },
    {
      provide: 'CreateAddressUseCase',
      useClass: CreateAddressService,
    },
    {
      provide: 'CreateAddressRepository',
      useClass: AddressTypeOrmRepository,
    },
    {
      provide: 'UuidGenerator',
      useClass: UuidV4AdapterGenerator,
    },
  ],
  imports: [TypeOrmModule.forFeature([Address])],
})
export class AddressModule {}
