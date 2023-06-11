import { PhoneValidator } from '@shared/presentation';

export class LandLineValidation implements PhoneValidator {
  isValid(phone: string): boolean {
    const landLineRegex = /^\([1-9]{2}\) [2-5|7-9]{1}\d{3}\-\d{4}$/;
    return landLineRegex.test(phone);
  }
}
