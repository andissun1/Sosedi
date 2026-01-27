export class CreateBoardGameDto {
  name: string;
  images: string[];
  minPlayers: number;
  maxPlayers: number;
  minPlaytime: number;
  maxPlaytime: number;
  description: string;
  difficulty: string;
  isAvailable: boolean;

  categories?: number[];
  tags?: number[];
}
