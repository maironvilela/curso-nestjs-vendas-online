import { Controller, Get } from '@nestjs/common';
import { FindAllStatesController } from '@state/presentation/controllers/find-all-states-controller';

@Controller('state')
export class StatesController {
  constructor(private findAllStatesController: FindAllStatesController) {}
  @Get()
  async findAllStates() {
    return this.findAllStatesController.handle();
  }
}
