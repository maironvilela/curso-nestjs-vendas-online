import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRepository, Hasher, UuidGenerator } from '@user/data';
import { CreateUser } from '@user/domain/';

@Injectable()
export class CreateUserService implements CreateUser {
  constructor(
    @Inject('Hasher') private hash: Hasher,
    @Inject('UuidGenerator') private uuidGenerator: UuidGenerator,
    @Inject('CreateUserRepository')
    private createUserRepository: CreateUserRepository,
  ) {}

  async execute(data: CreateUser.Params): Promise<CreateUser.Result> {
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
