import { Model } from '../../types/model.interface';

export interface Language extends Model {
  id: number;
  name: string;
  code: string;
}