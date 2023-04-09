import { Injectable } from '@nestjs/common';
import { Hasher } from '@user/data';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class BcryptAdapter implements Hasher {
  async hash(plaintext: string): Promise<string> {
    const salt = await genSalt();

    return hash(plaintext, salt);
  }
}
