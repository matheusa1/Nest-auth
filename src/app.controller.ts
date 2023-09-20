import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from './application/entites/auth/decorators/current-user.decorator';
import { IUserAuth } from './application/types/userRepository';

@Controller()
export class AppController {
  constructor() {}

  @Get('me')
  getMe(@CurrentUser() user: IUserAuth) {
    return user;
  }
}
