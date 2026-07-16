"use client";

import { useEffect, useState } from "react";
import ProgressCard from "@/app/home/components/progressCard";
import ResetButton from "@/app/home/components/resetButton";
import HistoryTabs from "@/app/home/components/historyTabs";
import PlayHistoryList from "@/app/home/components/playHistoryList";
import RewardHistoryList from "@/app/home/components/rewardHistoryList";
import PlayGameButton from "@/app/home/components/playGameButton";
import { UserService } from "../service/user.service";
import { CookieService } from "../util/cookie.util";
import LoadingScreen from "../components/common/LoadingScreen";
import { UserData } from "../interface/user";



export default function HomePage() {
  const [activeTab, setActiveTab] = useState<
    "play" | "reward"
  >("play");

  const [userData, setUserData] = useState<UserData>();
  const [loading, setLoading] = useState(false);

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
    try {
      const userId = CookieService.get("nextzyGameUser");

      if (!userId) {
        console.error("userId not found");
        return;
      }

      const result = await UserService.getUserData(userId);

      console.log(result);
      setUserData(result);
  } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    const loadGameData = async () => {
      try {
        setLoading(true);
        await initData();

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadGameData();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="mx-auto min-h-screen mx-auto max-w-lg min-w-md bg-gray-100 pr-6 pl-6 ">
      <div className="pb-24">
        <div className="pb-3">
          <ProgressCard userData={userData}/>
        </div>

        <div className="bg-white">
          <ResetButton />

          <HistoryTabs
            activeTab={activeTab}
            onChange={setActiveTab}
          />

          <div className="mt-3">
            {activeTab === "play" ? (
              <PlayHistoryList items={userData?.playHistory ?? []}/>
            ) : (
              <RewardHistoryList items={userData?.rewardHistory ?? []} />
            )}
          </div>
        </div>
        <div className="pr-10 pt-10">
          <PlayGameButton page="home" />
        </div>
      </div>
    </div>
  );
}