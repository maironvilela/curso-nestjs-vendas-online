import { Inject, Injectable } from '@nestjs/common';
import { Controller, HttpResponse, ok } from '@shared/presentation';
import { FindUserByIdUseCase } from '@user/domain';
import { FindUserByIdResponse } from './find-user-by-id-response';

export namespace FindUserByIdController {
  export type Request = {
    id: string;
  };

  export type Response = HttpResponse;
}

@Injectable()
export class FindUserByIdController implements Controller {
  constructor(
    @Inject('FindUserByIdUseCase')
    private findUserByIdService: FindUserByIdUseCase,
  ) {}

  async handle(
    data: FindUserByIdController.Request,
  ): Promise<FindUserByIdController.Response> {
    const user = await this.findUserByIdService.execute(data);
    const userResponse = new FindUserByIdResponse(user);
    return ok(userResponse);
  }
}
