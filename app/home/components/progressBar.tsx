"use client";

import RewardButton from "@/app/home/components/rewardButton";

interface ProgressBarProps {
  score: number;
}

const checkpoints = [0, 5000, 7500, 10000];


export default function ProgressBar({ score }: ProgressBarProps) {
  const percentage = Math.min((score / 10000) * 100, 100);
  const handleClaimReward = (rewardName: string) => {
    console.log(rewardName)
  }
  return (
    <div className="w-full">
      {/* Label */}
      <div className="relative w-full pb-7">
        {checkpoints.map((point) => {
          const left = (point / 10000) * 100;
          return (
            <div
              key={point}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${left}%`,
              }}
            >
              <div className={`transition-all text-xs font-medium flex text-gray-500 mr-3`}>
                <span key={point}>{point == 0 ? "" : point.toLocaleString()}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress */}
      <div className="relative h-3 w-full rounded-full bg-gray-200">
        <div className="absolute left-0 top-0 h-full rounded-full bg-orange-400 transition-all duration-500"
          style={{
            width: `${percentage}%`,
            minWidth: score > 0 ? "12px" : "0px",
          }}
        />
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ left: `${percentage}%`, }}>
          <div className="h-6 w-6 rounded-full bg-orange-500 border-4 border-orange-200 shadow-md" />
        </div>

        {/* Checkpoints */}
        {checkpoints.map((point) => {
          const left = (point / 10000) * 100;
          const reached = score >= point;

          return (
            <div
              key={point}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${left}%`,
              }}
            >
              <div
                className={`h-5 w-5 rounded-full transition-all ${left == 0 ? "" : left == 10000 ? "" : reached
                  ? "border-2 border-orange-500 bg-orange-500"
                  : "border-2 border-gray-300 bg-white"
                  }`}
              />
            </div>
          );
        })}

      </div>

      <div className="relative w-full pb-7">
        {checkpoints.map((point) => {
          const left = (point / 10000) * 100;
          const reached = score >= point;
          if (left != 0) {
            return (
              <div
                key={point}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${left}%`,
                }}
              >
                <div className={`transition-all text-xs font-medium flex text-gray-500 mr-3`}>
                  <RewardButton
                    reward="B"
                    status={reached ? "available" : "locked"}
                    onClick={() => handleClaimReward("B")}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>

    </div>
  );
}