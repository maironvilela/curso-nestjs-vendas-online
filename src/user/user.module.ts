import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserService } from './data/services/create-user';
import { User } from './infra';
import { BcryptAdapter } from './infra/bcrypt-adapter';
import { UserPostegresRepository } from './infra/db/postgres/repository/user-postegres-repository';
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
    {
      provide: 'CreateUserRepository',
      useClass: UserPostegresRepository,
    },
  ],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
})
export class UserModule {}
