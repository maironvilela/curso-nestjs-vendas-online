import { Inject, Injectable } from '@nestjs/common';
import { CreateUser, User } from '../../../domain/';
import { CreateUserDTO } from '../../dto/create-user-dto';
import { EmailValidator, Hasher, UuidGenerator } from '../../protocols/';
import { CreateUserRepository } from '../../protocols/db/create-user-repository';

@Injectable()
export class CreateUserService implements CreateUser {
  constructor(
    @Inject('Hasher') private hash: Hasher,
    @Inject('UuidGenerator') private uuidGenerator: UuidGenerator,
    @Inject('EmailValidator') private emailValidator: EmailValidator,
    @Inject('CreateUserRepository')
    private createUserRepository: CreateUserRepository,
  ) {}

  async execute(data: CreateUserDTO): Promise<User> {
    const passwordHashed = await this.hash.hash(data.password);
    const id = await this.uuidGenerator.generate();
    const user = await this.createUserRepository.create({
      ...data,
      id: id,
      password: passwordHashed,
    });
    return user;
  }
}
