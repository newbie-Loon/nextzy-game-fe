import { useRouter } from "next/navigation";
interface PlayGameButtonProps {
page?: string;
}
export default function PlayGameButton({
page = "home",
}: PlayGameButtonProps) {
  const router = useRouter();
  const handlePlay = async () => {
    if(page == "home"){
      router.push("/game");
    }else{
      router.push("/home");
    }
      
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-md bg-white p-4">
      <button className="w-full rounded-full bg-yellow-400 py-4 text-2xl font-bold text-white" onClick={handlePlay}>
        {page == 'home' ? "ไปเล่นเกม" : "กลับหน้าหลัก"}
      </button>
    </div>
  );
}