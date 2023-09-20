import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from './decorators/current-user.decorator';
import { IUserAuth } from './types/userRepository';

@Controller()
export class AppController {
  constructor() {}

  @Get('me')
  getMe(@CurrentUser() user: IUserAuth) {
    return user;
  }
}
