import { AuthRepository } from 'src/repositories/auth-repository';
import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { IAuthRequest } from 'src/types/authRequest';
import { IsPublic } from '../../decorators/isPublic.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthRepository) {}

  @IsPublic()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async login(@Request() req: IAuthRequest): Promise<any> {
    return this.auth.login(req.user);
  }
}
