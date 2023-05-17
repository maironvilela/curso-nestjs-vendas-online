import { FindCitiesByStateIdUseCase } from '@city/domain/usecases/find-cities-by-state-id';
import { Inject } from '@nestjs/common';
import { ok } from '@shared/presentation/helpers/http-helper';
import { Controller } from '@shared/presentation/protocols/controller';
import { HttpResponse } from '@shared/presentation/protocols/http';

export namespace FindCitiesByStateIdController {
  export type Request = {
    stateId: number;
  };

  export type Response = HttpResponse;
}

export class FindCitiesByStateIdController
  implements Controller<FindCitiesByStateIdController.Request>
{
  constructor(
    @Inject('FindCitiesByStateIdUseCase')
    private findCitiesByStateIdUseCase: FindCitiesByStateIdUseCase,
  ) {}
  async handle({
    stateId,
  }: FindCitiesByStateIdController.Request): Promise<FindCitiesByStateIdController.Response> {
    const cities = await this.findCitiesByStateIdUseCase.execute({ stateId });
    return ok(cities);
  }
}
