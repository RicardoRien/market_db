import { Controller, Post, Body, Get, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

import { User } from './entities/user.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

import { Auth } from './decorators/auth.decorator';
import { GetUser } from './decorators/get-user.decorator';

import { SuccessReponse } from 'src/utils/models/success';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  create(@Body() createAuthDto: CreateUserDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto ) {
    return this.authService.login( loginUserDto );
  }

  @Post('logout')
  async logoutUser(@Res({passthrough: true}) response: Response): Promise<SuccessReponse> {
    response.clearCookie('jwt')
    return { status: 'ok', message: 'logout' }
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(@GetUser() user: User) {
    return this.authService.checkAuthStatus( user );
  }

}
