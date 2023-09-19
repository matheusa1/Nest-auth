export abstract class AuthRepository {
  abstract login(email: string, password: string): Promise<any>;
  abstract validateUser(email: string, password: string): Promise<any>;
}
