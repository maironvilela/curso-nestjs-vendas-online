import { Hasher } from '@user/data';
import { genSalt, hash } from 'bcrypt';

export class BcryptHasherAdapterFactory implements Hasher {
  async hash(plaintext: string): Promise<string> {
    const salt = await genSalt();
    return hash(plaintext, salt);
  }
}
