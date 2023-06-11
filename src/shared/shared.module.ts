import { Global, Module } from '@nestjs/common';
import { BcryptHasherAdapter } from './infra/cryptography/bcrypt-hasher-adapter';
import { UuidV4GeneratorAdapter } from './infra/generator/uuidv4-generator-adapter';

@Global()
@Module({
  exports: [UuidV4GeneratorAdapter, BcryptHasherAdapter],
  providers: [UuidV4GeneratorAdapter, BcryptHasherAdapter],
})
export class SharedModule {}
