import SoundBoard from "@/components/sound-board";
import ControlBar from "@/components/control-bar";
import { sounds } from "@/consts/sounds";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-4">
        <SoundBoard sounds={sounds} />
      </main>
      <ControlBar />
    </div>
  );
}

export default App;
