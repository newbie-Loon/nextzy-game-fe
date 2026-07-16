"use client";

import RewardButton from "@/app/home/components/rewardButton";
import RewardModal from "./rewardModal";
import { useEffect, useState } from "react";
import { Rewards } from "@/app/interface/rewards";

interface ProgressBarProps {
  score: number;
  reward?: Rewards;
  click: (reward: string) => void;
}

const checkpoints = [0, 5000, 7500, 10000];

export default function ProgressBar({ score, reward, click }: ProgressBarProps) {
  const rewards = [
    {
      point: 5000,
      reward: "A",
      claimed: reward?.a ?? false,
    },
    {
      point: 7500,
      reward: "B",
      claimed: reward?.b ?? false,
    },
    {
      point: 10000,
      reward: "C",
      claimed: reward?.c ?? false,
    },
  ];
  useEffect(() => {

    console.log("reward", reward);

    console.log("rewards", rewards);

  }, [reward]);

  const percentage = Math.min((score / 10000) * 100, 100);
  return (
    <>
      <div className="max-w-lg mx-auto">
        {/* Label */}
        <div className="relative w-full pb-10">
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
        <div className="relative h-3 w-full rounded-full bg-gray-200 mb-7">
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
          {checkpoints.map((point, index) => {
            const left = (point / 10000) * 100;
            const reached = score >= point;
            let claimed = false;

            if (point === 5000) claimed = reward?.a ?? false;
            if (point === 7500) claimed = reward?.b ?? false;
            if (point === 10000) claimed = reward?.c ?? false;

            return (
              <div
                key={point}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${left}%`,
                }}
              >
                {point !== 0 &&
                  (
                    point === 10000 ? (
                      claimed ? (
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-700 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 border-2 border-yellow-500 shadow-sm">
                          <svg
                            className="h-8 w-8 fill-[#F59E0B]"
                            viewBox="0 0 24 24"
                          >
                            <path d="M3 7l4 3 5-6 5 6 4-3-2 12H5L3 7z" />
                          </svg>
                        </div>
                      )
                    ) : (
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-white
                          ${claimed ? "bg-green-700" : "bg-gray-400"}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    )
                  )

                }
              </div>
            );
          })}

        </div>

        <div className="relative w-full pb-7">
          {rewards.map((item) => {
            const left = (item.point / 10000) * 100;
            const reached = score >= item.point;
            if (item.point != 0) {
              return (
                <div
                  key={item.reward}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${left}%`,
                  }}
                >
                  <RewardButton
                    reward={item.reward}
                    status={
                      item.claimed
                        ? "claimed"
                        : score >= item.point
                          ? "available"
                          : "locked"
                    }
                    onClick={() =>
                      click(item.reward)
                    }
                  />
                </div>
              );
            }
          })}
        </div>

      </div>
    </>
  );
}