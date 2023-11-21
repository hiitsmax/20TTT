import { useState } from 'react';
import PlayButton from '../components/PlayButton';

function Home() {
  const [timer, setTimer] = useState('00:00');
  function onPause() {}
  function onPlay() {}
  return (
    <div className="flex items-center justify-center flex-col w-full h-full">
      <div className="flex items-center justify-center flex-col -mt-8">
        <div className="text-6xl mb-4"> Rest your eyes </div>
        <PlayButton onPlay={() => onPlay()} onPause={() => onPause()} />
        <div className="text-8xl"> {timer} </div>
      </div>
    </div>
  );
}

export default Home;
