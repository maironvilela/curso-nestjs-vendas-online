import { Injectable } from '@nestjs/common';
import {
  EmailValidation,
  PhoneValidation,
  RegexCellPhoneValidator,
  RequiredFieldValidation,
  Validation,
  ValidationComposite,
  ValidatorEmailValidatorAdapter,
} from '@shared/presentation';

@Injectable()
export class CreateUserValidation {
  makeCreateUserValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    for (const field of ['email', 'name', 'password', 'phone', 'cpf']) {
      validations.push(new RequiredFieldValidation(field));
    }
    validations.push(
      new EmailValidation('email', new ValidatorEmailValidatorAdapter()),
    );
    validations.push(
      new PhoneValidation('phone', new RegexCellPhoneValidator()),
    );
    return new ValidationComposite(validations);
  };
}
