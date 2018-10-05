import { Injectable } from '@nestjs/common';

import { database } from '../database';

import { Language } from './types/language.interface';

@Injectable()
export class LanguagesRepository {
  public async findAll(): Promise<Language[]> {
    return await database('languages').select('*');
  }
}
