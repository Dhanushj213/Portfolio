import React, { useState } from 'react';
import WindowFrame from './WindowFrame';

const TerminalWindow = (props) => {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/1');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');
  const [status, setStatus] = useState('');

  const sendRequest = async () => {
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: method === 'POST' ? body : undefined,
      });
      setStatus(res.status);
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (e) {
      setResponse('Error: ' + e.message);
      setStatus('');
    }
  };

  return (
    <WindowFrame {...props}>
      <div style={{ padding: 24 }}>
        <h2>Terminal.app (API Playground)</h2>
        <input value={url} onChange={e => setUrl(e.target.value)} placeholder="API URL" style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #444', background: '#18181b', color: '#fff', marginBottom: 8 }} />
        <select value={method} onChange={e => setMethod(e.target.value)} style={{ marginRight: 8, padding: 6, borderRadius: 6, background: '#222', color: '#fff', border: '1px solid #444' }}>
          <option>GET</option>
          <option>POST</option>
        </select>
        {method === 'POST' && (
          <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="JSON body" style={{ width: '100%', height: 60, fontFamily: 'monospace', fontSize: 15, borderRadius: 8, padding: 8, background: '#18181b', color: '#fff', border: '1px solid #444', marginBottom: 8 }} />
        )}
        <button onClick={sendRequest} style={{ marginTop: 8, padding: '6px 18px', borderRadius: 6, background: '#27c93f', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Send</button>
        <div style={{ marginTop: 18, background: '#222', color: '#39FF14', borderRadius: 8, padding: 12, minHeight: 48, fontFamily: 'monospace', fontSize: 15 }}>
          <div>Status: {status}</div>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', color: '#fff' }}>{response || 'Response will appear here.'}</pre>
        </div>
      </div>
    </WindowFrame>
  );
};

export default TerminalWindow;
