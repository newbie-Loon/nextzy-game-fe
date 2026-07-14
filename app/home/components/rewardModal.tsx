"use client";

interface RewardModalProps {
  open: boolean;
  reward?: string;
  onClose: () => void;
}

export default function RewardModal({
  open,
  reward = "A",
  onClose,
}: RewardModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-[390px] rounded-[28px] bg-white px-8 py-10 shadow-2xl">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-gray-600"
        >
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M6 6L18 18M18 6L6 18" />
          </svg>
        </button>

        {/* Coin */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#FDB515] shadow-inner">

          <div className="flex h-20 w-20 items-center justify-center rounded-full border-[5px] border-[#F59E0B] bg-[#FFC533]">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFD54F]">

              <svg
                className="h-8 w-8 fill-[#F59E0B]"
                viewBox="0 0 24 24"
              >
                <path d="M3 7l4 3 5-6 5 6 4-3-2 12H5L3 7z" />
              </svg>

            </div>

          </div>

        </div>

        {/* Title */}
        <h2 className="mt-8 text-center text-[42px] font-bold leading-none text-[#333]">
          ยินดีด้วย
        </h2>

        {/* Description */}
        <p className="mt-5 text-center text-[24px] text-[#666]">
          คุณได้รับรางวัล{" "}
          <span className="font-semibold">{reward}</span>
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-10 h-14 w-full rounded-full bg-[#FFC533] text-xl font-semibold text-white transition-all duration-200 hover:bg-[#F5B300] active:scale-95"
        >
          ปิด
        </button>

      </div>
    </div>
  );
}