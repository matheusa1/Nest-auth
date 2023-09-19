import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRepository } from '../auth-repository';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaAuthRepository implements AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async login(email: string, password: string): Promise<any> {
    return {
      email,
      password,
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return new UnauthorizedException('Usuário não encontrado');
    }

    return {
      email,
      password,
    };
  }
}
