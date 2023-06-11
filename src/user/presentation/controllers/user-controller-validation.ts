import { Injectable } from '@nestjs/common';
import { Validation } from '@shared/presentation/validation/protocols';
import {
  PhoneValidation,
  RequiredFieldValidation,
  ValidationComposite,
} from '@shared/presentation/validation/validations';
import { EmailValidation } from '@shared/presentation/validation/validations/email-validation';
import { RegexCellPhoneValidator } from '@shared/presentation/validation/validator/regex-cell-phone-validator';
import { ValidatorEmailValidatorAdapter } from '@shared/presentation/validation/validator/validator-email-validator-adapter';

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
