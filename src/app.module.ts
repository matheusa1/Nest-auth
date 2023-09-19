import { Module } from '@nestjs/common';
import { UserModule } from './application/entites/user/user.module';
import { AuthModule } from './application/entites/auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
