import { FindCitiesByStateIdRepository } from '@city/data/protocols/find-cities-by-stateid-repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from '../entities/city';

@Injectable()
export class CityRepository implements FindCitiesByStateIdRepository {
  constructor(
    @InjectRepository(City)
    private repository: Repository<City>,
  ) {}

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
