import { apiFetch } from "./api";



export const RewardHistoryService = {

  async createRewardHistory(userId: string, reward: string){
    const req = {
      userId : userId,
      reward: reward
    }
    return apiFetch("/reward-history/create", {
      method: "POST",
      body: JSON.stringify(req),
    });
  },
  
};