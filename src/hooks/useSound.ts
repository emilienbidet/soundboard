import { useCallback } from "react";

const useSound = (soundFile: string) => {
	const audio = new Audio(soundFile);

	const play = useCallback(() => {
		audio.currentTime = 0;
		audio.play();
	}, [audio]);

	return { play };
};

export default useSound;
