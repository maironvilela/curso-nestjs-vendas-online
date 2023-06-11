import { Validation, ZipCodeValidator } from '@shared/presentation';
import { InvalidParamError } from '@shared/presentation/errors';

export class ZipCodeValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly validator: ZipCodeValidator,
  ) {}

  validate(input: any): Error {
    const isValid = this.validator.isValid(input[this.fieldName]);
    if (!isValid) {
      return new InvalidParamError(this.fieldName);
    }
  }
}
