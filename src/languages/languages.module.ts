import { Module } from '@nestjs/common';

import { LanguagesController } from './languages.controller';
import { LanguagesRepository } from './languages.repository';

@Module({
  controllers: [LanguagesController],
  providers: [LanguagesRepository],
})
export class LanguagesModule {}