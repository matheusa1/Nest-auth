import { Request } from 'express';
import { IUserAuth } from './userRepository';

export type IAuthRequest = Request & {
  user: IUserAuth;
};

export type ILoginResponse = {
  token: string;
};
