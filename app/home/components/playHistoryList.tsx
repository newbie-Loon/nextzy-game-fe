import { PlayHistory } from "@/app/interface/rewards";
import { formatDateTime } from "@/app/util/date.util";

interface Props {
  items: PlayHistory[];
}

export default function PlayHistoryList({
  items,
}: Props) {
  if (items.length > 0) {
    return (
      <>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b bg-white p-6 min-w-xs"
          >
            <div className="h-12 w-12 rounded-full bg-gradient-to-b from-red-700 to-red-400" />

            <div>
              <h3 className="text-lg font-bold text-[#333333]">
                {item.point ? "เล่นได้ " + item.point.toLocaleString() + "คะแนน" : ""}
              </h3>

              <p className="text-sm text-[#A3A3A3]">
                เล่นเมื่อ {formatDateTime(item.earnedDate)} น.
              </p>
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        <div className="flex justify-center border-b bg-white p-6 min-w-xs">
          <h3 className="text-lg font-bold text-[#333333]">
            ยังไม่มีคะแนน
          </h3>

        </div>
      </>
    );
  }
}