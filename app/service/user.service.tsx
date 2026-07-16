import { User, UserData } from "../interface/user";
import { apiFetch } from "./api";



export const UserService = {

  async createUser(userId: string | null, guest : boolean) : Promise<User>{
    const req = {
      guest : guest,
      userId : userId
    }
    return apiFetch("/users/create", {
      method: "POST",
      body: JSON.stringify(req),
    });
  },

  async getUserData(userId: string) : Promise<UserData>{
    return apiFetch("/users/getUserData/"+userId, {
      method: "GET",
    });
  },


};