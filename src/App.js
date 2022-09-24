import { ReactComponent as Starfall } from './assets/starfall.svg';
import backgroundVideo from './assets/background.mp4';
import './App.css';
import { useEffect, useState, useRef } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 5;
  };

  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 4200);
      }, 19000);
    }
  }, [show]);

  return (
    <div className="App">
      <div className={`${show ? 'show ' : ''}starfall-wrapper`}>
        <Starfall className="starfall" />
      </div>

      <video
        loop
        autoPlay
        muted
        id="video"
        ref={videoRef}
        onCanPlay={() => setPlayBack()}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
