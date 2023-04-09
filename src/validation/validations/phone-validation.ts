import { InvalidParamError } from '@util/errors';
import { Validation } from '@validation/protocols';
import { PhoneValidator } from '@validation/protocols/phone-validator';

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
