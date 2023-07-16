import { City } from '@city/domain/model/city';

export interface FindCityByIdRepository {
  FindCityById: (
    data: FindCityByIdRepository.Params,
  ) => Promise<FindCityByIdRepository.Result>;
}

export namespace FindCityByIdRepository {
  export type Result = City;
  export type Params = { id: number };
}
