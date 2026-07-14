interface Props {
  activeTab: "play" | "reward";
  onChange: (tab: "play" | "reward") => void;
}

export default function HistoryTabs({
  activeTab,
  onChange,
}: Props) {
  return (
    <div className="flex gap-3 px-4">
      <button
        onClick={() => onChange("play")}
        className={`rounded-full border px-4 py-2 ${
          activeTab === "play"
            ? "border-red-500 text-red-500"
            : "border-gray-400 text-gray-400"
        }`}
      >
        ประวัติการเล่น
      </button>

      <button
        onClick={() => onChange("reward")}
        className={`rounded-full border px-4 py-2 ${
          activeTab === "reward"
            ? "border-red-500 text-red-500"
            : "border-gray-400 text-gray-400"
        }`}
      >
        ประวัติรางวัล
      </button>
    </div>
  );
}