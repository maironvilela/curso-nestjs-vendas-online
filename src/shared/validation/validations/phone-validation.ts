import { InvalidParamError } from '@shared/errors';
import { PhoneValidator, Validation } from '@shared/validation/protocols';

export class PhoneValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly phoneValidator: PhoneValidator,
  ) {}

  validate(input: any): Error {
    const isValid = this.phoneValidator.isValid(input[this.fieldName]);
    if (!isValid) {
      return new InvalidParamError(this.fieldName);
    }
  }
}
