import { Inject, Injectable } from '@nestjs/common';
import { Hasher } from '@shared/data';

@Injectable()
export class HasherAdapter implements Hasher {
  constructor(@Inject('HasherAdapterFactory') private hashAdapter: Hasher) {}
  async hash(plaintext: string): Promise<string> {
    return this.hashAdapter.hash(plaintext);
  }
}
