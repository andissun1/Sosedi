import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterRequestDto {
  @ApiProperty({
    description: 'Имя пользователя',
    example: 'Никита',
  })
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя обязательно для заполнения' })
  @MaxLength(50, { message: 'Имя не должно превышать 50 символов' })
  name: string;

  @ApiProperty({
    description: 'Почта пользователя',
    example: 'example@gmail.com',
  })
  @IsString({ message: 'Почта должна быть строкой' })
  @IsNotEmpty({ message: 'Почта обязательна для заполнения' })
  @IsEmail({}, { message: 'Некорректный формат почты' })
  email: string;

  @ApiProperty({
    description: 'Номер телефона пользователя',
    example: '+79999999999',
  })
  @IsString({ message: 'Номер телефона должен быть строкой' })
  @IsNotEmpty({ message: 'Телефон обязателен для заполнения' })
  phone: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: 'MyPassword43',
    minimum: 6,
    maximum: 50,
  })
  @IsString({ message: 'Пароль должен быть строкой' })
  @IsNotEmpty({ message: 'Пароль обязателен для заполнения' })
  @MinLength(6, { message: 'Пароль должен быть не менее 6 символов' })
  @MaxLength(50, { message: 'Пароль должен быть не более 50 символов' })
  password: string;

  @IsOptional()
  @IsNumber({}, { message: 'Поле roleId должно быть числом' })
  roleId?: number;
}
