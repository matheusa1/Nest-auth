import {
  IUserRepositoryCreate,
  IUserRepositoryGetUsers,
} from 'src/types/userRepository';

export abstract class UserRepository {
  abstract create(
    name: string,
    email: string,
    password: string,
  ): Promise<IUserRepositoryCreate>;

  abstract getUsers(): Promise<IUserRepositoryGetUsers>;
}
