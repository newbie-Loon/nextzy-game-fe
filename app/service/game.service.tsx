import { apiFetch } from "./api";



export const GameService = {

  async resetProgress(userId: string | null){
    const req = {
      userId : userId
    }
    return apiFetch("/game/resetProgress", {
      method: "POST",
      body: JSON.stringify(req),
    });
  },
  
};