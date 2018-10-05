import { Controller, Get } from '@nestjs/common';

import { LanguagesRepository } from './languages.repository';
import { Language } from './types/language.interface';

@Controller('/languages')
export class LanguagesController {

  constructor(private readonly languagesRepository: LanguagesRepository) {}

  @Get()
  public async getAllLanguages(): Promise<Language[]> {
    return this.languagesRepository.findAll();
  }

}