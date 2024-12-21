import { useCallback, useEffect } from "react";

const audioInstances: HTMLAudioElement[] = [];

const useSound = (soundFile: string) => {
	const audio = new Audio(soundFile);

	useEffect(() => {
		audioInstances.push(audio);
		return () => {
			const index = audioInstances.indexOf(audio);
			if (index > -1) {
				audioInstances.splice(index, 1);
			}
		};
	}, [audio]);

	const play = useCallback(() => {
		audio.currentTime = 0;
		audio.play();
	}, [audio]);

	return { play };
};

export default useSound;

export const pauseAllSounds = () =>
	audioInstances.forEach((audio) => audio.pause());
