import React from 'react';

const MenuBar = ({ activeApp, onBackToProfile }) => {
  // time and date removed form unused vars
  // Back to Profile handler
  const handleBack = () => {
    if (onBackToProfile) {
      onBackToProfile();
    } else {
      window.location.href = '/';
    }
  };
  return (
    <div className="menu-bar" style={{
      background: 'linear-gradient(90deg, #18181b 60%, #23232a 100%)',
      color: '#f3f3f3',
      fontFamily: 'Inter, system-ui, sans-serif',
      fontWeight: 500,
      fontSize: '0.98rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.32)',
      borderBottom: '1px solid #23232a',
      height: 36,
      display: 'flex',
      alignItems: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      padding: '0 18px',
      letterSpacing: '0.01em',
      justifyContent: 'space-between',
    }}>
      <div className="menu-left" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span className="logo" style={{ fontSize: 20, marginRight: 8 }}>
          <img src="/favicon.svg" alt="Pineapple" style={{ width: 22, height: 22, verticalAlign: 'middle', filter: 'drop-shadow(0 0 4px #E50914)' }} />
        </span>
        <button
          onClick={handleBack}
          style={{
            marginRight: 10,
            width: 32,
            height: 32,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #23232a 60%, #18181b 100%)',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.32)',
            cursor: 'pointer',
            border: '1.5px solid #444',
            transition: 'box-shadow 0.2s, border 0.2s',
            outline: 'none',
            padding: 0,
          }}
          onMouseEnter={e => {
            if (onBackToProfile) {
              e.currentTarget.style.boxShadow = '0 4px 16px #E50914';
              e.currentTarget.style.border = '1.5px solid #E50914';
            }
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.32)';
            e.currentTarget.style.border = '1.5px solid #444';
          }}
          title="Back to Profile"
          aria-label="Back to Profile"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="4" /><polyline points="9 12 13 16 13 8" /></svg>
        </button>
        <span className="app-name" style={{ fontWeight: 700, fontSize: '1.04rem', marginRight: 16, letterSpacing: '0.01em', color: '#f3f3f3' }}>{activeApp}</span>
        <span className="menu-item" style={{ marginRight: 12, opacity: 0.92, fontWeight: 500, color: '#e0e0e0' }}>File</span>
        <span className="menu-item" style={{ marginRight: 12, opacity: 0.92, fontWeight: 500, color: '#e0e0e0' }}>Edit</span>
        <span className="menu-item" style={{ marginRight: 12, opacity: 0.92, fontWeight: 500, color: '#e0e0e0' }}>View</span>
        <span className="menu-item" style={{ marginRight: 12, opacity: 0.92, fontWeight: 500, color: '#e0e0e0' }}>Go</span>
        <span className="menu-item" style={{ marginRight: 12, opacity: 0.92, fontWeight: 500, color: '#e0e0e0' }}>Window</span>
        <span className="menu-item" style={{ marginRight: 12, opacity: 0.92, fontWeight: 500, color: '#e0e0e0' }}>Help</span>
      </div>
      <div className="menu-right" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        {/* Crisp, white SVG system icons for dark theme */}
        <span style={{ marginRight: 6 }}>
          {/* Sunburst icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><g><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></g></svg>
        </span>
        <span style={{ marginRight: 6 }}>
          {/* Cube icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4" /></svg>
        </span>
        <span style={{ marginRight: 6 }}>
          {/* Calendar/leaf icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8 2v4" /><path d="M16 2v4" /><path d="M4 10h16" /></svg>
        </span>
        <span style={{ marginRight: 6 }}>
          {/* Weather icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 18a5 5 0 0 0-10 0" /><circle cx="12" cy="10" r="4" /></svg>
          <span style={{ marginLeft: 2, fontWeight: 600, color: '#fff', fontSize: '0.98rem' }}>21°C</span>
        </span>
        <span style={{ marginRight: 6 }}>
          {/* Play icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
        </span>
        <span style={{ marginRight: 6 }}>
          {/* Moon icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" /></svg>
        </span>
        <span style={{ marginRight: 6 }}>
          {/* Battery icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="16" height="10" rx="3" /><rect x="18" y="10" width="2" height="4" rx="1" fill="#fff" /></svg>
        </span>
        <span style={{ marginRight: 6 }}>
          {/* WiFi icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><path d="M12 20h.01" /></svg>
        </span>
        <span style={{ marginRight: 6 }}>
          {/* Search icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        </span>
        <span style={{ marginRight: 6 }}>
          {/* Control center icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="10" height="10" rx="2" /><rect x="3" y="3" width="4" height="4" rx="1" /><rect x="17" y="3" width="4" height="4" rx="1" /><rect x="3" y="17" width="4" height="4" rx="1" /><rect x="17" y="17" width="4" height="4" rx="1" /></svg>
        </span>
        <span style={{ marginRight: 6 }}>
          {/* Pineapple logo (color) */}
          <img src="/favicon.svg" alt="Pineapple" style={{ width: 20, height: 20, verticalAlign: 'middle', borderRadius: '50%' }} />
        </span>
        <span style={{ marginRight: 6, fontWeight: 600, color: '#fff', fontSize: '1.02rem' }}>Mon Sep 22</span>
        <span style={{ fontWeight: 600, color: '#fff', fontSize: '1.02rem' }}>1:04 AM</span>
      </div>
    </div>
  );
};

export default MenuBar;
