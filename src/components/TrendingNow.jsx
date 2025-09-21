import React from 'react';

const TrendingNow = ({ experiences }) => {
  return (
    <section id="experience" className="content-row" style={{
      padding: '2rem 4%',
      backgroundColor: '#141414'
    }}>
      <h2 className="row-title" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.8rem',
        marginBottom: '1rem',
        color: '#FFFFFF'
      }}>
        Trending Now - Experience
      </h2>
      <div className="horizontal-scroll" style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '1rem',
        paddingBottom: '1rem',
        scrollbarWidth: 'thin'
      }}>
        {experiences.map((exp, index) => (
          <div key={index} className="card" style={{
            minWidth: '300px',
            backgroundColor: '#181818',
            borderRadius: '4px',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            position: 'relative'
          }}>
            <div className="card-content" style={{
              padding: '1.5rem'
            }}>
              <h3 className="card-title" style={{
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                color: '#FFFFFF',
                fontSize: '1.1rem'
              }}>
                {exp.company}
              </h3>
              <p className="card-text role" style={{
                color: '#E50914',
                fontSize: '0.9rem',
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                {exp.role}
              </p>
              <p className="card-text period" style={{
                color: '#808080',
                fontSize: '0.8rem',
                marginBottom: '1rem'
              }}>
                {exp.period}
              </p>
              <p className="card-text description" style={{
                color: '#e5e5e5',
                fontSize: '0.85rem',
                lineHeight: '1.4',
                margin: 0
              }}>
                {exp.description}
              </p>
              {exp.verificationLink && (
                <a
                  href={exp.verificationLink}
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

export default TrendingNow;
