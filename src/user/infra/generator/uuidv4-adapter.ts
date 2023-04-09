import { UuidGenerator } from '@user/data';
import { uuid } from 'uuidv4';

export class UuidV4Adapter implements UuidGenerator {
  async generate(): Promise<string> {
    return uuid();
  }
}
