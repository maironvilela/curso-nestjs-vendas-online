import { CacheService } from '@cache/cache/cache.service';
import { FindCitiesByStateIdRepository } from '@city/data/protocols/find-cities-by-stateid-repository';
import { FindCitiesByStateIdUseCase } from '@city/domain/usecases/find-cities-by-state-id';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindCitiesByStateIdService implements FindCitiesByStateIdUseCase {
  constructor(
    @Inject('FindCitiesByStateIdRepository')
    private findCitiesByStateIdRepository: FindCitiesByStateIdRepository,
    private cacheService: CacheService,
  ) {}

  async execute(
    data: FindCitiesByStateIdUseCase.Params,
  ): Promise<FindCitiesByStateIdUseCase.Result> {
    const { stateId } = data;

    const cities =
      await this.cacheService.getCache<FindCitiesByStateIdUseCase.Result>({
        key: `state_${stateId}`,
        functionRequest: async () =>
          await this.findCitiesByStateIdRepository.findCitiesByStateId({
            stateId,
          }),
      });

    return cities;
  }
}
