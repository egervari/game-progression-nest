import { Module } from '@nestjs/common';

import { ProfileController } from './profile.controller';
import { ProfileRepository } from './profile.repository';

@Module({
  controllers: [ProfileController],
  providers: [ProfileRepository],
})
export class ProfileModule {}