import { Module } from '@nestjs/common';
import { UserModule } from './entites/user/user.module';
import { AuthModule } from './entites/auth/auth.module';
import { JwtAuthGuard } from './entites/auth/guards/jwt-auth.guard';
import { AppController } from './app.controller';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
