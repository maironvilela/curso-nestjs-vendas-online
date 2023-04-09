import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserService } from '@user/data';
import { badRequest, ok, serverError } from '@util/helpers/http-helper';
import { EmailValidation } from '@validation/validations';
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
    @Inject('EmailValidator') private emailValidation: EmailValidation,
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
      return ok(await this.createUserService.execute(data));
    } catch (error) {
      return serverError(error);
    }
  }
}
