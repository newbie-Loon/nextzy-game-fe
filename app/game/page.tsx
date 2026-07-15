"use client";

import { useState } from "react";
import PlayGameButton from "@/app/home/components/playGameButton";
import WinPointModal from "@/app/game/components/winPointModal";
import { PointHistoryService } from "@/app/service/pointHistory.service";
import { CookieService } from "@/app/util/cookie.util";

const POINTS = [300, 500, 1000, 3000];

type GameState = "idle" | "playing" | "finished";

export default function GamePage() {
    const [state, setState] = useState<GameState>("idle");

    const [points, setPoints] = useState<number[]>(POINTS);

    const [totalScore, setTotalScore] = useState(8500);

    const [reward, setReward] = useState(0);

    const [showModal, setShowModal] = useState(false);

    const startGame = () => {
        setState("playing");

        const current = [...POINTS];

        const interval = setInterval(async () => {
            if (current.length === 1) {
                clearInterval(interval);

                const winner = current[0];
                const userCookie: string | null = CookieService.get("nextzyGameUser") || null;
                await PointHistoryService.createPointHistory(
                    userCookie,
                    winner,
                );

                setReward(winner);

                setTotalScore((prev) =>
                    Math.min(prev + winner, 10000)
                );

                setState("finished");

                setShowModal(true);

                return;
            }

            const removeIndex = Math.floor(
                Math.random() * current.length
            );

            current.splice(removeIndex, 1);

            setPoints([...current]);
        }, 800);
    };

    return (
        <div className="mx-auto min-h-screen max-w-lg bg-[#f7f1e8] min-w-md pb-100">

            <div className="p-6">

                <h2 className="mt-8 text-center text-2xl font-bold text-slate-800">
                    คะแนนสะสม {totalScore.toLocaleString()}/10,000
                </h2>

                <div className="mt-36 flex justify-center gap-3">

                    {points.map((point) => (
                        <div key={point} className={`rounded-xl px-4 py-2 text-2xl font-bold 
                            ${state === "finished" && 
                                    reward === point
                                    ? "bg-green-400 text-green-900"
                                    : "bg-cyan-300 text-green-800"
                                }
                            `}>
                            {point.toLocaleString()}
                        </div>
                    ))}
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