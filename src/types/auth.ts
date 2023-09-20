export type IUserFromJWT = {
  id: string;
  email: string;
  name: string;
};

export type IUserPayload = {
  id: string;
  email: string;
  name: string;
  iat?: number;
  exp?: number;
};
