import { IsArray, IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsEmail()
  phone: string;

  @IsString()
  @IsEmail()
  dui: string;

  @IsString()
  @IsEmail()
  direction: string;

  @IsString()
  @MinLength(1)
  fullName: string;

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

  @IsArray()
  @IsOptional()
  roles?: string[];
}
