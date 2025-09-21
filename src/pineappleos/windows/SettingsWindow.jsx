import React from 'react';
import WindowFrame from './WindowFrame';

const SettingsWindow = ({ skills, ...props }) => (
  <WindowFrame {...props}>
    <div style={{ padding: 24, maxHeight: 400, overflowY: 'auto' }}>
      <h2>Skills (System Settings)</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {skills && skills.map(category => (
          <li key={category.id} style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#E50914', marginBottom: 4 }}>{category.title}</div>
            <div style={{ color: '#e5e5e5', fontSize: '0.98rem' }}>{category.skills.join(', ')}</div>
          </li>
        ))}
      </ul>
    </div>
  </WindowFrame>
);

export default SettingsWindow;
