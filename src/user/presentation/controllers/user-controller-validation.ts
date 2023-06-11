import { Injectable } from '@nestjs/common';
import { Validation } from '@shared/presentation/validation/protocols';
import {
  PhoneValidation,
  RequiredFieldValidation,
  ValidationComposite,
} from '@shared/presentation/validation/validations';
import { CellPhoneValidator } from '@shared/presentation/validation/validations/cell-phone-validator';
import { ValidatorEmailValidatorAdapter } from '@shared/presentation/validation/validations/validator-email-validation-adapter';
import { EmailValidatorAdapter } from '@shared/presentation/validation/validator/email-validator-adapter';

@Injectable()
export class CreateUserValidation {
  makeCreateUserValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    for (const field of ['email', 'name', 'password', 'phone', 'cpf']) {
      validations.push(new RequiredFieldValidation(field));
    }
    validations.push(
      new EmailValidatorAdapter('email', new ValidatorEmailValidatorAdapter()),
    );
    validations.push(new PhoneValidation('phone', new CellPhoneValidator()));
    return new ValidationComposite(validations);
  };
}
