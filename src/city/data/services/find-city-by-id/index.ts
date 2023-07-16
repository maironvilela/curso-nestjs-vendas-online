import { FindCityByIdRepository } from '@city/data/protocols/find-city-by-id-repository';
import { FindCityByIdUseCase } from '@city/domain/usecases/find-city-by-id';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindCityByIdService implements FindCityByIdUseCase {
  constructor(
    @Inject('FindCityByIdRepository')
    private findCityByIdRepository: FindCityByIdRepository,
  ) {}
  async execute(
    data: FindCityByIdUseCase.Params,
  ): Promise<FindCityByIdUseCase.Result> {
    return await this.findCityByIdRepository.FindCityById({ id: data.id });
  }
}
