import { apiFetch } from "./api";



export const PointHistoryService = {

  async createPointHistory(userId: string | null, point: number){
    const req = {
      userId : userId,
      point: point
    }
    return apiFetch("/point-history/create", {
      method: "POST",
      body: JSON.stringify(req),
    });
  },

//   async getPointHistory(){
//     return apiFetch("/point-history/get", {
//       method: "GET",
//     });
//   },


};