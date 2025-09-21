import React, { useState } from 'react';
import MenuBar from './MenuBar';
import Dock from './Dock';
import WindowManager from './WindowManager';
import './pineappleos.css';

const PineappleOS = ({ projects, skills, experiences, certifications, contactInfo }) => {
  // Track open apps and active app
  const [openApps, setOpenApps] = useState([]);
  const [activeApp, setActiveApp] = useState('Finder');

  // App launch handler
  const launchApp = (appName) => {
    if (!openApps.includes(appName)) {
      setOpenApps([...openApps, appName]);
    }
    setActiveApp(appName);
  };

  // App close handler
  const closeApp = (appName) => {
    setOpenApps(openApps.filter(app => app !== appName));
    if (activeApp === appName) setActiveApp(openApps[0] || 'Finder');
  };

  // Desktop icons state
  const [desktopIcons, setDesktopIcons] = useState([
    // Grouped contact icons
    {
      id: 'resume',
      label: 'Resume',
      icon: <svg width="56" height="56" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#E50914"/><text x="8" y="40" fontSize="16" fontWeight="bold" fill="#fff">CV</text></svg>,
      x: 32,
      y: 140,
      onClick: () => window.open('https://drive.google.com/file/d/1E6HM8pHJJhxsQgzSjMN0gL-IG6SREJA_/view?usp=drive_link', '_blank')
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: <svg width="56" height="56" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#0077b5"/><text x="8" y="40" fontSize="16" fontWeight="bold" fill="#fff">in</text></svg>,
      x: 100,
      y: 140,
      onClick: () => window.open('https://www.linkedin.com/in/dhanush-j-a976ab26b', '_blank')
    },
    {
      id: 'mail',
      label: 'Mail',
      icon: <svg width="56" height="56" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#222"/><text x="8" y="40" fontSize="16" fontWeight="bold" fill="#fff">@</text></svg>,
      x: 168,
      y: 140,
      onClick: () => window.open('mailto:jdhanush213@gmail.com', '_blank')
    },
    {
      id: 'github',
      label: 'GitHub',
      icon: <svg width="56" height="56" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#222"/><text x="8" y="40" fontSize="16" fontWeight="bold" fill="#fff">GH</text></svg>,
      x: 236,
      y: 140,
      onClick: () => window.open('https://github.com/dhanushj213', '_blank')
    },
    {
      id: 'call',
      label: 'Call',
      icon: <svg width="56" height="56" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#27c93f"/><text x="8" y="40" fontSize="16" fontWeight="bold" fill="#fff">📞</text></svg>,
      x: 304,
      y: 140,
      onClick: () => window.open('tel:+918217471928', '_blank')
    }
  ]);

  // Drag logic
  let dragActive = false;
  const handleDragStart = (e, id) => {
    dragActive = true;
    e.dataTransfer.setData('iconId', id);
    e.dataTransfer.setData('offsetX', e.nativeEvent.offsetX);
    e.dataTransfer.setData('offsetY', e.nativeEvent.offsetY);
  };
  const handleDrop = (e) => {
    dragActive = false;
    const id = e.dataTransfer.getData('iconId');
    const offsetX = parseInt(e.dataTransfer.getData('offsetX'), 10);
    const offsetY = parseInt(e.dataTransfer.getData('offsetY'), 10);
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    setDesktopIcons(icons => icons.map(icon => icon.id === id ? { ...icon, x, y } : icon));
  };

  return (
    <div className="pineappleos-desktop" onDragOver={e => e.preventDefault()} onDrop={handleDrop} style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* Desktop icons (zIndex: 5, below windows, above Dock) */}
      {desktopIcons
        .filter(icon => !['resume','linkedin','mail','github','call'].includes(icon.id))
        .map(icon => (
          <div
            key={icon.id}
            draggable
            onDragStart={e => handleDragStart(e, icon.id)}
            onClick={e => {
              if (!dragActive) {
                icon.onClick();
              }
              dragActive = false;
            }}
            style={{
              position: 'absolute',
              left: icon.x,
              top: icon.y,
              cursor: 'pointer',
              textAlign: 'center',
              zIndex: 1000,
              width: 64,
              userSelect: 'none',
              pointerEvents: 'auto',
            }}
          >
            {icon.icon}
            <div style={{ color: '#e5e5e5', fontSize: '0.95rem', marginTop: 2 }}>{icon.label}</div>
          </div>
      ))}

      {/* Vertical sidebar for Resume/LinkedIn/Mail/GitHub/Call */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          right: '32px',
          transform: 'translateY(-50%)',
          background: 'rgba(20, 20, 30, 0.7)',
          borderRadius: '24px 0 0 24px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.18)',
          padding: '16px 8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '18px',
          zIndex: 1100,
        }}
      >
        {desktopIcons.filter(icon => ['resume','linkedin','mail','github','call'].includes(icon.id)).map(icon => (
          <div key={icon.id} style={{ cursor: 'pointer' }} onClick={() => icon.onClick()}>
            {icon.icon}
            <div style={{ color: '#e5e5e5', fontSize: '0.85rem', marginTop: 2 }}>{icon.label}</div>
          </div>
        ))}
      </div>
  <MenuBar activeApp={activeApp} onBackToProfile={typeof menuBarProps === 'object' ? menuBarProps.onBackToProfile : undefined} />
      <WindowManager
        openApps={openApps}
        activeApp={activeApp}
        closeApp={closeApp}
        setActiveApp={setActiveApp}
        projects={projects}
        skills={skills}
        experiences={experiences}
        certifications={certifications}
        contactInfo={contactInfo}
      />
      <Dock openApps={openApps} activeApp={activeApp} launchApp={launchApp} />
    </div>
  );
};

export default PineappleOS;
