import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginRequestBody {
  @IsEmail({}, { message: 'Email inválido' })
  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  email: string;
  @IsNotEmpty({ message: 'sENHA não pode ser vaziA' })
  password: string;
}
