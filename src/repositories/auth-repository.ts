import { ILoginResponse } from '../types/authRequest';
import { IUserAuth } from '../types/userRepository';

export abstract class AuthRepository {
  abstract login(user: IUserAuth): Promise<ILoginResponse>;
  abstract validateUser(email: string, password: string): Promise<any>;
}
