import { Module } from '@nestjs/common';
import { PrismaAuthRepository } from 'src/application/repositories/prisma/prisma-auth-repository';
import { PrismaService } from 'src/database/prisma.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from 'src/application/repositories/auth-repository';
import { LocalStrategy } from './staegies/local.stategies';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [
    PrismaService,
    LocalStrategy,
    {
      provide: AuthRepository,
      useClass: PrismaAuthRepository,
    },
  ],
})
export class AuthModule {}
