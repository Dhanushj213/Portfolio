import React from 'react';

const Languages = () => {
  const languages = [
    { name: 'English', proficiency: 'Fluent', level: 98 },
    { name: 'Kannada', proficiency: 'Native', level: 100 },
    { name: 'Hindi', proficiency: 'Professional', level: 85 }
  ];

  return (
    <section className="content-row languages-section" style={{
      padding: '2rem 4%',
      backgroundColor: '#141414'
    }}>
      <h2 className="row-title" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.8rem',
        marginBottom: '1.5rem',
        color: '#FFFFFF'
      }}>
        Languages
      </h2>
      <div className="languages-container" style={{
        width: '100%'
      }}>
        {languages.map((language, index) => (
          <div key={index} className="language-item" style={{
            marginBottom: '1.5rem',
            backgroundColor: '#181818',
            borderRadius: '4px',
            padding: '1rem',
            transition: 'transform 0.3s ease'
          }}>
            <div className="language-header" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem'
            }}>
              <div className="language-info">
                <h3 className="language-name" style={{
                  color: '#FFFFFF',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  margin: 0
                }}>
                  {language.name}
                </h3>
                <p className="language-proficiency" style={{
                  color: '#E50914',
                  fontSize: '0.9rem',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  {language.proficiency}
                </p>
              </div>
              <div className="language-percentage" style={{
                color: '#e5e5e5',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                {language.level}%
              </div>
            </div>
            <div className="language-bar-container" style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#333',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div
                className="language-bar"
                style={{
                  height: '100%',
                  backgroundColor: '#E50914',
                  borderRadius: '4px',
                  width: '0%',
                  transition: 'width 2s ease-in-out',
                  animation: `fillBar${index} 2s ease-in-out forwards`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fillBar0 {
          from { width: 0%; }
          to { width: 95%; }
        }
        @keyframes fillBar1 {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes fillBar2 {
          from { width: 0%; }
          to { width: 85%; }
        }
      `}</style>
    </section>
  );
};

export default Languages;
