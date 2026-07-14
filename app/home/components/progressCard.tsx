import ProgressBar from "./progressBar";

export default function ProgressCard() {
  return (
    <div className="rounded-3xl border-2 border-gray-300 bg-white p-4">
      <div className="flex justify-between pb-3">
        <button className="rounded-r-full bg-[#B63335] px-4 py-2 max-h-[22px] text-sm font-bold text-white pb-7 ml-[-18px]">
          แชร์คะแนน
        </button>

        <div className="text-right">
          <h2 className="text-lg font-bold text-gray-600">สะสมคะแนน</h2>

          <p className="mt-2 font-semibold text-gray-600">
            คะแนนครบ 10,000 รับรางวัลใหญ่
          </p>

          <p className="text-2xl font-bold text-red-600">
            8,500/10,000
          </p>
        </div>
      </div>

      <ProgressBar score={6000} />
    </div>
  );
}