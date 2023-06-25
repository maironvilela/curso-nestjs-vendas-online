import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BcryptHasherAdapter } from '@shared/infra/cryptography/bcrypt-hasher-adapter';
import { UuidV4GeneratorAdapter } from '@shared/infra/generator/uuidv4-generator-adapter';

import { CreateUserService, FindUserByIdService } from '@user/data';
import { CreateUserValidation } from '@user/presentation/controllers/user-controller-validation';
import { User, UserPostegresRepository } from './infra';
import { UserController } from './main/router/user.controller';
import { CreateUserController } from './presentation/controllers/create-user-controller';
import { FindUserByIdController } from './presentation/controllers/find-user-by-id-controller';

@Module({
  controllers: [UserController],
  providers: [
    CreateUserService,
    CreateUserValidation,
    CreateUserController,
    FindUserByIdController,
    BcryptHasherAdapter,
    FindUserByIdService,

    {
      provide: 'UuidGenerator',
      useClass: UuidV4GeneratorAdapter,
    },

    {
      provide: 'FindUserByIdUseCase',
      useClass: FindUserByIdService,
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
      provide: 'Hasher',
      useClass: BcryptHasherAdapter,
    },
  ],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule, FindUserByIdService],
})
export class UserModule {}
