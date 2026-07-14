import { HistoryItem } from "@/app/interface/history";

interface Props {
  items: HistoryItem[];
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
              {item.title}
            </h3>

            <p className="text-sm text-[#A3A3A3]">
              ได้รับเมื่อ {item.date}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}