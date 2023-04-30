import { FindCitiesByStateIdController } from '@city/presentation/controller/find-cities-by-state-id-controller';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('city')
export class CityController {
  constructor(
    private findCitiesByStateIdController: FindCitiesByStateIdController,
  ) {}

  @Get('/:stateId')
  async findCitiesByStateId(@Param('stateId') stateId: number) {
    return this.findCitiesByStateIdController.handle({ stateId });
  }
}
