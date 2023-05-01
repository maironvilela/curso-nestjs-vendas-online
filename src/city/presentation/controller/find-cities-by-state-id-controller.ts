import { FindCitiesByStateIdUseCase } from '@city/domain/usecases/find-cities-by-state-id';
import { Inject } from '@nestjs/common';
import { ok } from '@shared/helpers/http-helper';
import { Controller, HttpResponse } from '@shared/protocols';

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
