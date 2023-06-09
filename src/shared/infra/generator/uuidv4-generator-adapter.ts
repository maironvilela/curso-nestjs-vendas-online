import { Injectable } from '@nestjs/common';
import { UuidGenerator } from '@shared/data/protocols/generator/uuid';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UuidV4GeneratorAdapter implements UuidGenerator {
  async generate(): Promise<string> {
    return uuidv4();
  }
}
