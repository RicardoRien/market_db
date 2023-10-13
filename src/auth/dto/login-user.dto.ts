import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsEmail()
  email: string;

  /* // NOTE: Usefull for passwords
    @Matches(
      /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message: 'The password must have a Uppercase, lowercase letter and a number'
    })
  */
  @IsString()
  @MinLength(4)
  @MaxLength(50)
  password: string;
}
