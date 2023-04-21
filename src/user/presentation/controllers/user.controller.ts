import { Body, Controller, Post } from '@nestjs/common';
import { badRequest, create, serverError } from '@shared/helpers/http-helper';
import { CreateUserService } from '@user/data';
import { CreateUserValidation } from './user-controller-validation';

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
  constructor(
    private createUserService: CreateUserService,
    private createUserValidation: CreateUserValidation,
  ) {}

  @Post()
  async createUser(
    @Body() data: UserController.Request,
  ): Promise<UserController.Response> {
    try {
      const validation = this.createUserValidation.makeCreateUserValidation();
      const error = validation.validate(data);
      if (error) {
        return badRequest(error);
      }
      return create(await this.createUserService.execute(data));
    } catch (error) {
      return serverError(error);
    }
  }
}
