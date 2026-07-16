import { GameService } from "@/app/service/game.service";
import { CookieService } from "@/app/util/cookie.util";

export default function ResetButton() {
  const resetProgress = async ()=>{
    const userCookie: string | null = CookieService.get("nextzyGameUser") || null;
    console.log("userCookie ", userCookie)
    try{
      await GameService.resetProgress(userCookie)
      
    }catch(e){
      console.log(e)
    }
  }
  return (
    <div className="flex justify-center py-5">
      <button className="rounded-full bg-[#1E00FF] px-8 py-2 text-xl font-bold text-white " onClick={resetProgress}>
        RESET
      </button>
    </div>
  );
}