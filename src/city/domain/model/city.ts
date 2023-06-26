import { State } from '@state/domain';

export type City = {
  id?: number;
  name: string;
  stateId: number;
  state: State;
  createdAt: Date;
  updatedAt: Date;
};
