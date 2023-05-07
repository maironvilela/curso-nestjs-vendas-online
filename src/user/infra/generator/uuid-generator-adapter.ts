import { Inject, Injectable } from '@nestjs/common';
import { UuidGenerator } from '@user/data';

@Injectable()
export class UuidGeneratorAdapter implements UuidGenerator {
  constructor(@Inject('UuidGenerator') private uuidGenerator: UuidGenerator) {}
  async generate(): Promise<string> {
    return this.uuidGenerator.generate();
  }
}
