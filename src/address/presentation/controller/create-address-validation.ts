import { Injectable } from '@nestjs/common';
import {
  RegexZipCodeValidator,
  RequiredFieldValidation,
  Validation,
  ValidationComposite,
  ZipCodeValidation,
} from '@shared/presentation';

@Injectable()
export class CreateAddressValidation {
  makeCreateAddressValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    const fields = [
      'zipCode',
      'street',
      'number',
      'complement',
      'neighborhood',
      'cityId',
    ];

    for (const field of fields) {
      validations.push(new RequiredFieldValidation(field));
    }

    validations.push(
      new ZipCodeValidation('zipCode', new RegexZipCodeValidator()),
    );

    return new ValidationComposite(validations);
  };
}
