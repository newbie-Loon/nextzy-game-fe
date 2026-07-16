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
import { GameService } from "../service/game.service";
import { RewardHistoryService } from "../service/rewardHistory.service";
import RewardModal from "./components/rewardModal";



export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [rewardClaim, setRewardClaim] = useState("");

  const [activeTab, setActiveTab] = useState<
    "play" | "reward"
  >("play");

  const [userData, setUserData] = useState<UserData>();
  const [loading, setLoading] = useState(false);

  const resetProgress = async () => {
    const userCookie: string | null = CookieService.get("nextzyGameUser") || null;
    console.log("userCookie ", userCookie)
    try {
      setLoading(true);
      await GameService.resetProgress(userCookie)
      initData()
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

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

  const claimReward = async (reward: string) => {
    setRewardClaim(reward)
    const userCookie = CookieService.get("nextzyGameUser")
    if (!userCookie) {
      console.error("userId not found");
      return;
    }
    try {
      setLoading(true);
      await RewardHistoryService.createRewardHistory(userCookie, reward)
      setOpen(true)
      await initData();
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
    <div className="mx-auto min-h-screen mx-auto max-w-lg min-w-md bg-gray-100 pr-6 pl-6">
      <div className="pb-24">
        <div className="pt-3 pb-3">
          <ProgressCard userData={userData} claimReward={claimReward} />
        </div>

        <div className="bg-white">
          <ResetButton click={resetProgress} />

          <HistoryTabs
            activeTab={activeTab}
            onChange={setActiveTab}
          />

          <div className="mt-3">
            {activeTab === "play" ? (
              <PlayHistoryList items={userData?.playHistory ?? []} />
            ) : (
              <RewardHistoryList items={userData?.rewardHistory ?? []} />
            )}
          </div>
        </div>
        <div className="pr-10 pt-10">
          <PlayGameButton page="home" />
        </div>
      </div>
      <RewardModal
        open={open}
        reward={rewardClaim}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}