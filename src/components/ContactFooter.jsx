import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactFooter = ({ contactInfo }) => {
  return (
    <footer className="footer" style={{
      padding: '3rem 4%',
      backgroundColor: '#141414',
      borderTop: '1px solid #333'
    }}>
      <h2 className="footer-title" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '2rem',
        marginBottom: '1.5rem',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        What's Next? Let's Connect.
      </h2>
      <div className="contact-info" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        marginBottom: '2rem',
        alignItems: 'center'
      }}>
        <div className="contact-item" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#e5e5e5',
          fontSize: '1rem'
        }}>
          <FaEnvelope />
          <a href={`mailto:${contactInfo.email}`} style={{
            color: 'inherit',
            textDecoration: 'none'
          }}>
            {contactInfo.email}
          </a>
        </div>
        <div className="contact-item" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#e5e5e5',
          fontSize: '1rem'
        }}>
          <FaPhone />
          <a href={`tel:${contactInfo.phone}`} style={{
            color: 'inherit',
            textDecoration: 'none'
          }}>
            {contactInfo.phone}
          </a>
        </div>
        <div className="contact-item" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#e5e5e5',
          fontSize: '1rem'
        }}>
          <FaMapMarkerAlt />
          {contactInfo.location}
        </div>
        <div className="contact-item" style={{
          color: '#e5e5e5',
          fontSize: '1rem'
        }}>
          DOB: {contactInfo.dob}
        </div>
      </div>
      <div className="social-links" style={{
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center'
      }}>
        <a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          style={{
            color: '#e5e5e5',
            fontSize: '1.5rem',
            transition: 'color 0.3s ease',
            textDecoration: 'none'
          }}
        >
          <FaLinkedin />
        </a>
        <a
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          style={{
            color: '#e5e5e5',
            fontSize: '1.5rem',
            transition: 'color 0.3s ease',
            textDecoration: 'none'
          }}
        >
          <FaGithub />
        </a>
        <a
          href={`mailto:${contactInfo.email}`}
          className="social-link"
          style={{
            color: '#e5e5e5',
            fontSize: '1.5rem',
            transition: 'color 0.3s ease',
            textDecoration: 'none'
          }}
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default ContactFooter;
