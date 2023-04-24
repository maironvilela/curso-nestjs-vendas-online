import { Inject, Injectable } from '@nestjs/common';
import { FindAllStatesRepository } from '@state/data/protocol/find-all-state-repository';
import { FindAllStateUseCase } from '@state/domain';

@Injectable()
export class FindAllStatesService implements FindAllStateUseCase {
  constructor(
    @Inject('FindAllStatesRepository')
    private findAllStateRepository: FindAllStatesRepository,
  ) {}

  async execute(): Promise<FindAllStateUseCase.Result> {
    return await this.findAllStateRepository.findAllStates();
  }
}
