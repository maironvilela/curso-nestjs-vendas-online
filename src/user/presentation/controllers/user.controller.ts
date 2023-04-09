import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from '../../data';
import { ok, serverError } from '../helpers/http-helper';

export namespace UserController {
  export type Request = {
    email: string;
    password: string;
    name: string;
    cpf: string;
    phone: string;
  };

  export type Response = {
    statusCode: number;
    body: any;
  };
}

@Controller('user')
export class UserController {
  constructor(private createUserService: CreateUserService) {}

  @Post()
  async createUser(
    @Body() createUser: UserController.Request,
  ): Promise<UserController.Response> {
    try {
      return ok(await this.createUserService.execute(createUser));
    } catch (error) {
      return serverError(error);
    }
  }
}
