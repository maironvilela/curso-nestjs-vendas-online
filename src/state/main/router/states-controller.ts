import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { FindAllStatesController } from '@state/presentation/controllers/find-all-states-controller';
import { Response } from 'express';

@Controller('state')
export class StatesController {
  constructor(private findAllStatesController: FindAllStatesController) {}
  @Get()
  async findAllStates(@Res() res: Response) {
    try {
      const states = await this.findAllStatesController.handle();
      res.status(HttpStatus.OK).json(states);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }
}
