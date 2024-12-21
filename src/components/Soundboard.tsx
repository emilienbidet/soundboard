import carelessWhispers from "@/assets/sounds/careless-whispers.mp3";
import type React from "react";
import SoundButton from "./SoundButton";

const sounds = [{ file: carelessWhispers, name: "Careless Whispers" }];

const Soundboard: React.FC = () => {
	return (
		<div className="grid grid-cols-3 gap-4">
			{sounds.map((sound) => (
				<SoundButton
					key={sound.file}
					soundFile={sound.file}
					soundName={sound.name}
				/>
			))}
		</div>
	);
};

export default Soundboard;
