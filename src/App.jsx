import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import logo from '/logo-Bxcm9Kh9.png';
import symbolLogo from '/symbol-logo-JjCYN3W9.png';
import backgroundVideo from '/Firefly Studio lights photoshoot black and white without a model 577781-CMDFDyt-.mp4';
import MobileNav from './components/MobileNav';

function App() {
  const [count, setCount] = useState(0);
  const [videoEnabled, setVideoEnabled] = useState(true);

  const toggleVideo = () => {
    setVideoEnabled(!videoEnabled);
  };

  return (
    <>
      {videoEnabled && (
        <div className="video-background">
          <video autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
      )}
      <header className="px-6 py-8 sticky top-0 z-10 bg-black/50">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="border-2 border-white rounded-full px-4 py-2">
              <span
                className="text-white border border-white px-2 py-1 rounded"
                style={{ fontFamily: '"Saira Condensed", sans-serif' }}
              >
                MusesKlosetAgency
              </span>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={toggleVideo}
              aria-pressed={!videoEnabled}
              aria-label={
                videoEnabled
                  ? 'Disable background video'
                  : 'Enable background video'
              }
              className="px-4 py-2 border-2 border-white rounded-full bg-transparent text-white"
              style={{ fontFamily: '"Saira Condensed", sans-serif' }}
            >
              {videoEnabled ? 'Background Video: On' : 'Background Video: Off'}
            </button>
          </div>
        </div>
          <div className="flex justify-center mb-8">
            <img
              src={symbolLogo}
              alt="Symbol Logo"
              className="object-contain symbol-logo"
            />
          </div>
        <div className="text-center">
          <div className="mb-4">
            <img
              src={logo}
              alt="MusesKlosetAgency"
              className="mb-2 w-48 max-w-full h-auto"
            />
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center text-white" style={{ minHeight: 'calc(100vh - 16rem)' }}>
        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="px-4 py-2 border-2 border-white rounded-full bg-transparent text-white"
            style={{ fontFamily: '"Saira Condensed", sans-serif' }}
          >
           Get Styled
          </button>
          <button
            type="button"
            className="px-4 py-2 border-2 border-white rounded-full bg-transparent text-white"
            style={{ fontFamily: '"Saira Condensed", sans-serif' }}
          >
            Book Now
          </button>
        </div>
      </main>
      <MobileNav />
    </>
  );
}

export default App;
