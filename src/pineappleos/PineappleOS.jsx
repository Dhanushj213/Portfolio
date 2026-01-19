import React, { useState, useEffect } from 'react';
import MenuBar from './MenuBar';
import Dock from './Dock';
import WindowManager from './WindowManager';
import './pineappleos.css';

// System Apps Definition (mirrors Dock.jsx)
const systemApps = [
  { id: 'Finder', label: 'Finder', icon: <svg width="60" height="60" viewBox="0 0 40 40"><defs><radialGradient id="finderGrad" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#aee" /><stop offset="100%" stopColor="#3a7bd5" /></radialGradient></defs><rect width="40" height="40" rx="10" fill="url(#finderGrad)" /><text x="10" y="28" fontSize="18" fontWeight="bold" fill="#fff">F</text></svg> },
  { id: 'System Settings', label: 'Settings', icon: <svg width="60" height="60" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#222" stroke="#E50914" strokeWidth="2" /><text x="7" y="28" fontSize="18" fontWeight="bold" fill="#fff">⚙️</text></svg> },
  { id: 'TextEdit', label: 'TextEdit', icon: <svg width="60" height="60" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#fff" /><text x="7" y="28" fontSize="18" fontWeight="bold" fill="#222">TXT</text></svg> },
  { id: 'Terminal.app', label: 'Terminal', icon: <svg width="60" height="60" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#222" /><text x="7" y="28" fontSize="18" fontWeight="bold" fill="#39FF14">TER</text></svg> },
  { id: 'CodePad.exe', label: 'CodePad', icon: <svg width="60" height="60" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#3a7bd5" /><text x="7" y="28" fontSize="18" fontWeight="bold" fill="#fff">JS</text></svg> },
  { id: 'The_Vault.app', label: 'The Vault', icon: <svg width="60" height="60" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#222" /><text x="7" y="28" fontSize="18" fontWeight="bold" fill="#E50914">🔒</text></svg> },
  { id: 'JSON_Formatter.exe', label: 'JSON', icon: <svg width="60" height="60" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#fff" /><text x="7" y="28" fontSize="18" fontWeight="bold" fill="#E50914">JSON</text></svg> },
  { id: 'Contacts', label: 'Contacts', icon: <svg width="60" height="60" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#3a7bd5" /><text x="7" y="28" fontSize="18" fontWeight="bold" fill="#fff">C</text></svg> },
];

const PineappleOS = ({ projects, skills, experiences, certifications, contactInfo, menuBarProps }) => {
  // Track open apps and active app
  const [openApps, setOpenApps] = useState([]);
  const [activeApp, setActiveApp] = useState('Finder');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    if (activeApp === appName) setActiveApp(openApps[0] || (isMobile ? null : 'Finder'));
  };

  // Mobile App Grid Render
  const renderMobileGrid = () => {
    const allMobileApps = [
      ...systemApps,
      // Contact Apps
      { id: 'resume', label: 'Resume', icon: <svg width="60" height="60" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#E50914" /><text x="8" y="40" fontSize="16" fontWeight="bold" fill="#fff">CV</text></svg>, onClick: () => window.open('https://drive.google.com/file/d/1E6HM8pHJJhxsQgzSjMN0gL-IG6SREJA_/view?usp=drive_link', '_blank') },
      { id: 'linkedin', label: 'LinkedIn', icon: <svg width="60" height="60" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#0077b5" /><text x="8" y="40" fontSize="16" fontWeight="bold" fill="#fff">in</text></svg>, onClick: () => window.open('https://www.linkedin.com/in/dhanush-j-a976ab26b', '_blank') },
      { id: 'github', label: 'GitHub', icon: <svg width="60" height="60" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#222" /><text x="8" y="40" fontSize="16" fontWeight="bold" fill="#fff">GH</text></svg>, onClick: () => window.open('https://github.com/dhanushj213', '_blank') },
      { id: 'mail', label: 'Mail', icon: <svg width="60" height="60" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#222" /><text x="8" y="40" fontSize="16" fontWeight="bold" fill="#fff">@</text></svg>, onClick: () => window.open('mailto:jdhanush213@gmail.com', '_blank') },
      { id: 'call', label: 'Call', icon: <svg width="60" height="60" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#27c93f" /><text x="8" y="40" fontSize="16" fontWeight="bold" fill="#fff">📞</text></svg>, onClick: () => window.open('tel:+918217471928', '_blank') },
    ];

    return (
      <div className="mobile-app-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px 12px',
        padding: '60px 20px 20px 20px',
        justifyItems: 'center',
        alignContent: 'flex-start',
        height: '100vh',
        overflowY: 'auto'
      }}>
        {/* Status Bar Placeholder */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '40px', display: 'flex', justifyContent: 'space-between', padding: '0 20px', alignItems: 'center', fontSize: '14px', fontWeight: 600, color: '#fff', zIndex: 10 }}>
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <div style={{ display: 'flex', gap: 6 }}>
            <i className="fas fa-wifi"></i>
            <i className="fas fa-battery-full"></i>
          </div>
        </div>

        {allMobileApps.map(app => (
          <div
            key={app.id}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
            onClick={() => {
              if (app.onClick) app.onClick();
              else launchApp(app.id);
            }}
          >
            <div style={{ width: 60, height: 60, borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              {app.icon}
            </div>
            <span style={{ color: '#fff', fontSize: '11px', fontWeight: 500, textAlign: 'center' }}>{app.label}</span>
          </div>
        ))}
      </div>
    );
  };

  // Desktop icons state (Only needed for desktop view)
  const [desktopIcons, setDesktopIcons] = useState([
    {
      id: 'resume',
      label: 'Resume',
      icon: <svg width="56" height="56" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#E50914" /><text x="8" y="40" fontSize="16" fontWeight="bold" fill="#fff">CV</text></svg>,
      x: 32,
      y: 140,
      onClick: () => window.open('https://drive.google.com/file/d/1E6HM8pHJJhxsQgzSjMN0gL-IG6SREJA_/view?usp=drive_link', '_blank')
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: <svg width="56" height="56" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#0077b5" /><text x="8" y="40" fontSize="16" fontWeight="bold" fill="#fff">in</text></svg>,
      x: 100,
      y: 140,
      onClick: () => window.open('https://www.linkedin.com/in/dhanush-j-a976ab26b', '_blank')
    },
    {
      id: 'mail',
      label: 'Mail',
      icon: <svg width="56" height="56" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#222" /><text x="8" y="40" fontSize="16" fontWeight="bold" fill="#fff">@</text></svg>,
      x: 168,
      y: 140,
      onClick: () => window.open('mailto:jdhanush213@gmail.com', '_blank')
    },
    {
      id: 'github',
      label: 'GitHub',
      icon: <svg width="56" height="56" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#222" /><text x="8" y="40" fontSize="16" fontWeight="bold" fill="#fff">GH</text></svg>,
      x: 236,
      y: 140,
      onClick: () => window.open('https://github.com/dhanushj213', '_blank')
    },
    {
      id: 'call',
      label: 'Call',
      icon: <svg width="56" height="56" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#27c93f" /><text x="8" y="40" fontSize="16" fontWeight="bold" fill="#fff">📞</text></svg>,
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

  if (isMobile) {
    return (
      <div className="pineappleos-mobile" style={{ width: '100vw', height: '100vh', background: '#111', overflow: 'hidden', position: 'relative' }}>
        {/* Render Grid if no app open, or if app is open (WindowManager sits on top) */}
        {!openApps.length && renderMobileGrid()}

        {/* WindowManager for Mobile (Fullscreen Apps) */}
        {openApps.length > 0 && (
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
            isMobile={true}
          />
        )}

        {/* Mobile Bottom Home Bar (only if app is open to close it/go home) */}
        {openApps.length > 0 && (
          <div
            style={{
              position: 'fixed',
              bottom: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 120,
              height: 5,
              background: '#fff',
              borderRadius: 10,
              zIndex: 9999,
              cursor: 'pointer',
              opacity: 0.6
            }}
            onClick={() => setOpenApps([])}
          />
        )}
      </div>
    );
  }

  // Desktop View
  return (
    <div className="pineappleos-desktop" onDragOver={e => e.preventDefault()} onDrop={handleDrop} style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* Desktop icons */}
      {desktopIcons
        .filter(icon => !['resume', 'linkedin', 'mail', 'github', 'call'].includes(icon.id))
        .map(icon => (
          <div
            key={icon.id}
            draggable
            onDragStart={e => handleDragStart(e, icon.id)}
            onClick={() => {
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
        {desktopIcons.filter(icon => ['resume', 'linkedin', 'mail', 'github', 'call'].includes(icon.id)).map(icon => (
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
        isMobile={false}
      />
      <Dock openApps={openApps} activeApp={activeApp} launchApp={launchApp} />
    </div>
  );
};

export default PineappleOS;
