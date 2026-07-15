import { PlayHistory, RewardHistory, Rewards } from "./rewards";

export interface User {
  guest: boolean;
  userId: string;
  point: number;
}

export interface UserData {
  user: User
  reward:Rewards
  playHistory:PlayHistory[]
  rewardHistory:RewardHistory[]
}