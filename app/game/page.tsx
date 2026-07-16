"use client";

import { useEffect, useState } from "react";
import PlayGameButton from "@/app/home/components/playGameButton";
import WinPointModal from "@/app/game/components/winPointModal";
import { PointHistoryService } from "@/app/service/pointHistory.service";
import { CookieService } from "@/app/util/cookie.util";
import { UserService } from "../service/user.service";

const POINTS = [300, 500, 1000, 3000];

type GameState = "idle" | "playing" | "finished";

export default function GamePage() {
    const [state, setState] = useState<GameState>("idle");
    const [points, setPoints] = useState<number[]>(POINTS);
    const [totalScore, setTotalScore] = useState(0);
    const [reward, setReward] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [eliminated, setEliminated] = useState<number[]>([]);

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        const userId = CookieService.get("nextzyGameUser");

        if (!userId) return;

        const result = await UserService.getUserData(userId);

        setTotalScore(result.user.point);
    };

    const startGame = () => {
        setState("playing");
        setEliminated([]);
        const current = [...POINTS];

        const interval = setInterval(async () => {
            if (current.length === 1) {
                clearInterval(interval);

                const winner = current[0];
                const userCookie = CookieService.get("nextzyGameUser");

                if (!userCookie) {
                    console.error("User not found");
                    clearInterval(interval);
                    return;
                }
                try {
                    const result = await PointHistoryService.createPointHistory(
                        userCookie,
                        winner,
                    );
                    setTotalScore(result.totalPoint);
                } catch (error) {
                    console.error(error);
                    setState("idle");
                    return;
                }

                setReward(winner);
                setState("finished");
                setShowModal(true);
                return;
            }

            const removeIndex = Math.floor(
                Math.random() * current.length
            );

            const removedPoint = current[removeIndex];
            setEliminated((prev) => [...prev, removedPoint]);
            current.splice(removeIndex, 1);
        }, 800);
    };

    return (
        <div className="mx-auto min-h-screen max-w-lg  bg-gradient-to-b from-[#FFFFFF] to-[#f5e4cf] min-w-md pb-100">

            <div className="p-6">

                <h2 className="mt-8 text-center text-2xl font-bold text-slate-800">
                    คะแนนสะสม {totalScore.toLocaleString()}/10,000
                </h2>

                <div className="mt-36 flex justify-center gap-3">

                    {POINTS.map((point) => {
                        const isEliminated = eliminated.includes(point);
                        const isWinner = state === "finished" && reward === point;

                        return (
                            <div key={point} className={`rounded-xl px-4 py-2 text-2xl font-bold transition-all duration-500 
                                    ${isWinner ? "bg-green-400 text-green-900 scale-110"
                                    : isEliminated ? "bg-gray-300 text-gray-500"
                                        : "bg-cyan-300 text-green-800"}`}>
                                {point.toLocaleString()}
                            </div>
                        )
                    })}
                </div>

                <div className="mt-20 flex justify-center">
                    <button
                        disabled={state === "playing" || totalScore >= 10000}
                        onClick={startGame}
                        className="rounded-xl bg-red-500 px-8 py-3 text-xl font-bold text-white disabled:bg-red-200">
                        สุ่มคะแนน
                    </button>

                </div>
            </div>

            <PlayGameButton page="game" />

            <WinPointModal
                open={showModal}
                point={reward}
                onClose={() => {
                    setShowModal(false);

                    setState("idle");
                    setPoints(POINTS);
                }}
            />
        </div>
    );
}