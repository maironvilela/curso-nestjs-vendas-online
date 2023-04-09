import { Injectable } from '@nestjs/common';
import { PhoneValidator } from '@validation/protocols/phone-validator';

@Injectable()
export class LandLineValidatorAdapter implements PhoneValidator {
  isValid(phone: string): boolean {
    const landLineRegex = /^\([1-9]{2}\) [2-5|7-9]{1}\d{3}\-\d{4}$/;
    return landLineRegex.test(phone);
  }
}
