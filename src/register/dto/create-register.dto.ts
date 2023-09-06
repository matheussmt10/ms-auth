import { IsNotEmpty, IsEmail, MaxLength } from 'class-validator';

export class CreateUserRegisterDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MaxLength(10)
  name: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  confirmPassword: string;
}
