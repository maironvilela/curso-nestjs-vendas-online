import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO, CreateUserService } from '../../data';
import { ok } from '../helpers/http-helper';
import { HttpResponse } from '../protocols/http';

@Controller('user')
export class UserController {
  constructor(private createUserService: CreateUserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDTO): Promise<HttpResponse> {
    return ok(await this.createUserService.execute(createUser));
  }
}
