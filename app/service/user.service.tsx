import { User } from "../interface/user";
import { apiFetch } from "./api";



export const UserService = {

  async createUser(data: string | null, guest : boolean) : Promise<User>{
    const req = {
      guest : guest,
      userId : data
    }
    return apiFetch("/users/create", {
      method: "POST",
      body: JSON.stringify(req),
    });
  },


};