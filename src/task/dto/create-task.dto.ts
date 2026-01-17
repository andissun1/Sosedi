import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { StartsWith } from '../common/decorators/startsWith.decorators';

export class CreateTaskDto {
  @IsString({ message: 'Название должно быть строкой' })
  @IsNotEmpty({ message: 'Не может быть пустое поле' })
  @StartsWith('test') // Кастомный декоратор
  @Length(2, 10, { message: 'Название дожно быть от 2 до 10 символов' })
  title: string;

  @IsBoolean({ message: 'Статус должен быть булевым выражением' })
  isCompleted: boolean;

  @IsString({ message: 'Описание должно быть строкой' })
  @IsOptional()
  description: string;

  @IsNumber({}, { message: 'Приоритет должен быть числом' })
  @IsOptional()
  priority: number;
}
