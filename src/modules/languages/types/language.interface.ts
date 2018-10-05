import { ModelDto } from '../../../types/model-dto.class';

export interface Language extends ModelDto {
  id: number;
  name: string;
  code: string;
}