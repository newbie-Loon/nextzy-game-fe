"use client";

import { useRouter } from "next/navigation";
import Image from 'next/image'
import { UserService } from "../service/user.service";
import { useState } from "react";
import { CookieService } from "../util/cookie.util";
import RewardModal from "../home/components/rewardModal";

export default function LoginPage() {
    const router = useRouter();

    const handleGuestLogin = async () => {
        const userCookie: string | null = CookieService.get("user") || null;
        console.log("userCookie ", userCookie)
        const user = await UserService.createUser(userCookie, true)
        CookieService.set("user", user.userId);
        router.push("/home");
    };

    return (
        <>
            <div className="flex min-h-screen items-center justify-center bg-slate-100">
                <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-lg text-gray-600">
                    <div className="mb-6">
                        <Image src="nextzy_game.svg" width={500} height={500} alt="Nextzy logo" />
                    </div>
                    <div className="space-y-4">
                        <button
                            onClick={handleGuestLogin}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 hover:bg-gray-100"
                        >
                            Continue as Guest
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}