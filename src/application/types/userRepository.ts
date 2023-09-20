import { IErrorResponse } from './errorResponse';

export type IUser = {
  name: string;
  email: string;
  password: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type IUserAuth = {
  name: string;
  email: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UserPayloadJWT = {
  id: string;
  email: string;
  name: string;
  iat?: number;
  exp?: number;
};

export type IUserRepositoryCreate = IUser | IErrorResponse;

export type IUserRepositoryGetUsers = IUser[] | IErrorResponse;
