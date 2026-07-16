export interface Rewards {
    a: boolean;
    b: boolean;
    c: boolean;
}

export interface PlayHistory {
  id: number;
  point: number;
  earnedDate: string;
}

export interface RewardHistory {
  id: number;
  reward: string;
  createdAt: string;
}