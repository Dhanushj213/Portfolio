import React, { useState, useRef } from 'react';

const WindowFrame = ({ appName, closeApp, setActiveApp, isActive, children }) => {
  const [maximized, setMaximized] = useState(false);
  const [pos, setPos] = useState({ x: 120 + Math.random() * 60, y: 80 + Math.random() * 40 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

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
      className={`window-frame${isActive ? ' active' : ''}${maximized ? ' maximized' : ''}`}
      style={{
        position: 'absolute',
        top: maximized ? 0 : pos.y,
        left: maximized ? 0 : pos.x,
        width: maximized ? '100vw' : 480,
        height: maximized ? '100vh' : undefined,
        minHeight: 320,
        background: 'rgba(30,32,38,0.85)',
        borderRadius: maximized ? 0 : 16,
        boxShadow: maximized ? 'none' : '0 8px 32px rgba(0,0,0,0.18)',
        backdropFilter: 'blur(16px)',
        border: isActive ? '2px solid #E50914' : '2px solid transparent',
        zIndex: isActive ? 100 : 10,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border 0.2s, width 0.3s, height 0.3s, top 0.2s, left 0.2s',
        display: 'block',
      }}
      onClick={() => setActiveApp(appName)}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px 16px',
          background: 'rgba(255,255,255,0.10)',
          borderTopLeftRadius: maximized ? 0 : 16,
          borderTopRightRadius: maximized ? 0 : 16,
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          userSelect: 'none',
          cursor: 'grab',
        }}
        onMouseDown={onHeaderMouseDown}
        onDoubleClick={onHeaderDoubleClick}
      >
        {/* Traffic light controls */}
        <div style={{ display: 'flex', gap: 6, marginRight: 12 }}>
          <span title="Minimize to Dock" style={{ width: 14, height: 14, borderRadius: '50%', background: '#ff5f56', display: 'inline-block', border: '1px solid #d8d8d8', cursor: 'pointer', boxShadow: '0 2px 8px #ff5f56' }} onClick={handleClose}></span>
          <span title="Hide Window" style={{ width: 14, height: 14, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block', border: '1px solid #d8d8d8', cursor: 'pointer', boxShadow: '0 2px 8px #ffbd2e' }} onClick={handleMinimize}></span>
          <span title="Expand/Restore" style={{ width: 14, height: 14, borderRadius: '50%', background: '#27c93f', display: 'inline-block', border: '1px solid #d8d8d8', cursor: 'pointer', boxShadow: '0 2px 8px #27c93f' }} onClick={handleMaximize}></span>
        </div>
        <span style={{ fontWeight: 500, fontSize: '1.1rem', color: '#e5e5e5', flex: 1 }}>{appName}</span>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.05)', height: '100%', overflowY: 'auto', padding: maximized ? 32 : 0 }}>
        {children}
      </div>
    </div>
  );
};

export default WindowFrame;
