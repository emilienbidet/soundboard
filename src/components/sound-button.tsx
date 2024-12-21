import { PlayIcon } from "lucide-react";
import type React from "react";
import useSound from "../hooks/useSound";

interface SoundButtonProps {
	file: string;
	name: string;
	color: string;
}

const SoundButton: React.FC<SoundButtonProps> = ({ file, name, color }) => {
	const { play } = useSound(file);

	return (
		<div className="flex flex-col items-center">
			<button
				type="button"
				onClick={play}
				className="rounded-full text-white p-4 hover:scale-105 transition duration-300 size-16 flex items-center justify-center focus:outline-4"
				style={{ backgroundColor: color }}
			>
				<PlayIcon size={24} />
			</button>
			<span className="mt-2 text-center">{name}</span>
		</div>
	);
};

export default SoundButton;
