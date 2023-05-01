import { Injectable } from '@nestjs/common';
import { BadRequestError } from '@shared/errors/bad-request-error';
import { create } from '@shared/helpers/http-helper';
import { Controller, HttpResponse } from '@shared/protocols';
import { CreateUserService } from '@user/data';
import { CreateUserValidation } from './user-controller-validation';

export namespace CreateUserController {
  export type Request = {
    email: string;
    password: string;
    name: string;
    cpf: string;
    phone: string;
  };

  export type Response = HttpResponse;
}

@Injectable()
export class CreateUserController implements Controller {
  constructor(
    private createUserService: CreateUserService,
    private createUserValidation: CreateUserValidation,
  ) {}

  async handle(data: CreateUserController.Request): Promise<HttpResponse> {
    const validation = this.createUserValidation.makeCreateUserValidation();
    const error = validation.validate(data);
    if (error) {
      throw new BadRequestError(error.message);
    }
    return create(await this.createUserService.execute(data));
  }
}
