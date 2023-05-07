import { Injectable } from '@nestjs/common';
import { UuidGenerator } from '@user/data';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UuidV4GeneratorAdapterFactory implements UuidGenerator {
  async generate(): Promise<string> {
    return uuidv4();
  }
}
