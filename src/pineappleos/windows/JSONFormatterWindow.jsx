import React, { useState } from 'react';
import WindowFrame from './WindowFrame';

const JSONFormatterWindow = (props) => {
  const [raw, setRaw] = useState('');
  const [formatted, setFormatted] = useState('');
  const [error, setError] = useState('');

  const formatJSON = () => {
    try {
      const obj = JSON.parse(raw);
      setFormatted(JSON.stringify(obj, null, 2));
      setError('');
    } catch (e) {
      setFormatted('');
      setError('Invalid JSON: ' + e.message);
    }
  };

  return (
    <WindowFrame {...props}>
      <div style={{ padding: 24, display: 'flex', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <h3>Raw JSON</h3>
          <textarea value={raw} onChange={e => setRaw(e.target.value)} style={{ width: '100%', height: 180, fontFamily: 'monospace', fontSize: 15, borderRadius: 8, padding: 8, background: '#18181b', color: '#fff', border: '1px solid #444' }} />
          <button onClick={formatJSON} style={{ marginTop: 8, padding: '6px 18px', borderRadius: 6, background: '#27c93f', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Format</button>
          {error && <div style={{ color: '#E50914', marginTop: 8 }}>{error}</div>}
        </div>
        <div style={{ flex: 1 }}>
          <h3>Formatted JSON</h3>
          <pre style={{ background: '#222', color: '#39FF14', borderRadius: 8, padding: 12, minHeight: 180, fontFamily: 'monospace', fontSize: 15 }}>{formatted || 'Formatted JSON will appear here.'}</pre>
        </div>
      </div>
    </WindowFrame>
  );
};

export default JSONFormatterWindow;
