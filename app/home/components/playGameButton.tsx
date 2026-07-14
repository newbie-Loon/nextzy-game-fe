import { useRouter } from "next/navigation";

export default function PlayGameButton() {
  const router = useRouter();
  const handlePlay = async () => {
      router.push("/game");
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-md bg-white p-4">
      <button className="w-full rounded-full bg-yellow-400 py-4 text-2xl font-bold text-white" onClick={handlePlay}>
        ไปเล่นเกม
      </button>
    </div>
  );
}