import type React from 'react';
import useSound from '../hooks/useSound';
import { PlayIcon } from 'lucide-react';

interface SoundButtonProps {
    soundFile: string;
    soundName: string;
}

const SoundButton: React.FC<SoundButtonProps> = ({ soundFile, soundName }) => {
    const { play } = useSound(soundFile);

    return (
        <div className="flex flex-col items-center">
            <button
                type='button'
                onClick={play}
                className="rounded-full bg-blue-500 text-white p-4 hover:bg-blue-700 transition duration-300 size-16 flex items-center justify-center"
            >
                <PlayIcon size={24} />
            </button>
            <span className="mt-2 text-center">{soundName}</span>
        </div>
    );
};

export default SoundButton;
