import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  Length,
  Matches,
  MinLength,
} from 'class-validator';

export enum TaskTag {
  work = 'work',
  study = 'study',
  home = 'home',
}

export class UpdateTaskDto {
  @IsString({ message: 'Название должно быть строкой' })
  @IsNotEmpty({ message: 'Не может быть пустое поле' })
  @Length(2, 10, { message: 'Название дожно быть от 2 до 10 символов' })
  title: string;

  @IsBoolean({ message: 'Статус должен быть булевым выражением' })
  isCompleted: boolean;

  @IsString({ message: 'Описание должно быть строкой' })
  @IsOptional()
  description: string;

  @IsNumber({}, { message: 'Приоритет должен быть числом' })
  @IsOptional()
  @IsPositive({ message: 'Приоритет должен быть положительным' })
  @IsInt({ message: 'Приоритет должен быть целым числом' })
  priority: number;

  @IsArray({ message: 'Поле тегов должно быть массивом' })
  @IsEnum(TaskTag, { each: true, message: 'Не по типам в enum' })
  // @IsString({ each: true, message: 'Строки' })
  @IsOptional()
  tags: string[];

  @IsString({ message: 'Не строка' })
  @MinLength(6, { message: 'Минимум 6 символов' })
  @Matches(/\d+/, { message: 'Нет числа в пароле' })
  password: string;

  @IsUrl(
    {
      protocols: ['http', 'https'],
      require_port: true,
      host_whitelist: ['alice.yandex.ru'],
    },
    { message: 'Некооретрый формат' },
  )
  url: string;
}
