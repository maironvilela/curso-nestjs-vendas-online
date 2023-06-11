import { ZipCodeValidator } from '@shared/presentation';

export class ZipCodeValidation implements ZipCodeValidator {
  isValid(zipCode: string): boolean {
    const zipCodeRegex = /^\d{5}-\d{3}$/;
    return zipCodeRegex.test(zipCode);
  }
}
