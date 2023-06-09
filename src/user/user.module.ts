import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UuidV4GeneratorAdapter } from '@shared/infra/generator/uuidv4-generator-adapter';
import {
  CellPhoneValidatorAdapter,
  EmailValidatorAdapter,
  LandLineValidatorAdapter,
} from '@shared/presentation/validation/validators';
import { CreateUserService, FindUserByIdService } from '@user/data';
import { HasherAdapter, User, UserPostegresRepository } from '@user/infra';
import { CreateUserValidation } from '@user/presentation/controllers/user-controller-validation';
import { BcryptHasherAdapterFactory } from './main/factories/adapters/bcrypt-hasher-adapter-factory';
import { UserController } from './main/router/user.controller';
import { CreateUserController } from './presentation/controllers/create-user-controller';

@Module({
  controllers: [UserController],
  providers: [
    CreateUserService,
    CreateUserValidation,
    CellPhoneValidatorAdapter,
    LandLineValidatorAdapter,
    CreateUserController,
    HasherAdapter,
    FindUserByIdService,

    {
      provide: 'UuidGenerator',
      useClass: UuidV4GeneratorAdapter,
    },

    {
      provide: 'CreateUserRepository',
      useClass: UserPostegresRepository,
    },
    {
      provide: 'FindUserByIdRepository',
      useClass: UserPostegresRepository,
    },
    {
      provide: 'EmailValidator',
      useClass: EmailValidatorAdapter,
    },

    {
      provide: 'HasherAdapterFactory',
      useClass: BcryptHasherAdapterFactory,
    },
    {
      provide: 'Hasher',
      useClass: HasherAdapter,
    },
  ],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule, FindUserByIdService],
})
export class UserModule {}
