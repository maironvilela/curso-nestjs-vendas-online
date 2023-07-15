import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { CreateUserController } from '@user/presentation/controllers/create-user-controller';
import { FindUserByIdController } from '@user/presentation/controllers/find-user-by-id-controller';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(
    private createUserController: CreateUserController,
    private findUserByIdController: FindUserByIdController,
  ) {}

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

  @Get('/:id')
  async findUserById(@Param('id') id: string, @Res() res: Response) {
    const user = await this.findUserByIdController.handle({ id });
    return res.json(user);
  }
}
