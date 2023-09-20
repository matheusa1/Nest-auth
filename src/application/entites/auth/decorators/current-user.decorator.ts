import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IAuthRequest } from 'src/application/types/authRequest';
import { IUserAuth } from 'src/application/types/userRepository';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): IUserAuth => {
    const request = context.switchToHttp().getRequest<IAuthRequest>();

    return request.user;
  },
);
