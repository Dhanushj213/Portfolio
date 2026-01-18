import React from 'react';
import { motion } from 'framer-motion';

const Certifications = ({ certifications }) => {
  // Triple the items to ensure seamless looping on large screens
  const marqueeItems = [...certifications, ...certifications, ...certifications];

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

      <div className="marquee-wrapper" style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}>
        <motion.div
          className="marquee-track"
          style={{
            display: 'flex',
            gap: '2rem',
            width: 'max-content',
            paddingLeft: '2rem'
          }}
          animate={{ x: `calc(-100% / 3)` }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }} // Note: This doesn't work directly with motion values, but we'll add interactive cards.
        >
          {marqueeItems.map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="certification-card"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '1.5rem',
                minWidth: '280px',
                maxWidth: '280px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexShrink: 0,
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = '#E50914';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
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
                    transition: 'background 0.2s',
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
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
