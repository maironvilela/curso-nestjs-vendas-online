import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FindCitiesByStateIdService } from './data/services/find-cities-by-state-id';
import { City } from './infra/db/typeorm/entities/city';
import { CityRepository } from './infra/db/typeorm/repositories/city-repository';
import { CityController } from './main/router/city.controller';
import { FindCitiesByStateIdController } from './presentation/controller/find-cities-by-state-id-controller';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  controllers: [CityController],
  providers: [
    FindCitiesByStateIdController,
    {
      provide: 'FindCitiesByStateIdUseCase',
      useClass: FindCitiesByStateIdService,
    },
    {
      provide: 'FindCitiesByStateIdRepository',
      useClass: CityRepository,
    },
  ],
})
export class CityModule {}
