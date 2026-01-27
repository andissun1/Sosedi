import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  Req,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterRequestDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import type { Request, Response } from 'express';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthResponce } from './dto/auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { Authorization } from './decorators/authorization.decorators';
import { GetUser } from './decorators/getUser.decorator';
import type { User } from 'generated/prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Регистрация пользователя',
    description: 'Создаёт нового пользователя в системе',
  })
  @ApiOkResponse({
    description: 'Пользователь успешно зарегистрирован',
    type: AuthResponce,
  })
  @ApiConflictResponse({
    description: 'Пользователь с такой почтой уже существует',
  })
  @ApiBadRequestResponse({
    description: 'Некорректные входные данные',
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(
    @Res({ passthrough: true }) res: Response,
    @Body() registerDto: RegisterRequestDto,
  ) {
    return this.authService.register(res, registerDto);
  }

  @ApiOperation({
    summary: 'Авторизация пользователя',
    description: 'Авторизует и выдаёт токен доступа',
  })
  @ApiOkResponse({
    description: 'Пользователь успешно зарегистрирован',
    type: AuthResponce,
  })
  @ApiConflictResponse({
    description: 'Пользователь с такой почтой уже существует',
  })
  @ApiBadRequestResponse({
    description: 'Некорректные входные данные',
  })
  @ApiNotFoundResponse({
    description: 'Пользователь не найден',
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Res({ passthrough: true }) res: Response, @Body() loginDto: LoginDto) {
    return this.authService.login(res, loginDto);
  }

  @ApiOperation({
    summary: 'Обновление токена',
    description: 'Генерирует новый токен доступа',
  })
  @ApiOkResponse({
    description: 'Пользователь успешно зарегистрирован',
    type: AuthResponce,
  })
  @ApiUnauthorizedResponse({
    description: 'Недействительный Refresh-токен',
  })
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.authService.refresh(req, res);
  }

  @ApiOperation({
    summary: 'Выход из системы',
    description: 'Удаляет токен из cookie',
  })
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@Res({ passthrough: true }) res: Response) {
    return this.authService.logout(res);
  }

  @Authorization()
  @UseGuards(AuthGuard('jwt'))
  @Get('@me')
  @HttpCode(HttpStatus.OK)
  me(@GetUser() user: User) {
    return user;
  }

  @ApiOperation({
    summary: 'Сброс пароля',
    description: 'Генерирует новый пароль по почте для входа в аккаунт',
  })
  @Post('resetPassword')
  @HttpCode(HttpStatus.OK)
  resetPassword(@Body('email') email: string) {
    return this.authService.resetPassword(email);
  }
}
