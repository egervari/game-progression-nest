export interface Game {
  readonly name: string;
  readonly image: string;
  readonly platformId: number;
  readonly numberOfHoursPlayed: number;
  readonly numberOfHoursToComplete: number;
  readonly priority: number;
  readonly isComplete: boolean;
  readonly dateCreated: string;
  readonly dateCompleted: string;
}