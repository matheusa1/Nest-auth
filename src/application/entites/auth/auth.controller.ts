import { AuthRepository } from 'src/application/repositories/auth-repository';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { LoginAuthBody } from 'src/application/dtos/login-auth-body';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthRepository) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async login(@Body() body: LoginAuthBody): Promise<any> {
    const { email, password } = body;

    return this.auth.login(email, password);
  }
}
