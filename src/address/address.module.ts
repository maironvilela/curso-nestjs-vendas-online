import { CreateAddressService } from '@address/data/services/create-address';
import { Address } from '@address/infra/db/typeorm/entities/address';
import { AddressController } from '@address/main/router/address.controller';
import { CreateAddressController } from '@address/presentation/controller/create-address-controller';
import { CityModule } from '@city/city.module';
import { FindCityByIdService } from '@city/data/services/find-city-by-id';
import { CityTypeOrmRepository } from '@city/infra/db/typeorm/repositories/city-repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UuidV4GeneratorAdapter } from '@shared/infra/generator/uuidv4-generator-adapter';
import { SharedModule } from '@shared/shared.module';
import { FindUserByIdService } from '@user/data';
import { UserTypeOrmRepository } from '@user/infra/db/typeorm/repository/user-typeorm-repository';
import { UserModule } from '@user/user.module';
import { AddressTypeOrmRepository } from './infra/db/typeorm/repositories/address-repository';
import { CreateAddressValidation } from './presentation/controller/create-address-validation';

@Module({
  controllers: [AddressController],
  providers: [
    CreateAddressController,
    CreateAddressService,
    CreateAddressValidation,

    {
      provide: 'CreateAddressUseCase',
      useClass: CreateAddressService,
    },
    {
      provide: 'CreateAddressRepository',
      useClass: AddressTypeOrmRepository,
    },
    {
      provide: 'FindUserByIdUseCase',
      useClass: FindUserByIdService,
    },
    {
      provide: 'FindUserByIdRepository',
      useClass: UserTypeOrmRepository,
    },
    {
      provide: 'FindCityByIdUseCase',
      useClass: FindCityByIdService,
    },
    {
      provide: 'FindCityByIdRepository',
      useClass: CityTypeOrmRepository,
    },

    {
      provide: 'UuidGenerator',
      useClass: UuidV4GeneratorAdapter,
    },
  ],
  imports: [
    TypeOrmModule.forFeature([Address]),
    SharedModule,
    UserModule,
    CityModule,
  ],
})
export class AddressModule {}
