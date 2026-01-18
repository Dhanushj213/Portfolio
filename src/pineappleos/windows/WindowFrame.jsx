import React, { useState, useRef } from 'react';

const WindowFrame = ({ appName, closeApp, setActiveApp, isActive, isMobile, children }) => {
  const [maximized, setMaximized] = useState(false);
  const [pos, setPos] = useState({ x: 120 + Math.random() * 60, y: 80 + Math.random() * 40 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const effectiveMaximized = isMobile || maximized;

  const handleClose = () => {
    closeApp(appName);
  };
  const handleMinimize = () => {
    closeApp(appName);
  };
  const handleMaximize = () => {
    setMaximized(!maximized);
  };

  // Drag logic
  const onHeaderMouseDown = (e) => {
    if (isMobile) return;
    dragging.current = true;
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  const onMouseMove = (e) => {
    if (dragging.current && !maximized) {
      setPos({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
    }
  };
  const onMouseUp = () => {
    dragging.current = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  // Double-click header to expand/restore
  const onHeaderDoubleClick = () => {
    handleMaximize();
  };

  return (
    <div
      className={`window-frame${isActive ? ' active' : ''}${effectiveMaximized ? ' maximized' : ''}`}
      style={{
        position: 'absolute',
        top: effectiveMaximized ? 0 : pos.y,
        left: effectiveMaximized ? 0 : pos.x,
        width: effectiveMaximized ? '100vw' : 480,
        height: effectiveMaximized ? '100vh' : undefined,
        minHeight: 320,
        background: 'rgba(30,32,38,0.95)',
        borderRadius: effectiveMaximized ? 0 : 16,
        boxShadow: effectiveMaximized ? 'none' : '0 8px 32px rgba(0,0,0,0.18)',
        backdropFilter: 'blur(16px)',
        border: isActive && !effectiveMaximized ? '2px solid #E50914' : 'none',
        zIndex: isActive ? 100 : 10,
        overflow: 'hidden',
        cursor: isMobile ? 'default' : 'pointer',
        transition: 'border 0.2s, width 0.3s, height 0.3s, top 0.2s, left 0.2s',
        display: 'block',
      }}
      onClick={() => setActiveApp(appName)}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: isMobile ? '12px 16px' : '8px 16px',
          background: isMobile ? '#141414' : 'rgba(255,255,255,0.10)',
          borderTopLeftRadius: effectiveMaximized ? 0 : 16,
          borderTopRightRadius: effectiveMaximized ? 0 : 16,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          userSelect: 'none',
          cursor: isMobile ? 'default' : 'grab',
        }}
        onMouseDown={onHeaderMouseDown}
        onDoubleClick={!isMobile ? onHeaderDoubleClick : undefined}
      >
        {/* Mobile: Back/Close Button */}
        {isMobile ? (
          <button
            onClick={handleClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#E50914',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginRight: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 4
            }}
          >
            <i className="fas fa-chevron-left"></i> Back
          </button>
        ) : (
          /* Desktop: Traffic light controls */
          <div style={{ display: 'flex', gap: 6, marginRight: 12 }}>
            <span title="Minimize to Dock" style={{ width: 14, height: 14, borderRadius: '50%', background: '#ff5f56', display: 'inline-block', border: '1px solid #d8d8d8', cursor: 'pointer', boxShadow: '0 2px 8px #ff5f56' }} onClick={handleClose}></span>
            <span title="Hide Window" style={{ width: 14, height: 14, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block', border: '1px solid #d8d8d8', cursor: 'pointer', boxShadow: '0 2px 8px #ffbd2e' }} onClick={handleMinimize}></span>
            <span title="Expand/Restore" style={{ width: 14, height: 14, borderRadius: '50%', background: '#27c93f', display: 'inline-block', border: '1px solid #d8d8d8', cursor: 'pointer', boxShadow: '0 2px 8px #27c93f' }} onClick={handleMaximize}></span>
          </div>
        )}
        <span style={{ fontWeight: 600, fontSize: isMobile ? '1.2rem' : '1.1rem', color: '#e5e5e5', flex: 1, textAlign: isMobile ? 'center' : 'left', marginRight: isMobile ? 40 : 0 }}>{appName}</span>
      </div>
      <div style={{ background: 'rgba(20, 20, 20, 0.95)', height: '100%', overflowY: 'auto', padding: effectiveMaximized ? (isMobile ? '16px' : 32) : 0, paddingBottom: isMobile ? 80 : 0 }}>
        {children}
      </div>
    </div>
  );
};

export default WindowFrame;
