import { Injectable } from '@nestjs/common';
import { genSalt, hash } from 'bcrypt';
import { Hasher } from '../data';

@Injectable()
export class BcryptAdapter implements Hasher {
  async hash(plaintext: string): Promise<string> {
    const salt = await genSalt();

    return hash(plaintext, salt);
  }
}
