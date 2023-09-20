import { IsEmail, IsNotEmpty } from 'class-validator';

export class createUserBody {
  @IsEmail({}, { message: 'Email inválido' })
  @IsNotEmpty({
    message: 'Email não pode ser vazio',
  })
  email: string;
  @IsNotEmpty({
    message: 'Nome não pode ser vazio',
  })
  name: string;
  @IsNotEmpty({
    message: 'Senha não pode ser vazia',
  })
  password: string;
}
