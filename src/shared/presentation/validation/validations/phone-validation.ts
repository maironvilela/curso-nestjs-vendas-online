import { PhoneValidator, Validation } from '@shared/presentation';
import { InvalidParamError } from '@shared/presentation/errors';

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
