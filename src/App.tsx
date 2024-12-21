import SoundBoard from "@/components/sound-board";
import { sounds } from "@/consts/sounds";

function App() {
	return (
		<div className="p-4">
			<SoundBoard sounds={sounds} />
		</div>
	);
}

export default App;
