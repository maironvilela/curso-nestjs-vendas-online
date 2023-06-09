import { Inject } from '@nestjs/common';
import { UuidGenerator } from '@shared/data';

export class UuidAdapter implements UuidGenerator {
  constructor(
    @Inject('UuidGenerator')
    private uuidGenerator: UuidGenerator,
  ) {}
  async generate(): Promise<string> {
    return this.uuidGenerator.generate();
  }
}
