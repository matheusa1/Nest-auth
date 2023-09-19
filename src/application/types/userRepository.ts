import { IErrorResponse } from './errorResponse';

export type IUser = {
  name: string;
  email: string;
  password: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type IUserRepositoryCreate = IUser | IErrorResponse;

export type IUserRepositoryGetUsers = IUser[] | IErrorResponse;
