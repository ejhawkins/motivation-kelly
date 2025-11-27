// src/components/HamburgerIcon.jsx
import React from 'react';

export default function HamburgerIcon({
                                        open = false,
                                        className = '',
                                        onClick,
                                        ariaLabel = 'Open menu',
                                        page = 1,
                                        totalPages = 5,
                                        onPrev,
                                        onNext,
                                      }) {
  const containerStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    transform: 'none',
    transition: 'transform 200ms',
    marginBottom: '10px',
    padding: '8px',
    gap: '8px',
  };

  const captionContainerStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    marginRight: '6px',
    pointerEvents: 'none', // non-interactive
  };

  const captionStyle = {
    fontSize: '12px',
    fontWeight: 600,
    fontFamily: '"Saira Condensed", sans-serif',
    color: 'inherit',
    lineHeight: 1,
    opacity: 0.95,
  };

  const iconButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: 'transparent',
    border: 'none',
    padding: 0,
    margin: 0,
    color: 'inherit',
    cursor: 'pointer',
  };

  const lineStyle = { transform: 'none', transformOrigin: 'center center', transition: 'transform 200ms' };
  const middleStyle = { opacity: 1, transition: 'opacity 150ms' };

  return (
      <div className={(className ? className + ' ' : '') + 'hero-icon'} style={containerStyle}>
        <div style={captionContainerStyle} aria-hidden="true">
          <span style={captionStyle}>{page} / {totalPages}</span>
        </div>

        <button
            type="button"
            aria-label={ariaLabel}
            aria-expanded={!!open}
            onClick={onClick}
            style={iconButtonStyle}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" style={lineStyle} />
              <line x1="3" y1="12" x2="21" y2="12" style={middleStyle} />
              <line x1="3" y1="18" x2="21" y2="18" style={lineStyle} />
            </g>
          </svg>
        </button>
      </div>
  );
}