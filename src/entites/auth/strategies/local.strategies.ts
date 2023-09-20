import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthRepository } from 'src/repositories/auth-repository';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private auth: AuthRepository) {
    super({ usernameField: 'email' });
  }

  validate(email: string, password: string) {
    return this.auth.validateUser(email, password);
  }
}
