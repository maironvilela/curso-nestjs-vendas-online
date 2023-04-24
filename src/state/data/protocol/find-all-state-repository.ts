import { State } from '@state/domain';

export interface FindAllStatesRepository {
  findAllStates: () => Promise<FindAllStatesRepository.Result>;
}

export namespace FindAllStatesRepository {
  export type Result = State[];
}
