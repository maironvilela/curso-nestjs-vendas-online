import { Injectable } from '@nestjs/common';
import {
  RequiredFieldValidation,
  Validation,
  ValidationComposite,
} from '@shared/presentation';
import { ZipCodeValidation } from '@shared/presentation/validation/validations/zip-code-validation';
import { ZipCodeValidatorAdapter } from '@shared/presentation/validation/validator/zip-code-validation-adapter';

@Injectable()
export class CreateAddressValidation {
  makeCreateAddressValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    const fields = [
      'cep',
      'logradouro',
      'number',
      'complement',
      'neighborhood',
      'cityId',
    ];

    for (const field of fields) {
      validations.push(new RequiredFieldValidation(field));
    }

    validations.push(
      new ZipCodeValidatorAdapter('cep', new ZipCodeValidation()),
    );

    return new ValidationComposite(validations);
  };
}
