import React, { useState } from 'react';
import WindowFrame from './WindowFrame';

function sha256(str) {
  // Simple SHA-256 using SubtleCrypto
  if (window.crypto && window.crypto.subtle) {
    return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(str)).then(buf =>
      Array.from(new Uint8Array(buf)).map(x => x.toString(16).padStart(2, '0')).join('')
    );
  }
  return Promise.resolve('Not supported');
}
function md5() {
  // Placeholder: MD5 not natively supported in browser
  return 'MD5 not supported in browser';
}
function base64encode(str) {
  return btoa(str);
}
function base64decode(str) {
  try { return atob(str); } catch { return 'Invalid Base64'; }
}
function passwordStrength(pw) {
  let score = 0;
  if (!pw) return 'Enter password';
  if (pw.length > 7) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return ['Weak', 'Medium', 'Strong', 'Very Strong'][score] || 'Very Weak';
}
function generatePassword() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  return Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

const KeychainWindow = (props) => {
  const [tab, setTab] = useState(0);
  const [input, setInput] = useState('');
  const [sha, setSha] = useState('');
  const [md5hash, setMd5] = useState('');
  const [base64, setBase64] = useState('');
  const [decoded, setDecoded] = useState('');
  const [pw, setPw] = useState('');
  const [pwStrength, setPwStrength] = useState('');
  const [genPw, setGenPw] = useState('');

  // Tab 1: Hashing
  const handleHash = async () => {
    setSha(await sha256(input));
    setMd5(md5(input));
  };
  // Tab 2: Encoding
  const handleEncode = () => setBase64(base64encode(input));
  const handleDecode = () => setDecoded(base64decode(input));
  // Tab 3: Password tools
  const handlePwStrength = () => setPwStrength(passwordStrength(pw));
  const handleGenPw = () => setGenPw(generatePassword());

  return (
    <WindowFrame {...props}>
      <div style={{ padding: 24 }}>
        <h2>The_Vault.app (Cybersecurity Toolkit)</h2>
        <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
          {['Hashing', 'Encoding', 'Password Tools'].map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: '6px 18px', borderRadius: 6, background: tab === i ? '#E50914' : '#222', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>{t}</button>
          ))}
        </div>
        {tab === 0 && (
          <div>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Enter text" style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #444', background: '#18181b', color: '#fff', marginBottom: 8 }} />
            <button onClick={handleHash} style={{ marginBottom: 8, padding: '6px 18px', borderRadius: 6, background: '#27c93f', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Hash</button>
            <div style={{ color: '#39FF14', marginBottom: 6 }}>SHA-256: {sha}</div>
            <div style={{ color: '#E50914' }}>MD5: {md5hash}</div>
          </div>
        )}
        {tab === 1 && (
          <div>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Enter text" style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #444', background: '#18181b', color: '#fff', marginBottom: 8 }} />
            <button onClick={handleEncode} style={{ marginRight: 8, padding: '6px 18px', borderRadius: 6, background: '#27c93f', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Encode</button>
            <button onClick={handleDecode} style={{ padding: '6px 18px', borderRadius: 6, background: '#E50914', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Decode</button>
            <div style={{ color: '#39FF14', marginTop: 6 }}>Base64: {base64}</div>
            <div style={{ color: '#E50914' }}>Decoded: {decoded}</div>
          </div>
        )}
        {tab === 2 && (
          <div>
            <input value={pw} onChange={e => setPw(e.target.value)} placeholder="Enter password" style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #444', background: '#18181b', color: '#fff', marginBottom: 8 }} />
            <button onClick={handlePwStrength} style={{ marginRight: 8, padding: '6px 18px', borderRadius: 6, background: '#27c93f', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Analyze</button>
            <span style={{ color: '#39FF14', marginRight: 12 }}>Strength: {pwStrength}</span>
            <button onClick={handleGenPw} style={{ padding: '6px 18px', borderRadius: 6, background: '#E50914', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Generate</button>
            <span style={{ color: '#E50914', marginLeft: 12 }}>Generated: {genPw}</span>
          </div>
        )}
      </div>
    </WindowFrame>
  );
};

export default KeychainWindow;
