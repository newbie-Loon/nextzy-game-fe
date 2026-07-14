import { useState } from "react";
import RewardModal from "./rewardModal";

interface RewardButtonProps {
  reward: string;
  status: "claimed" | "available" | "locked";
  onClick?: () => void;
}

export default function RewardButton({
  reward,
  status,
  onClick,
}: RewardButtonProps) {
  
  const styles = {
    claimed: "bg-[#F58A8A] text-white",
    available: "bg-[#FF1515] text-white",
    locked: "bg-[#DCDCDC] text-white",
  };

  const text = {
    claimed: `ได้รางวัล ${reward} แล้ว`,
    available: `กดรับรางวัล ${reward}`,
    locked: `กดรับรางวัล ${reward}`,
  };

  return (
    <>
      <button
        disabled={status === "locked"}
        onClick={onClick}
        className={`
        rounded-full
        px-4
        py-2
        text-xs
        font-bold
        transition-all
        ${styles[status]}
      `}
      >
        {text[status]}
      </button>

      
    </>
  );
}