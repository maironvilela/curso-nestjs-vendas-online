import { Inject, Injectable } from '@nestjs/common';
import { Hasher, UuidGenerator } from '@shared/data';
import { CreateUserRepository } from '@user/data';
import { CreateUser } from '@user/domain/';

@Injectable()
export class CreateUserService implements CreateUser {
  constructor(
    @Inject('Hasher')
    private hasher: Hasher,
    @Inject('UuidGenerator')
    private uuidGenerator: UuidGenerator,
    @Inject('CreateUserRepository')
    private createUserRepository: CreateUserRepository,
  ) {}

  async execute(data: CreateUser.Params): Promise<CreateUser.Result> {
    const passwordHashed = await this.hasher.hash(data.password);
    const id = await this.uuidGenerator.generate();
    const user = await this.createUserRepository.create({
      ...data,
      id: id,
      password: passwordHashed,
    });
    return user;
  }
}
