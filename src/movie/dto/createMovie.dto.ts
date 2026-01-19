import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty({
    description: 'Название фильма',
    example: 'Мстители',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Год выпуска',
    example: 2012,
    type: Number,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1888)
  @Max(new Date().getFullYear())
  releaseYear: number;

  @ApiPropertyOptional({
    description: 'Ссылка на изображение',
    example: 'https://example.com/image.jpg',
    type: String,
  })
  @IsString()
  imageUrl?: string;

  @ApiProperty({
    description: 'Список актеров',
    example: ['1', '2', '3'],
    type: [String],
  })
  actorsIds: string[];
}
