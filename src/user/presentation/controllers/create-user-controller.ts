import { Injectable } from '@nestjs/common';
import { create } from '@shared/presentation';
import { BadRequestError } from '@shared/presentation/errors/bad-request-error';
import { Controller } from '@shared/presentation/protocols/controller';
import { HttpResponse } from '@shared/presentation/protocols/http';
import { CreateUserService } from '@user/data';
import { CreateUserResponse } from '../dtos/create-user-response';
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
    const user = await this.createUserService.execute(data);

    return create(new CreateUserResponse(user));
  }
}
