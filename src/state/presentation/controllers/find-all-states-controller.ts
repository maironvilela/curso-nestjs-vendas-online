import { Inject } from '@nestjs/common';
import { HttpResponse } from '@shared/presentation';
import { ok } from '@shared/presentation/helpers/http-helper';
import { Controller } from '@shared/presentation/protocols/controller';
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
}
