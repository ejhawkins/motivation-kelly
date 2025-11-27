// src/components/MobileNav.jsx
import React, { useEffect, useRef, useState } from 'react';
import HamburgerIcon from './HamburgerIcon';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', handleDocClick);
    document.addEventListener('touchstart', handleDocClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleDocClick);
      document.removeEventListener('touchstart', handleDocClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
      <div ref={ref}>
        {/* Top-left hamburger */}
        <div className="fixed top-4 left-4 z-50">
          <div className="flex items-center gap-3 rounded-full border-2 border-white text-white bg-black/60">

            <HamburgerIcon
                open={open}
                onClick={() => setOpen((v) => !v)}
                className="p-2"
                ariaLabel={open ? 'Close menu' : 'Open menu'}
            />
          </div>

          {open && (
              /* open dropdown below the button when the hamburger is at top-left */
              <div className="absolute left-0 top-full mt-3 w-44 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg text-white py-2 shadow-lg">
                <a href="/" className="block px-4 py-2 hover:bg-white/10">Home</a>
                <a href="/about" className="block px-4 py-2 hover:bg-white/10">About</a>
                <a href="/services" className="block px-4 py-2 hover:bg-white/10">Services</a>
                <a href="/contact" className="block px-4 py-2 hover:bg-white/10">Contact</a>
                <a href="/book" className="block px-4 py-2 hover:bg-white/10">Book Now</a>
              </div>
          )}
        </div>

        {/* Centered CTA buttons positioned below the hamburger (bottom-2) */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
          <div className="flex justify-center gap-4">
            <button
                type="button"
                className="button-primary saira-cta"
            >
              Get Branded
            </button>
            <button
                type="button"
                className="button-primary saira-cta ml-10"
            >
              Book Now
            </button>
          </div>
        </div>

      </div>
  );
};

export default MobileNav;