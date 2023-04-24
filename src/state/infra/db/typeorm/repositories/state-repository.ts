import { InjectRepository } from '@nestjs/typeorm';
import { FindAllStatesRepository } from '@state/data/protocol/find-all-state-repository';
import { Repository } from 'typeorm';
import { State } from '../entities/state';

export class StateTypeOrmRepository implements FindAllStatesRepository {
  constructor(
    @InjectRepository(State)
    private repository: Repository<State>,
  ) {}

  async findAllStates(): Promise<FindAllStatesRepository.Result> {
    console.log('findAllStates');
    const states = await this.repository.find();
    return states;
  }
}
