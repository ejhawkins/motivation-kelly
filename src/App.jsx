import { useState } from 'react';
import './App.css';
import logo from '/logo-Bxcm9Kh9.png';
import symbolLogo from '/symbol-logo-JjCYN3W9.png';
import MobileNav from './components/MobileNav';
import BackgroundVideo from './components/BackgroundVideo';

function App() {
  const [videoEnabled, setVideoEnabled] = useState(true);

  return (
    <>
      <BackgroundVideo enabled={videoEnabled} overlayText={"GET BRANDED"} />
      <header className="px-6 py-8 sticky top-0 z-10 bg-black/50">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            {/* Bordered pill removed per request */}
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
      <main className="flex flex-col items-center justify-center text-white content-minheight">

      </main>
      <MobileNav />
    </>
  );
}

export default App;
