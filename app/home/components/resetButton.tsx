import { GameService } from "@/app/service/game.service";
import { CookieService } from "@/app/util/cookie.util";
interface Props {
  click: () => void;
}
export default function ResetButton({click}: Props) {
  return (
    <div className="flex justify-center py-5">
      <button className="rounded-full bg-[#1E00FF] px-8 py-2 text-xl font-bold text-white " onClick={click}>
        RESET
      </button>
    </div>
  );
}