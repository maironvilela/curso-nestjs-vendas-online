import { CreateAddressController } from '@address/presentation/controller/create-address-controller';
import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('address')
export class AddressController {
  constructor(private createAddressController: CreateAddressController) {}
  @Post()
  async createAddress(
    @Body() data: CreateAddressController.Request,
    @Res() res: Response,
  ) {
    try {
      const response = await this.createAddressController.handle(data);
      return res.status(HttpStatus.CREATED).json(response);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
