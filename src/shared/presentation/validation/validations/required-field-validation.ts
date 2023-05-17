import { MissingParamError } from '@shared/presentation/errors';
import { Validation } from '@shared/validation/protocols';

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  validate(input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName);
    }
  }
}
