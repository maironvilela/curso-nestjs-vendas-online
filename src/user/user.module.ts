import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CellPhoneValidatorAdapter,
  EmailValidatorAdapter,
  LandLineValidatorAdapter,
} from '@shared/validation/validators';

import { CreateUserService } from '@user/data';
import {
  BcryptAdapter,
  User,
  UserPostegresRepository,
  UuidV4Adapter,
} from '@user/infra';
import { CreateUserValidation } from '@user/presentation/controllers/user-controller-validation';
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
    {
      provide: 'Hasher',
      useClass: BcryptAdapter,
    },
    {
      provide: 'UuidGenerator',
      useClass: UuidV4Adapter,
    },

    {
      provide: 'CreateUserRepository',
      useClass: UserPostegresRepository,
    },
    {
      provide: 'EmailValidator',
      useClass: EmailValidatorAdapter,
    },
  ],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
})
export class UserModule {}
