import { Inject, Injectable } from '@nestjs/common';
import { CreateUser, User } from '../../../domain/';
import { CreateUserDTO } from '../../dto/create-user-dto';
import { EmailValidator, Hasher, UuidGenerator } from '../../protocols/';

@Injectable()
export class CreateUserService implements CreateUser {
  constructor(
    @Inject('Hasher') private hash: Hasher,
    @Inject('UuidGenerator') private uuidGenerator: UuidGenerator,
    @Inject('EmailValidator') private emailValidator: EmailValidator,
  ) {}

  async execute(data: CreateUserDTO): Promise<User> {
    const hashPassword = await this.hash.hash(data.password);
    const id = await this.uuidGenerator.generate();
    const isValidEmail = this.emailValidator.isValid(data.email);
    console.log('email invalido: ', isValidEmail);
    return new Promise((resolve) => {
      return resolve({ ...data, id, password: hashPassword });
    });
  }
}
