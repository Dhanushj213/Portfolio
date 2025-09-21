import React from 'react';
import WindowFrame from './WindowFrame';

const ContactsWindow = ({ contactInfo, ...props }) => (
  <WindowFrame {...props}>
    <div style={{ padding: 24 }}>
      <h2>Contacts</h2>
      <div style={{ color: '#e5e5e5', fontSize: '1.05rem', marginBottom: 12 }}>
        <div>Email: {contactInfo?.email}</div>
        <div>Phone: {contactInfo?.phone}</div>
        <div>Location: {contactInfo?.location}</div>
        <div>LinkedIn: <a href={contactInfo?.linkedin} style={{ color: '#E50914' }}>{contactInfo?.linkedin}</a></div>
        <div>GitHub: <a href={contactInfo?.github} style={{ color: '#E50914' }}>{contactInfo?.github}</a></div>
        <div>DOB: {contactInfo?.dob}</div>
      </div>
    </div>
  </WindowFrame>
);

export default ContactsWindow;
