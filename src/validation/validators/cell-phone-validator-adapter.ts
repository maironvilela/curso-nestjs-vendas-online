import { Injectable } from '@nestjs/common';
import { PhoneValidator } from '@validation/protocols/phone-validator';

@Injectable()
export class CellPhoneValidatorAdapter implements PhoneValidator {
  isValid(phone: string): boolean {
    const celularRegex = /^\([1-9]{2}\)(?:9[2-9]|8[1-9]|[2-7])\d{3}\-\d{4}$/;

    return celularRegex.test(phone);
  }
}
