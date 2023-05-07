import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRepository } from '@user/data';
import { CreateUser } from '@user/domain/';
import { HasherAdapter } from '@user/infra';
import { UuidGeneratorAdapter } from '@user/infra/generator/uuid-generator-adapter';

@Injectable()
export class CreateUserService implements CreateUser {
  constructor(
    private hasher: HasherAdapter,
    private uuidGenerator: UuidGeneratorAdapter,
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
