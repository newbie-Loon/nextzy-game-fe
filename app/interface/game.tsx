export interface RewardCheckpoint {
  point: number;
  reward: string;
  claimed: boolean;
}

export interface PlayHistory {
  id: number;
  score: number;
  date: string;
}

export interface RewardHistory {
  id: number;
  reward: string;
  date: string;
}