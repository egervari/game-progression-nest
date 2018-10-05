import { Controller, Get } from '@nestjs/common';

import { PlatformsRepository } from './platforms.repository';
import { Platform } from './types/platform.interface';

@Controller('/platforms')
export class PlatformsController {

  constructor(private readonly platformsRepository: PlatformsRepository) {}

  @Get()
  public async getAllPlatforms(): Promise<Platform[]> {
    return this.platformsRepository.findAll();
  }

}