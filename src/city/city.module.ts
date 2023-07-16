import { CacheModule } from '@cache/cache.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FindCitiesByStateIdService } from './data/services/find-cities-by-state-id';
import { FindCityByIdService } from './data/services/find-city-by-id';
import { City } from './infra/db/typeorm/entities/city';
import { CityTypeOrmRepository } from './infra/db/typeorm/repositories/city-repository';
import { CityController } from './main/router/city.controller';
import { FindCitiesByStateIdController } from './presentation/controller/find-cities-by-state-id-controller';

@Module({
  controllers: [CityController],
  imports: [CacheModule, TypeOrmModule.forFeature([City])],
  providers: [
    FindCitiesByStateIdController,
    FindCityByIdService,

    {
      provide: 'FindCitiesByStateIdUseCase',
      useClass: FindCitiesByStateIdService,
    },

    {
      provide: 'FindCityByIdUseCase',
      useClass: FindCityByIdService,
    },
    {
      provide: 'FindCitiesByStateIdRepository',
      useClass: CityTypeOrmRepository,
    },
    {
      provide: 'FindCityByIdRepository',
      useClass: CityTypeOrmRepository,
    },
  ],
  exports: [FindCityByIdService, TypeOrmModule],
})
export class CityModule {}
