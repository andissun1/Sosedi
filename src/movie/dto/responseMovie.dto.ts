import { ApiProperty } from '@nestjs/swagger';

export class responseMovieDto {
  @ApiProperty({
    description: 'ID фильма',
    example: '12355',
    type: String,
  })
  id: string;
  @ApiProperty({
    description: 'Movie',
    example: 'Самый лучший фильм',
    type: String,
  })
  title: string;
  releaseDate: string;
}
