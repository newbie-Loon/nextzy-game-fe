export default function ProgressCard() {
  return (
    <div className="rounded-3xl border-2 border-gray-300 bg-white p-4">
      <div className="flex justify-between">
        <button className="rounded-full bg-red-700 px-4 py-1 text-sm text-white">
          แชร์คะแนน
        </button>

        <div className="text-right">
          <h2 className="text-3xl font-bold text-gray-600">สะสมคะแนน</h2>

          <p className="mt-2 font-semibold text-gray-600">
            คะแนนครบ 10,000 รับรางวัลใหญ่
          </p>

          <p className="text-4xl font-bold text-red-600">
            8,500/10,000
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div className="h-3 rounded-full bg-orange-200">
          <div className="h-3 w-[85%] rounded-full bg-orange-400" />
        </div>

        <div className="mt-2 flex justify-between text-xs text-gray-400">
          <span>5,000</span>
          <span>7,500</span>
          <span>10,000</span>
        </div>
      </div>
    </div>
  );
}