import { Injectable } from '@nestjs/common';

import { database } from '../database';

import { Profile } from './types/profile.interface';

const ProfileId = 1;

@Injectable()
export class ProfileRepository {
  public async find(): Promise<Profile> {
    return database('profiles')
      .select('*')
      .where('id', ProfileId)
      .first();
  }

  public async update(profile: Profile) {
    return database('profiles')
      .update(profile)
      .where('id', ProfileId);
  }
}