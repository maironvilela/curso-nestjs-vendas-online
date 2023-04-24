import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FindAllStatesService } from './data/services/find-all-state';
import { State } from './infra/db/typeorm/entities/state';
import { StateTypeOrmRepository } from './infra/db/typeorm/repositories/state-repository';
import { StatesController } from './main/router/states-controller';
import { FindAllStatesController } from './presentation/controllers/find-all-states-controller';

@Module({
  controllers: [StatesController],
  providers: [
    FindAllStatesController,
    {
      provide: 'FindAllStateUseCase',
      useClass: FindAllStatesService,
    },
    {
      provide: 'FindAllStatesRepository',
      useClass: StateTypeOrmRepository,
    },
  ],
  imports: [TypeOrmModule.forFeature([State])],
})
export class StateModule {}
