import { CacheModule } from '@cache/cache.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FindCitiesByStateIdService } from './data/services/find-cities-by-state-id';
import { City } from './infra/db/typeorm/entities/city';
import { CityTypeOrmRepository } from './infra/db/typeorm/repositories/city-repository';
import { CityController } from './main/router/city.controller';
import { FindCitiesByStateIdController } from './presentation/controller/find-cities-by-state-id-controller';

@Module({
  imports: [CacheModule, TypeOrmModule.forFeature([City])],
  controllers: [CityController],
  providers: [
    FindCitiesByStateIdController,

    {
      provide: 'FindCitiesByStateIdUseCase',
      useClass: FindCitiesByStateIdService,
    },
    {
      provide: 'FindCitiesByStateIdRepository',
      useClass: CityTypeOrmRepository,
    },
  ],
})
export class CityModule {}
