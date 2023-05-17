import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UuidV4GeneratorAdapterFactory } from '@shared/main/factories/adapters/uuidv4-generator-adapter-factory';
import {
  CellPhoneValidatorAdapter,
  EmailValidatorAdapter,
  LandLineValidatorAdapter,
} from '@shared/presentation/validation/validators';
import { SharedModule } from '@shared/shared.module';
import { CreateUserService } from '@user/data';
import { HasherAdapter, User, UserPostegresRepository } from '@user/infra';
import { CreateUserValidation } from '@user/presentation/controllers/user-controller-validation';
import { UuidGeneratorAdapter } from './infra/generator/uuid-generator-adapter';
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
    UuidGeneratorAdapter,

    {
      provide: 'UuidGenerator',
      useClass: UuidV4GeneratorAdapterFactory,
    },

    {
      provide: 'CreateUserRepository',
      useClass: UserPostegresRepository,
    },
    {
      provide: 'EmailValidator',
      useClass: EmailValidatorAdapter,
    },

    {
      provide: 'HasherAdapter',
      useClass: BcryptHasherAdapterFactory,
    },
  ],
  imports: [TypeOrmModule.forFeature([User]), SharedModule],
  exports: [TypeOrmModule],
})
export class UserModule {}
