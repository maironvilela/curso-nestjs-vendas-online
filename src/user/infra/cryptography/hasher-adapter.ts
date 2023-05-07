import { Inject, Injectable } from '@nestjs/common';
import { Hasher } from '@user/data';

@Injectable()
export class HasherAdapter implements Hasher {
  constructor(@Inject('HasherAdapter') private hashAdapter: Hasher) {}
  async hash(plaintext: string): Promise<string> {
    return this.hashAdapter.hash(plaintext);
  }
}
