import { IsInt, IsNotEmpty, IsNumber, Max, MaxLength, Min } from 'class-validator';

import { ModelDto } from '../../../types/model-dto.class';

import { Game } from './game.interface';

export class GameDto extends ModelDto implements Game {

  @IsNotEmpty()
  @MaxLength(255)
  public name: string;

  @IsNotEmpty()
  @MaxLength(255)
  public image: string;

  @IsInt()
  @Min(1)
  public platformId: number;

  @IsNumber()
  @Min(0)
  public numberOfHoursPlayed: number;

  @IsNumber()
  @Min(1)
  public numberOfHoursToComplete: number;

  @IsNumber()
  @Min(1)
  @Max(10)
  public priority: number;

  @IsNotEmpty()
  public isComplete: boolean;

  @IsNotEmpty()
  public dateCreated: string;

  public dateCompleted: string;
}