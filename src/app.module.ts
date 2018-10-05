import { Module } from '@nestjs/common';

import { GamesModule } from './modules/games/games.module';
import { LanguagesModule } from './modules/languages/languages.module';
import { PlatformsModule } from './modules/platforms/platforms.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [GamesModule, LanguagesModule, PlatformsModule, ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
