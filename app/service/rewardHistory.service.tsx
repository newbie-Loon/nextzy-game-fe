import { apiFetch } from "./api";



export const RewardHistoryService = {

  async createRewardHistory(userId: string | null, reward: number){
    const req = {
      userId : userId,
      reward: reward
    }
    return apiFetch("/reward-history/create", {
      method: "POST",
      body: JSON.stringify(req),
    });
  },

//   async getRewardHistory(){
//     return apiFetch("/reward-history/get", {
//       method: "GET",
//     });
//   },



};