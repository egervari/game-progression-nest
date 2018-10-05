import { Module } from '@nestjs/common';

import { PlatformsController } from './platforms.controller';
import { PlatformsRepository } from './platforms.repository';

@Module({
  controllers: [PlatformsController],
  providers: [PlatformsRepository],
})
export class PlatformsModule {}