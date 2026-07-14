"use client";

import { useState } from "react";
import ProgressCard from "@/app/home/components/progressCard";
import ResetButton from "@/app/home/components/resetButton";
import HistoryTabs from "@/app/home/components/historyTabs";
import PlayHistoryList from "@/app/home/components/playHistoryList";
import RewardHistoryList from "@/app/home/components/rewardHistoryList";
import PlayGameButton from "@/app/home/components/playGameButton";



export default function HomePage() {
  const [activeTab, setActiveTab] = useState<
    "play" | "reward"
  >("play");

  const playHistory = [
    {
      id: 1,
      title: "เล่นได้ 1,000 คะแนน",
      date: "15/02/25 20:00 น.",
    },
    {
      id: 2,
      title: "เล่นได้ 300 คะแนน",
      date: "14/02/25 19:30 น.",
    },
  ];

  const rewardHistory = [
    {
      id: 1,
      title: "ได้รับรางวัล A",
      date: "15/02/25 20:00 น.",
    },
  ];

  const initData = async () => {
    
  }

  return (
    <div className="mx-auto min-h-screen mx-auto max-w-2xl bg-gray-100 pr-6 pl-6">
      <div className="pb-24">
        <div className="p-4">
          <ProgressCard />
        </div>

        <div className="bg-white">
          <ResetButton />

          <HistoryTabs
            activeTab={activeTab}
            onChange={setActiveTab}
          />

          <div className="mt-3">
            {activeTab === "play" ? (
              <PlayHistoryList items={playHistory} />
            ) : (
              <RewardHistoryList items={rewardHistory} />
            )}
          </div>
        </div>
      
      <PlayGameButton page="home"/>
      </div>
    </div>
  );
}