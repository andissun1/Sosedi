import { IsArray, IsUUID } from 'class-validator';
import { actorEntity } from 'src/actor/entities/actor.entity';
import { ReviewEntity } from 'src/review/entities/review.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  // Generated,
  OneToMany,
  // PrimaryColumn,
  PrimaryGeneratedColumn,
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
  @PrimaryGeneratedColumn('uuid')
  // @PrimaryColumn()
  // @Generated('uuid')
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

  @ManyToMany(() => actorEntity, (actor) => actor.movies)
  @JoinTable({
    name: 'movie_actors',
    joinColumn: { name: 'movie_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'actor_id', referencedColumnName: 'id' },
  })
  actors: actorEntity[];

  @OneToMany(() => ReviewEntity, (review) => review.movie)
  reviews: ReviewEntity[];

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

  @IsArray()
  @IsUUID('4', { each: true })
  actorIds: string[];
}
