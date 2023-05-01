import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUserController } from '@user/presentation';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private createUserController: CreateUserController) {}

  @Post()
  async createUser(
    @Body() data: CreateUserController.Request,
    @Res() res: Response,
  ) {
    try {
      const httpResponse = await this.createUserController.handle(data);
      return res.status(HttpStatus.CREATED).json(httpResponse);
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }
}
