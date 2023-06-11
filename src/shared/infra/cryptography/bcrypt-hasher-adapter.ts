import { Injectable } from '@nestjs/common';
import { Hasher } from '@shared/data';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class BcryptHasherAdapter implements Hasher {
  async hash(plaintext: string): Promise<string> {
    const salt = await genSalt();
    return hash(plaintext, salt);
  }
}
