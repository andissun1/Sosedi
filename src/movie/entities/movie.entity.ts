import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  // PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Genre {
  ACTION = 'action',
  COMEDY = 'comedy',
  DRAMA = 'drama',
  HORROR = 'horror',
}

@Entity({ name: 'movies' })
export class MovieEntity {
  // @PrimaryGeneratedColumn()
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 128,
    // nullable:
  })
  title: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'int',
    unsigned: true, // Только положительные числа
  })
  @Column({ type: 'date', nullable: true, name: 'release_date' })
  releaseDate: string;

  @Column({ type: 'enum', enum: Genre, default: Genre.DRAMA })
  genre: Genre;

  @Column({
    type: 'decimal',
    precision: 3, // Количество чисел после точки
    scale: 1, // Добор чисел после запятой
    default: 0.0,
  })
  rating: number;

  @Column({ type: 'boolean', default: false })
  isAvailable: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
