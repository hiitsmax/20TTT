import { useRef, useState } from 'react';

interface playButtonProps {
  onPause: () => void;
  onPlay: () => void;
}

function PlayButton({ onPause, onPlay }: playButtonProps) {
  const [isInPlay, setIsInPlay] = useState<boolean>(false);

  function doTheThing() {
    setIsInPlay(!isInPlay);
    if (isInPlay) onPlay();
    else onPause();

    console.log(isInPlay);
  }

  return (
    <button
      type="button"
      onClick={doTheThing}
      className="rounded-full bg-black/50 p-3 w-80 h-80 flex justify-center items-center"
    >
      {isInPlay ? (
        <i className="bi bi-pause text-9xl " />
      ) : (
        <i className="bi bi-play text-9xl ml-3" />
      )}
    </button>
  );
}

export default PlayButton;
