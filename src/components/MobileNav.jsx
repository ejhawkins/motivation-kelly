import React from 'react';

const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/50 p-4">
      <div className="flex justify-around">
        <button className="text-white" style={{ fontFamily: '"Saira Condensed", sans-serif' }}>
          Home
        </button>
        <button className="text-white" style={{ fontFamily: '"Saira Condensed", sans-serif' }}>
          About
        </button>
        <button className="text-white" style={{ fontFamily: '"Saira Condensed", sans-serif' }}>
          Contact
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;

