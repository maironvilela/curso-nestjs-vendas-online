import { Module } from '@nestjs/common';
import { CreateUserService } from './data/services/create-user';
import { BcryptAdapter } from './infra/bcrypt-adapter';
import { EmailValidatorAdapter } from './infra/email-validator-adapter';
import { UuidV4Adapter } from './infra/uuidv4-adapter';
import { UserController } from './presentation/controllers/user.controller';
@Module({
  controllers: [UserController],
  providers: [
    CreateUserService,
    {
      provide: 'Hasher',
      useClass: BcryptAdapter,
    },
    {
      provide: 'UuidGenerator',
      useClass: UuidV4Adapter,
    },
    {
      provide: 'EmailValidator',
      useClass: EmailValidatorAdapter,
    },
  ],
})
export class UserModule {}
