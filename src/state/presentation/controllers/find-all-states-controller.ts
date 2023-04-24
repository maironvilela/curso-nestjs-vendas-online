import { Inject } from '@nestjs/common';
import { ok, serverError } from '@shared/helpers/http-helper';
import { Controller, HttpResponse } from '@shared/protocols';
import { FindAllStateUseCase } from '@state/domain';

export class FindAllStatesController implements Controller {
  constructor(
    @Inject('FindAllStateUseCase')
    private findAllStateService: FindAllStateUseCase,
  ) {}
  async handle(): Promise<HttpResponse> {
    const states = await this.findAllStateService.execute();
    return ok(states);
  }
  catch(error) {
    console.log(error);
    return serverError(error);
  }
}
