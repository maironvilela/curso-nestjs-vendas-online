import { Inject, Injectable } from '@nestjs/common';
import { EmailValidator, Validation } from '@validation/protocols';
import {
  EmailValidation,
  PhoneValidation,
  RequiredFieldValidation,
  ValidationComposite,
} from '@validation/validations';
import {
  CellPhoneValidatorAdapter,
  LandLineValidatorAdapter,
} from '@validation/validators';

@Injectable()
export class CreateUserValidation {
  constructor(
    @Inject('EmailValidator') private emailValidation: EmailValidator,
    private cellPhoneValidatorAdapter: CellPhoneValidatorAdapter,
    private landLineValidatorAdapter: LandLineValidatorAdapter,
  ) {}
  makeCreateUserValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    for (const field of ['email', 'name', 'password', 'phone', 'cpf']) {
      validations.push(new RequiredFieldValidation(field));
    }
    validations.push(new EmailValidation('email', this.emailValidation));
    validations.push(
      new PhoneValidation('phone', this.cellPhoneValidatorAdapter),
    );

    return new ValidationComposite(validations);
  };
}
