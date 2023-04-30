import { City } from '@city/domain/model/city';

export interface FindCitiesByStateIdRepository {
  findCitiesByStateId: (
    data: FindCitiesByStateIdRepository.Params,
  ) => Promise<FindCitiesByStateIdRepository.Result>;
}

export namespace FindCitiesByStateIdRepository {
  export type Result = City[];
  export type Params = { stateId: number };
}
