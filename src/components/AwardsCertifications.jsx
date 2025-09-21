import React from 'react';

const Certifications = ({ certifications }) => {
  return (
    <section className="content-row" style={{
      padding: '2rem 4%',
      backgroundColor: '#141414'
    }}>
      <h2 className="row-title" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.8rem',
        marginBottom: '1rem',
        color: '#FFFFFF'
      }}>
        Certifications
      </h2>
      <div className="certifications-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.5rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {certifications.map(cert => (
          <div key={cert.id} className="certification-item" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            borderRadius: '8px',
            transition: 'transform 0.3s ease, background-color 0.3s ease',
            textAlign: 'center',
            minHeight: '200px',
            justifyContent: 'space-between'
          }}>
            <div className="certification-badge" style={{
              marginRight: '1rem',
              paddingTop: '5px'
            }}>
              <div className="certification-icon" style={{
                color: '#E50914',
                fontSize: '1.5rem'
              }}>
                📜
              </div>
            </div>
            <div className="certification-details">
              <h3 className="certification-title" style={{
                fontWeight: '600',
                fontSize: '1rem',
                color: '#FFFFFF',
                marginBottom: '0.3rem'
              }}>
                {cert.title}
              </h3>
              <p className="certification-organization" style={{
                fontWeight: '500',
                color: '#E50914',
                fontSize: '0.9rem',
                marginBottom: '0.2rem'
              }}>
                {cert.organization}
              </p>
              <p className="certification-period" style={{
                fontSize: '0.8rem',
                color: '#808080'
              }}>
                {cert.date}
              </p>
              {cert.verificationLink && (
                <a
                  href={cert.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="netflix-button secondary-button verify-button"
                  style={{
                    fontSize: '0.8rem',
                    padding: '4px 8px',
                    marginTop: '8px',
                    backgroundColor: '#E50914',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: 'bold'
                  }}
                >
                  Verify
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
