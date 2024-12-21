import type React from "react";
import SoundButton from "./sound-button";

interface SoundBoardProps {
	sounds: {
		file: string;
		name: string;
		color: string;
	}[];
}

const SoundBoard: React.FC<SoundBoardProps> = ({ sounds }) => {
	return (
		<div className="grid grid-cols-3 gap-4 md:grid-cols-12">
			{sounds.map((sound) => (
				<SoundButton key={sound.file} {...sound} />
			))}
		</div>
	);
};

export default SoundBoard;
