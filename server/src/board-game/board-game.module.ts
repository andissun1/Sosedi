import { Module } from '@nestjs/common';
import { BoardGameService } from './board-game.service';
import { BoardGameController } from './board-game.controller';

@Module({
  controllers: [BoardGameController],
  providers: [BoardGameService],
})
export class BoardGameModule {}
