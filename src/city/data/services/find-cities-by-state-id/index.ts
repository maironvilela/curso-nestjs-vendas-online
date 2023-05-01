import { FindCitiesByStateIdRepository } from '@city/data/protocols/find-cities-by-stateid-repository';
import { FindCitiesByStateIdUseCase } from '@city/domain/usecases/find-cities-by-state-id';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindCitiesByStateIdService implements FindCitiesByStateIdUseCase {
  constructor(
    @Inject('FindCitiesByStateIdRepository')
    private findCitiesByStateIdRepository: FindCitiesByStateIdRepository,
  ) {}

  async execute(
    data: FindCitiesByStateIdUseCase.Params,
  ): Promise<FindCitiesByStateIdUseCase.Result> {
    const { stateId } = data;
    return await this.findCitiesByStateIdRepository.findCitiesByStateId({
      stateId,
    });
  }
}
