import React, { useEffect, useRef, useState } from 'react';
import studio from '../assets/studio.mp4';

export default function BackgroundVideo({ enabled = true, overlayText = null }) {
  if (!enabled) return null;

  const videoRef = useRef(null);
  const [error, setError] = useState(false);

  // Use the imported studio.mp4 asset (Vite will provide the correct URL)
  const src = studio;
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('BackgroundVideo: using imported src =', src);
  }, [src]);

  // When src changes, ensure the <source> is updated and the video element loads it
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const sourceEl = v.querySelector('source');
    if (sourceEl) sourceEl.src = src;
    try {
      v.load();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('BackgroundVideo: reload failed', e);
    }
  }, [src]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onLoaded = () => {
      setError(false);
      // eslint-disable-next-line no-console
      console.log('Background video loaded successfully:', src);
    };
    const onError = (e) => {
      setError(true);
      // eslint-disable-next-line no-console
      console.error('Background video failed to load:', src, e);
    };

    v.addEventListener('loadeddata', onLoaded);
    v.addEventListener('error', onError);

    return () => {
      v.removeEventListener('loadeddata', onLoaded);
      v.removeEventListener('error', onError);
    };
  }, [src]);

  const retry = () => {
    setError(false);
    const v = videoRef.current;
    if (!v) return;
    try {
      // reload the source and attempt to play
      // update the <source> element and call load()
      const sourceEl = v.querySelector('source');
      if (sourceEl) sourceEl.src = src;
      v.load();
      const playPromise = v.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch((e) => {
          // eslint-disable-next-line no-console
          console.warn('Background video play failed (retry):', e);
        });
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Retry failed to load/play background video:', e);
      setError(true);
    }
  };

  return (
    <>
      <video
        id="bg-video"
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/logo-Bxcm9Kh9.png"
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
        {/* Fallback text for very old browsers */}
        Your browser does not support the video tag.
      </video>

      {/* Optional centered overlay text (full white). pointerEvents:none so it doesn't block clicks */}
      {overlayText && (
        <div
          aria-hidden={false}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            // ensure the overlay sits above translucent buttons/UI
            zIndex: 1100,
            color: 'white',
            textAlign: 'center',
            pointerEvents: 'none',
            fontFamily: '"Saira Condensed", sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(18px, 4vw, 48px)',
            textShadow: '0 2px 10px rgba(0,0,0,0.6)',
            padding: '0 1rem',
            whiteSpace: 'pre-wrap',
          }}
        >
          {overlayText}
        </div>
      )}

      {/* Show a visible error banner so it's easy to debug in the browser without opening devtools */}
      {error && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            top: '1rem',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 1000,
            pointerEvents: 'auto',
          }}
        >
          <div
            style={{
              // use a semi-transparent background color instead of `opacity`
              // so child text/buttons remain fully opaque (white)
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid white',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: 8,
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              fontFamily: 'sans-serif',
            }}
          >
            <span>Background video failed to load.</span>
            <button
              onClick={retry}
              style={{
                background: 'transparent',
                color: 'white',
                opacity: 1,
                fontWeight: 600,
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '0.25rem 0.5rem',
                borderRadius: 6,
                cursor: 'pointer',
              }}
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </>
  );
}
