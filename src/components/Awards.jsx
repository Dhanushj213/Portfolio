import React from 'react';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: 'Star Performer Award',
      organization: 'OASIS INFOBYTES Internship',
      period: 'January 2025 - February 2025',
      verificationLink: 'https://drive.google.com/file/d/1CrvlL92HxnYNfWfEv18i0y3bm5gDZdYW/view'
    }
  ];

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
        Awards & Recognition
      </h2>
      <div className="awards-list" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {awards.map(award => (
          <div key={award.id} className="award-item" style={{
            display: 'flex',
            alignItems: 'flex-start',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '1rem',
            borderRadius: '4px',
            transition: 'transform 0.3s ease, background-color 0.3s ease'
          }}>
            <div className="award-badge" style={{
              marginRight: '1rem',
              paddingTop: '5px'
            }}>
              <div className="award-icon" style={{
                color: '#E50914',
                fontSize: '1.5rem'
              }}>
                🏆
              </div>
            </div>
            <div className="award-details" style={{
              flex: 1
            }}>
              <h3 className="award-title" style={{
                fontWeight: '600',
                fontSize: '1rem',
                color: '#FFFFFF',
                marginBottom: '0.3rem'
              }}>
                {award.title}
              </h3>
              <p className="award-organization" style={{
                fontWeight: '500',
                color: '#E50914',
                fontSize: '0.9rem',
                marginBottom: '0.2rem'
              }}>
                {award.organization}
              </p>
              <p className="award-period" style={{
                fontSize: '0.8rem',
                color: '#808080',
                marginBottom: '0.5rem'
              }}>
                {award.period}
              </p>
              {award.verificationLink && (
                <a
                  href={award.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="netflix-button secondary-button verify-button"
                  style={{
                    fontSize: '0.8rem',
                    padding: '4px 8px',
                    marginTop: '8px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#E50914',
                    border: '1px solid #E50914',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span>Verify</span>
                  <span style={{ fontSize: '0.7rem' }}></span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
