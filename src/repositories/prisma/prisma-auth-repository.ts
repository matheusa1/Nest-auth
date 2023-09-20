import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthRepository } from '../auth-repository';
import { PrismaService } from 'src/database/prisma.service';
import * as bcript from 'bcrypt';
import { IUserAuth, UserPayloadJWT } from 'src/types/userRepository';

import { JwtService } from '@nestjs/jwt';
import { ILoginResponse } from 'src/types/authRequest';

@Injectable()
export class PrismaAuthRepository implements AuthRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async login(user: IUserAuth): Promise<ILoginResponse> {
    const payload: UserPayloadJWT = {
      email: user.email,
      name: user.name,
      id: user.id,
    };

    const token = this.jwt.sign(payload);

    return {
      token,
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const passwordMatch = await bcript.compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Senha incorreta');
    }

    return {
      ...user,
      password: undefined,
    };
  }
}
