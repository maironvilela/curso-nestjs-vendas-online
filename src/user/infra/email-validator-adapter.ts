import { validate } from 'email-validator';
import { EmailValidator } from '../data';

export class EmailValidatorAdapter implements EmailValidator {
  isValid(email: string): boolean {
    return validate(email);
  }
}
