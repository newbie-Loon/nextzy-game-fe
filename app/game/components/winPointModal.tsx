interface Props {
  open: boolean;
  point: number;
  onClose: () => void;
}

export default function WinPointModal({
  open,
  point,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

    //   <div className="w-[320px] rounded-3xl bg-white p-6">

    //     <h2 className="text-center text-3xl font-bold">
    //       ยินดีด้วย
    //     </h2>

    //     <p className="mt-5 text-center text-lg">
    //       คุณได้รับคะแนน
    //     </p>

    //     <p className="mt-2 text-center text-5xl font-bold text-red-500">
    //       {point.toLocaleString()}
    //     </p>

    //     <button
    //       onClick={onClose}
    //       className="mt-6 w-full rounded-xl bg-red-500 py-3 text-white"
    //     >
    //       ตกลง
    //     </button>

    //   </div>

    // </div>

    
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

        {/* Title */}
        <h2 className="mt-8 text-center text-[42px] font-bold leading-none text-[#333]">
          ได้รับ
        </h2>

        {/* Description */}
         <p className="mt-2 text-center text-xl text-[#565656]">
           {point.toLocaleString()} คะแนน
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