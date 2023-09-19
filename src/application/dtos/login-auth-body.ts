import { IsEmail, IsNotEmpty } from 'class-validator';
export class LoginAuthBody {
  @IsNotEmpty({
    message: 'Email não pode ser vazio',
  })
  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsNotEmpty({
    message: 'Senha não pode ser vazia',
  })
  password: string;
}
