import { CreateAddressController } from '@address/presentation/controller/create-address-controller';
import { Body, Controller, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { badRequest } from '@shared/presentation';
import { Response } from 'express';

@Controller('address')
export class AddressController {
  constructor(private createAddressController: CreateAddressController) {}
  @Post('/:userId')
  async createAddress( 
    @Body() data: CreateAddressController.Request,
    @Param('userId') userId: string,
    @Res() res: Response,
  ) {
    try {
      // validar cep
      const response = await this.createAddressController.handle({
        ...data,
        userId,
      });
      return res.status(HttpStatus.CREATED).json(response);
    } catch (error) {
       return res.status(HttpStatus.BAD_REQUEST).json(badRequest(error));
     }
  }
}
