import { Model } from '../../types/model.interface';

export interface Game extends Model {
  name: string;
  image: string;
  platformId: number;
  numberOfHoursPlayed: number;
  numberOfHoursToComplete: number;
  priority: number;
  isComplete: boolean;
  dateCreated: string;
  dateCompleted: string;
}