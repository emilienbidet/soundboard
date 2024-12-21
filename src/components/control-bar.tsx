import { Pause } from "lucide-react";
import { pauseAllSounds } from "@/hooks/useSound";

export function ControlBar() {
  return (
    <footer className="h-16 bg-black border-t-4 fixed bottom-0 w-full flex items-center justify-center">
      <button
        type="button"
        className="bg-white rounded-full size-12 flex items-center justify-center hover:bg-gray-100 transition-colors"
        onClick={pauseAllSounds}
        aria-label="Pause all sounds"
      >
        <Pause color="black" size={24} />
      </button>
    </footer>
  );
}

export default ControlBar;
