import { apiFetch } from "./api";



export const GameService = {

  async resetProgress(data: string | null){
    const req = {
      userId : data
    }
    return apiFetch("/game/resetProgress", {
      method: "POST",
      body: JSON.stringify(req),
    });
  },

  async getGameCheckpoint(){
    return apiFetch("/game/getGameCheckpoint", {
      method: "GET",
    });
  },


};