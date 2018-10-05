import { Injectable } from '@nestjs/common';

import { database } from '../database';

import { Platform } from './types/platform.interface';

@Injectable()
export class PlatformsRepository {
  public async findAll(): Promise<Platform[]> {
    return database('platforms').select('*');
  }
}