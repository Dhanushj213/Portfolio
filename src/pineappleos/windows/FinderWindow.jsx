import React from 'react';
import WindowFrame from './WindowFrame';

const FinderWindow = ({ projects, ...props }) => (
  <WindowFrame {...props}>
    <div style={{ padding: 24, height: 'calc(100vh - 120px)', overflowY: 'auto' }}>
      <h2 style={{ marginBottom: 18 }}>Projects (Finder)</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {projects && projects.map(project => (
          <li key={project.id} style={{ marginBottom: 24, background: 'rgba(30,32,38,0.5)', borderRadius: 8, padding: 16, boxShadow: '0 2px 8px #222' }}>
            <div style={{ fontWeight: 600, fontSize: '1.15rem', color: '#E50914', marginBottom: 4 }}>{project.title}</div>
            <div style={{ fontSize: '1rem', color: '#e5e5e5', marginBottom: 6 }}>{project.period}</div>
            <div style={{ fontSize: '0.98rem', color: '#e5e5e5', marginBottom: 8 }}>{project.description}</div>
            {project.image && <img src={project.image} alt={project.title} style={{ width: 120, borderRadius: 8, marginBottom: 6, boxShadow: '0 2px 8px #3a7bd5' }} />}
          </li>
        ))}
      </ul>
    </div>
  </WindowFrame>
);

export default FinderWindow;
