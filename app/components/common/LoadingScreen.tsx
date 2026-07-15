export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F7F1E8]">
      <div className="animate-bounce text-6xl">
        🎲
      </div>

      <h2 className="mt-6 text-2xl font-bold text-gray-700">
        Nextzy Game
      </h2>

      <p className="mt-2 text-gray-500">
        กำลังโหลดข้อมูล...
      </p>

      <div className="mt-6 h-2 w-56 overflow-hidden rounded-full bg-gray-200">
        <div className="h-full w-1/3 animate-pulse rounded-full bg-orange-500" />
      </div>
    </div>
  );
}