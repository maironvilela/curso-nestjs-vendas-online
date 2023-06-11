import { EmailValidator } from '@shared/presentation';
import validator from 'validator';

export class ValidatorEmailValidatorAdapter implements EmailValidator {
  isValid(email: string): boolean {
    return validator.isEmail(email);
  }
}
