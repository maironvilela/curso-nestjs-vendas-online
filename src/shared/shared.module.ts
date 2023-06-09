import { Global, Module } from '@nestjs/common';
import { UuidV4GeneratorAdapter } from './infra/generator/uuidv4-generator-adapter';

@Global()
@Module({
  exports: [UuidV4GeneratorAdapter],
  providers: [UuidV4GeneratorAdapter],
})
export class SharedModule {}
