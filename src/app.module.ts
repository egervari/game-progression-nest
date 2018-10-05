import { Module } from '@nestjs/common';

import { GamesModule } from './games/games.module';
import { LanguagesModule } from './languages/languages.module';
import { PlatformsModule } from './platforms/platforms.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [GamesModule, LanguagesModule, PlatformsModule, ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
