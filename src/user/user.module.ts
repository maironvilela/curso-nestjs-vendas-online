import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BcryptHasherAdapter } from '@shared/infra/cryptography/bcrypt-hasher-adapter';
import { UuidV4GeneratorAdapter } from '@shared/infra/generator/uuidv4-generator-adapter';

import { CreateUserService, FindUserByIdService } from '@user/data';
import { User } from './infra';
import { UserTypeOrmRepository } from './infra/db/typeorm/repository/user-typeorm-repository';
import { UserController } from './main/router/user.controller';
import { CreateUserController } from './presentation/controllers/create-user-controller';
import { CreateUserValidation } from './presentation/controllers/create-user-controller/create-user-controller-validation';
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
      useClass: UserTypeOrmRepository,
    },
    {
      provide: 'FindUserByIdRepository',
      useClass: UserTypeOrmRepository,
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
