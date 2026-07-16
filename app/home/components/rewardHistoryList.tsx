import { RewardHistory } from "@/app/interface/rewards";
import { formatDateTime } from "@/app/util/date.util";

interface Props {
  items: RewardHistory[];
}

export default function RewardHistoryList({
  items,
}: Props) {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 border-b bg-white p-6"
        >
          <div className="h-12 w-12 rounded-full bg-gradient-to-b from-purple-900 to-purple-500" />

          <div>
            <h3 className="text-lg font-bold text-[#333333]">
              ได้รับรางวัล {item.reward}
            </h3>

            <p className="text-sm text-[#A3A3A3]">
              ได้รับเมื่อ {formatDateTime(item.createdAt)} น.
            </p>
          </div>
        </div>
      ))}
    </>
  );
}