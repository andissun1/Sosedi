import { Category, Tag } from 'generated/prisma/client';

export type BoardGameResponseDto = {
  id: number;
  name: string;
  images: string[];
  minPlayers: number;
  maxPlayers: number;
  minPlaytime: number;
  maxPlaytime: number;
  description: string;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
  difficulty: string;

  categories: Category[];
  tags: Tag[];
};
