import { UuidGenerator } from '@address/data/protocols/generator/uuid';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UuidV4AdapterGenerator implements UuidGenerator {
  async generate(): Promise<string> {
    return uuidv4();
  }
}
