import React, { useEffect, useRef, useState } from 'react';
import HamburgerIcon from './HamburgerIcon';

export default function MenuDropdown() {
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
    <div className="relative" ref={ref}>
      <HamburgerIcon
        open={open}
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-full border-2 border-white text-white bg-transparent"
        ariaLabel={open ? 'Close menu' : 'Open menu'}
      />

      {open && (
        <div
          id="menu-dropdown"
          role="menu"
          aria-label="Site pages"
          className="absolute right-0 bottom-full mb-2 w-44 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg text-white py-2 shadow-lg z-50"
        >
          <a href="/" role="menuitem" className="block px-4 py-2 hover:bg-white/10">
            Home
          </a>
          <a href="/about" role="menuitem" className="block px-4 py-2 hover:bg-white/10">
            About
          </a>
          <a href="/services" role="menuitem" className="block px-4 py-2 hover:bg-white/10">
            Services
          </a>
          <a href="/contact" role="menuitem" className="block px-4 py-2 hover:bg-white/10">
            Contact
          </a>
          <a href="/book" role="menuitem" className="block px-4 py-2 hover:bg-white/10">
            Book Now
          </a>
        </div>
      )}
    </div>
  );
}
