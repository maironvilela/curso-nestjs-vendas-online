import { City } from '../model/city';

export interface FindCityByIdUseCase {
  execute: (
    data: FindCityByIdUseCase.Params,
  ) => Promise<FindCityByIdUseCase.Result>;
}

export namespace FindCityByIdUseCase {
  export type Result = City;
  export type Params = { id: number };
}
