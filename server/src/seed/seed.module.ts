import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';

@Module({
  exports: [SeedService],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
