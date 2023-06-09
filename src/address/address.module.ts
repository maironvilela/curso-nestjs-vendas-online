import { CreateAddressService } from '@address/data/services/create-address';
import { Address } from '@address/infra/db/typeorm/entities/address';
import { AddressController } from '@address/main/router/address.controller';
import { CreateAddressController } from '@address/presentation/controller/create-address-controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UuidV4GeneratorAdapter } from '@shared/infra/generator/uuidv4-generator-adapter';
import { SharedModule } from '@shared/shared.module';
import { UserModule } from '@user/user.module';
import { AddressTypeOrmRepository } from './infra/db/typeorm/repositories/address-repository';

@Module({
  controllers: [AddressController],
  providers: [
    CreateAddressController,
    CreateAddressService,

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
      useClass: UuidV4GeneratorAdapter,
    },
  ],
  imports: [TypeOrmModule.forFeature([Address]), SharedModule, UserModule],
})
export class AddressModule {}
