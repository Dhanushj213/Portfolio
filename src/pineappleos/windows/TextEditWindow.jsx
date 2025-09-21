import React from 'react';
import WindowFrame from './WindowFrame';

const TextEditWindow = ({ contactInfo, ...props }) => (
  <WindowFrame {...props}>
    <div style={{ padding: 24 }}>
      <h2>README.md (TextEdit)</h2>
      <div style={{ color: '#e5e5e5', fontSize: '1.05rem', marginBottom: 12 }}>
        Computer Science Engineering student specializing in Cybersecurity and Full-Stack Development. Passionate about building secure, scalable, and innovative solutions. Open to new challenges and opportunities.
      </div>
      <div style={{ color: '#E50914', fontWeight: 600, marginBottom: 6 }}>Contact Info:</div>
      <div style={{ color: '#e5e5e5', fontSize: '0.98rem' }}>
        Email: {contactInfo?.email}<br />
        Phone: {contactInfo?.phone}<br />
        Location: {contactInfo?.location}<br />
        LinkedIn: <a href={contactInfo?.linkedin} style={{ color: '#E50914' }}>{contactInfo?.linkedin}</a><br />
        GitHub: <a href={contactInfo?.github} style={{ color: '#E50914' }}>{contactInfo?.github}</a><br />
        DOB: {contactInfo?.dob}
      </div>
    </div>
  </WindowFrame>
);

export default TextEditWindow;
