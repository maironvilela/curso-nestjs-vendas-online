import { Module } from '@nestjs/common';
import { UuidV4GeneratorAdapterFactory } from './main/factories/adapters/uuidv4-generator-adapter-factory';

@Module({
  exports: [UuidV4GeneratorAdapterFactory],
  providers: [UuidV4GeneratorAdapterFactory],
})
export class SharedModule {}
