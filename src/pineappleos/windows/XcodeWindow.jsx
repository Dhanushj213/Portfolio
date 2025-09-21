import React, { useState } from 'react';
import WindowFrame from './WindowFrame';

const XcodeWindow = (props) => {
  const [code, setCode] = useState('console.log("Hello World!")');
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      const log = [];
      const customConsole = { log: (...args) => log.push(args.join(' ')) };
      // eslint-disable-next-line no-new-func
      new Function('console', code)(customConsole);
      setOutput(log.join('\n'));
    } catch (e) {
      setOutput('Error: ' + e.message);
    }
  };

  return (
    <WindowFrame {...props}>
      <div style={{ padding: 24 }}>
        <h2>CodePad.exe (Mini Web Compiler)</h2>
        <textarea value={code} onChange={e => setCode(e.target.value)} style={{ width: '100%', height: 120, fontFamily: 'monospace', fontSize: 16, borderRadius: 8, padding: 8, background: '#18181b', color: '#fff', border: '1px solid #444' }} />
        <button onClick={runCode} style={{ marginTop: 12, padding: '6px 18px', borderRadius: 6, background: '#27c93f', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Run</button>
        <div style={{ marginTop: 18, background: '#222', color: '#39FF14', borderRadius: 8, padding: 12, minHeight: 48, fontFamily: 'monospace', fontSize: 15 }}>
          {output || 'Console output will appear here.'}
        </div>
      </div>
    </WindowFrame>
  );
};

export default XcodeWindow;
