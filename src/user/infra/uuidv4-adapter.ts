import { uuid } from 'uuidv4';
import { UuidGenerator } from '../data';

export class UuidV4Adapter implements UuidGenerator {
  async generate(): Promise<string> {
    return uuid();
  }
}
