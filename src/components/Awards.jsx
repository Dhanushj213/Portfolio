import React from 'react';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: 'Star Performer Award',
      organization: 'OASIS INFOBYTES Internship',
      period: 'January 2025 - February 2025',
      verificationLink: 'https://drive.google.com/file/d/1CrvlL92HxnYNfWfEv18i0y3bm5gDZdYW/view'
    },
    {
      id: 2,
      title: 'India Book of Records',
      organization: 'World’s Largest and Fastest Painting',
      period: 'Record Holder',
      verificationLink: null
    },
    {
      id: 3,
      title: 'State Award',
      organization: 'Visual Art',
      period: 'Winner',
      verificationLink: null
    },
    {
      id: 4,
      title: 'AWS Academy Graduate',
      organization: 'AWS Academy Cloud Foundations',
      period: '2025',
      verificationLink: null
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
        gap: '1.5rem'
      }}>
        {awards.map(award => (
          <div key={award.id} className="award-item" style={{
            display: 'flex',
            flexDirection: 'column', // Stack vertically
            alignItems: 'center',     // Center horizontally
            textAlign: 'center',      // Center text
            backgroundColor: 'rgba(255, 255, 255, 0.05)', // Glass base
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.4s ease',
            cursor: 'default',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="award-badge" style={{
              marginBottom: '1rem',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: 'rgba(229, 9, 20, 0.1)', // Subtle red background
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(229, 9, 20, 0.3)'
            }}>
              <div className="award-icon" style={{
                color: '#E50914',
                fontSize: '1.8rem'
              }}>
                🏆
              </div>
            </div>
            <div className="award-details" style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <h3 className="award-title" style={{
                fontWeight: '700',
                fontSize: '1.2rem',
                color: '#FFFFFF',
                marginBottom: '0.5rem',
                letterSpacing: '0.5px'
              }}>
                {award.title}
              </h3>
              <p className="award-organization" style={{
                fontWeight: '600',
                color: '#E50914',
                fontSize: '1rem',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {award.organization}
              </p>
              <p className="award-period" style={{
                fontSize: '0.9rem',
                color: '#9CA3AF',
                marginBottom: '1.5rem'
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
                    fontSize: '1rem',
                    padding: '10px 0',
                    width: '100%',
                    maxWidth: '300px', // Limit button width for aesthetics
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#E50914',
                    border: 'none',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                  }}
                >
                  <span>Verify Certificate</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .award-item:hover {
          transform: translateY(-5px);
          background-color: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(229, 9, 20, 0.5) !important;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2), 0 0 20px rgba(229, 9, 20, 0.2) !important;
        }
        
        .verify-button:hover {
           background-color: #f40612 !important;
           transform: scale(1.02);
           box-shadow: 0 6px 12px rgba(229, 9, 20, 0.4) !important;
        }
      `}</style>
    </section>
  );
};

export default Awards;
