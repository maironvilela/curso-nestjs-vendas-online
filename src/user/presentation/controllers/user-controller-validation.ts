import { Inject, Injectable } from '@nestjs/common';
import { EmailValidator, Validation } from '@validation/protocols';
import { EmailValidation, ValidationComposite } from '@validation/validators';
import { RequiredFieldValidation } from '@validation/validators/required-field-validation';

@Injectable()
export class CreateUserValidation {
  constructor(
    @Inject('EmailValidator') private emailValidation: EmailValidator,
  ) {}
  makeCreateUserValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    for (const field of ['email', 'name', 'password', 'phone', 'cpf']) {
      validations.push(new RequiredFieldValidation(field));
    }
    validations.push(new EmailValidation('email', this.emailValidation));
    return new ValidationComposite(validations);
  };
}
