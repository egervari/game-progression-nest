import { IsInt, IsNotEmpty, IsNumber, Min } from 'class-validator';

import { ModelDto } from '../../../types/model-dto.class';

import { Profile } from './profile.interface';

export class ProfileDto extends ModelDto implements Profile {

  @IsNotEmpty()
  public firstName: string;

  @IsNotEmpty()
  public lastName: string;

  @IsNotEmpty()
  public image: string;

  @IsInt()
  @Min(1)
  public languageId: number;

  @IsNumber()
  @Min(0)
  public averageNumberOfHoursPerDay: number;
}