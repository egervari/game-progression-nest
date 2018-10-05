import { Body, Controller, Get, Put } from '@nestjs/common';

import { ProfileRepository } from './profile.repository';
import { ProfileDto } from './types/profile-dto.class';
import { Profile } from './types/profile.interface';

@Controller('/profile')
export class ProfileController {
  constructor(private readonly profileRepository: ProfileRepository) {}

  @Get()
  public async getProfile(): Promise<Profile> {
    return this.profileRepository.find();
  }

  @Put()
  public async updateProfile(@Body() profile: ProfileDto): Promise<ProfileDto> {
    return this.profileRepository.update(profile)
      .then(() => this.getProfile());
  }
}