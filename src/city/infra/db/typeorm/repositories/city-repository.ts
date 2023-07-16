import { FindCitiesByStateIdRepository } from '@city/data/protocols/find-cities-by-stateid-repository';
import { FindCityByIdRepository } from '@city/data/protocols/find-city-by-id-repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from '../entities/city';

@Injectable()
export class CityTypeOrmRepository
  implements FindCitiesByStateIdRepository, FindCityByIdRepository
{
  constructor(
    @InjectRepository(City)
    private repository: Repository<City>,
  ) {}

  async FindCityById({
    id,
  }: FindCityByIdRepository.Params): Promise<FindCityByIdRepository.Result> {
    return await this.repository.findOne({
      where: {
        id,
      },
    });
  }

  async findCitiesByStateId({
    stateId,
  }: FindCitiesByStateIdRepository.Params): Promise<FindCitiesByStateIdRepository.Result> {
    return await this.repository.find({
      where: {
        stateId,
      },
    });
  }
}
