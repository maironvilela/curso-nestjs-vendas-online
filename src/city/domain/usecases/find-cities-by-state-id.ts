import { City } from '../model/city';

export interface FindCitiesByStateIdUseCase {
  execute: (
    data: FindCitiesByStateIdUseCase.Params,
  ) => Promise<FindCitiesByStateIdUseCase.Result>;
}

export namespace FindCitiesByStateIdUseCase {
  export type Result = City[];
  export type Params = { stateId: number };
}
