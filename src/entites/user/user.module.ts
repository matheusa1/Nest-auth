import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaUserRepository } from 'src/repositories/prisma/prisma-user-repository';
import { UserRepository } from 'src/repositories/user-repository';
import { UserController } from './user.controller';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UserModule {}
