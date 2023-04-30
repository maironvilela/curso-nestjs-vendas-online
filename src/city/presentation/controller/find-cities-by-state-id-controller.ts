import { FindCitiesByStateIdUseCase } from '@city/domain/usecases/find-cities-by-state-id';
import { Inject } from '@nestjs/common';
import { ok, serverError } from '@shared/helpers/http-helper';
import { Controller, HttpResponse } from '@shared/protocols';

type Params = {
  stateId: number;
};

export class FindCitiesByStateIdController implements Controller {
  constructor(
    @Inject('FindCitiesByStateIdUseCase')
    private findCitiesByStateIdUseCase: FindCitiesByStateIdUseCase,
  ) {}
  async handle({ stateId }: Params): Promise<HttpResponse> {
    try {
      const cities = await this.findCitiesByStateIdUseCase.execute({ stateId });
      return ok(cities);
    } catch (error) {
      return serverError(error);
    }
  }
}
