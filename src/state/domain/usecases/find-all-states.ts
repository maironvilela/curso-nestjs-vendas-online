import { State } from '../model/state';

export interface FindAllStateUseCase {
  execute: () => Promise<FindAllStateUseCase.Result>;
}

export namespace FindAllStateUseCase {
  export type Result = State[];
}
