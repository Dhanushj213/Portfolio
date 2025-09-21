import React from 'react';

const apps = [
  { name: 'Finder', icon: <svg width="40" height="40" viewBox="0 0 40 40"><defs><radialGradient id="finderGrad" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#aee"/><stop offset="100%" stopColor="#3a7bd5"/></radialGradient></defs><rect width="40" height="40" rx="10" fill="url(#finderGrad)"/><text x="10" y="28" fontSize="18" fontWeight="bold" fill="#fff">F</text></svg> },
  { name: 'System Settings', icon: <svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#222" stroke="#E50914" strokeWidth="2"/><text x="7" y="28" fontSize="18" fontWeight="bold" fill="#fff">⚙️</text></svg> },
  { name: 'TextEdit', icon: <svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#fff"/><text x="7" y="28" fontSize="18" fontWeight="bold" fill="#222">TXT</text></svg> },
  { name: 'Terminal.app', icon: <svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#222"/><text x="7" y="28" fontSize="18" fontWeight="bold" fill="#39FF14">TER</text></svg> },
  { name: 'CodePad.exe', icon: <svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#3a7bd5"/><text x="7" y="28" fontSize="18" fontWeight="bold" fill="#fff">JS</text></svg> },
  { name: 'The_Vault.app', icon: <svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#222"/><text x="7" y="28" fontSize="18" fontWeight="bold" fill="#E50914">🔒</text></svg> },
  { name: 'JSON_Formatter.exe', icon: <svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#fff"/><text x="7" y="28" fontSize="18" fontWeight="bold" fill="#E50914">JSON</text></svg> },
  { name: 'Contacts', icon: <svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#3a7bd5"/><text x="7" y="28" fontSize="18" fontWeight="bold" fill="#fff">C</text></svg> },
];

const Dock = ({ openApps, activeApp, launchApp }) => {
  return (
    <div className="dock" style={{ overflowX: 'auto', paddingBottom: 8 }}>
      {apps.map(app => (
        <div
          key={app.name}
          className={`dock-icon${activeApp === app.name ? ' active' : ''}`}
          onClick={() => launchApp(app.name)}
          style={{
            position: 'relative',
            margin: '0 8px',
            transition: 'transform 0.2s cubic-bezier(.17,.67,.83,.67)',
            transform: activeApp === app.name ? 'scale(1.25) translateY(-8px)' : 'scale(1)',
            boxShadow: activeApp === app.name ? '0 8px 24px #3a7bd5, 0 2px 8px #222' : '0 2px 8px #222',
            borderRadius: 12,
            background: activeApp === app.name ? 'rgba(255,255,255,0.12)' : 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.25) translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 8px 24px #3a7bd5, 0 2px 8px #222';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = activeApp === app.name ? 'scale(1.25) translateY(-8px)' : 'scale(1)';
            e.currentTarget.style.boxShadow = activeApp === app.name ? '0 8px 24px #3a7bd5, 0 2px 8px #222' : '0 2px 8px #222';
          }}
        >
          <span style={{ display: 'block', width: 40, height: 40 }}>{app.icon}</span>
          {openApps.includes(app.name) && (
            <span className="dock-dot" style={{ position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)', width: 10, height: 10, borderRadius: '50%', background: '#E50914', boxShadow: '0 0 8px #E50914' }}></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dock;
