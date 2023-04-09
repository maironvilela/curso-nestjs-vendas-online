import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserService } from '@user/data';
import {
  BcryptAdapter,
  UserEntity,
  UserPostegresRepository,
  UuidV4Adapter,
} from '@user/infra';
import { UserController } from '@user/presentation';
import { CreateUserValidation } from '@user/presentation/controllers/user-controller-validation';
import { EmailValidatorAdapter } from '@validation/validators/email-validator-adapter';

@Module({
  controllers: [UserController],
  providers: [
    CreateUserService,
    CreateUserValidation,
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
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [TypeOrmModule],
})
export class UserModule {}
