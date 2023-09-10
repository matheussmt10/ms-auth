import { IsNotEmpty, IsEmail, MaxLength } from 'class-validator';

export class CreateUserSocialAuthDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MaxLength(10)
  name: string;

  @IsNotEmpty()
  googleId: string;

  @IsNotEmpty()
  userPhoto: string;
}
