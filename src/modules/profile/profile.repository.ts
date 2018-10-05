import { Injectable } from '@nestjs/common';

import { database } from '../../database';

import { ProfileDto } from './types/profile-dto.class';
import { Profile } from './types/profile.interface';

@Injectable()
export class ProfileRepository {
  private static readonly ProfileId = 1;

  public async find(): Promise<Profile> {
    return database('profiles')
      .select('*')
      .where('id', ProfileRepository.ProfileId)
      .first();
  }

  public async update(profile: ProfileDto) {
    return database('profiles')
      .update(profile)
      .where('id', ProfileRepository.ProfileId);
  }
}