import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const Certifications = ({ certifications }) => {
  return (
    <section className="content-row" style={{
      padding: '3rem 0',
      backgroundColor: '#141414',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <h2 className="row-title" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.8rem',
        marginBottom: '1.5rem',
        color: '#FFFFFF',
        paddingLeft: '4%'
      }}>
        Certifications & Licenses
      </h2>

      <div className="cards-wrapper" style={{
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        gap: '2rem',
        padding: '1rem 2rem',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none',  // IE 10+
        WebkitOverflowScrolling: 'touch'
      }}>
        {certifications.map((cert, index) => (
          <motion.div
            key={`${cert.id}-${index}`}
            className="certification-card"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '1.5rem',
              width: '280px', // Fixed width for consistency
              minHeight: '200px',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
              cursor: 'pointer',
              flexShrink: 0 // Prevent shrinking in scroll view
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              borderColor: '#E50914',
              boxShadow: '0 10px 30px rgba(229, 9, 20, 0.15)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2rem', marginRight: '0.75rem' }}>📜</span>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#fff',
                  lineHeight: '1.3'
                }}>
                  {cert.title}
                </h3>
              </div>

              <p style={{
                color: '#E50914',
                fontSize: '0.85rem',
                fontWeight: '500',
                marginBottom: '0.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {cert.organization}
              </p>
              <p style={{ color: '#888', fontSize: '0.8rem' }}>{cert.date}</p>
            </div>

            {cert.verificationLink && (
              <a
                href={cert.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '1rem',
                  padding: '8px 16px',
                  background: 'rgba(229, 9, 20, 0.1)',
                  color: '#E50914',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'background 0.2s, color 0.2s',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#E50914';
                  e.target.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(229, 9, 20, 0.1)';
                  e.target.style.color = '#E50914';
                }}
              >
                Verify Credential
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
