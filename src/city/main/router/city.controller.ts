import { FindCitiesByStateIdController } from '@city/presentation/controller/find-cities-by-state-id-controller';
import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('city')
export class CityController {
  constructor(
    private findCitiesByStateIdController: FindCitiesByStateIdController,
  ) {}

  @Get('/:stateId')
  async findCitiesByStateId(
    @Param('stateId') stateId: number,
    @Res() res: Response,
  ): Promise<Response> {
    try {
      const cities = await this.findCitiesByStateIdController.handle({
        stateId,
      });
      return res.status(HttpStatus.OK).json(cities);
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }
}
