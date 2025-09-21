import React from 'react';

const HeroSection = ({ aboutContent }) => {
  return (
    <section id="hero" className="hero" style={{
      paddingTop: '28rem',
      paddingBottom: '3rem',
      paddingLeft: '4%',
      paddingRight: '4%',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: '#141414',
      overflow: 'hidden'
    }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.25
        }}
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Hero Content */}
      <div className="hero-content" style={{
        maxWidth: '800px',
        zIndex: 2,
        position: 'relative'
      }}>
        <h1 className="hero-title" style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '3.5rem',
          marginBottom: '1rem',
          color: '#FFFFFF',
          lineHeight: '1.2'
        }}>
          Dhanush J
        </h1>
        <p className="hero-subtitle" style={{
          fontSize: '1.3rem',
          marginBottom: '2rem',
          color: '#e5e5e5',
          lineHeight: '1.6'
        }}>
          {aboutContent.description}
        </p>
        <div className="hero-buttons" style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          <a
            href="https://drive.google.com/file/d/1E6HM8pHJJhxsQgzSjMN0gL-IG6SREJA_/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="netflix-button primary-button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 24px',
              borderRadius: '4px',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              backgroundColor: '#E50914',
              color: 'white'
            }}
          >
            View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/dhanush-j-a976ab26b"
            target="_blank"
            rel="noopener noreferrer"
            className="netflix-button secondary-button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 24px',
              borderRadius: '4px',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              backgroundColor: 'rgba(109, 109, 110, 0.7)',
              color: 'white'
            }}
          >
            LinkedIn
          </a>


        </div>

  {/* About Me Section */}
  </div>
      <section className="content-row" style={{
        padding: '2rem 3%',
        backgroundColor: '#141414',
        marginTop: '3rem',
        width: '100%'
      }}>
        <h2 className="row-title" style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '1.8rem',
          marginBottom: '1rem',
          color: '#FFFFFF',
          marginLeft: '-4%'
        }}>
          ABOUT ME
        </h2>

        {/* About Me Content */}
  <div className="about-me-section" style={{
          backgroundColor: 'rgba(20, 20, 20, 0.8)',
          padding: '3rem 4%',
          borderRadius: '8px',
          position: 'relative',
          display: 'flex',
          gap: '2rem',
          alignItems: 'flex-start',
          width: '100%',
          transition: 'all 0.3s ease',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(229, 9, 20, 0.1), 0 0 20px rgba(229, 9, 20, 0.05)',
          border: '1px solid rgba(229, 9, 20, 0.2)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4), 0 6px 20px rgba(229, 9, 20, 0.2), 0 0 30px rgba(229, 9, 20, 0.1)';
          e.currentTarget.style.border = '1px solid rgba(229, 9, 20, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(229, 9, 20, 0.1), 0 0 20px rgba(229, 9, 20, 0.05)';
          e.currentTarget.style.border = '1px solid rgba(229, 9, 20, 0.2)';
        }}>
          <div className="about-me-content" style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '2.5rem',
            justifyContent: 'flex-start',
          }}>
            <div style={{
              flexShrink: 0,
              width: '260px',
              height: '320px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 0,
            }}>
              <img
                src="/profile-picture.png"
                alt="Profile Picture"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  border: '2px solid #E50914',
                  boxShadow: '0 0 15px rgba(229, 9, 20, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.border = '2px solid #FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.border = '2px solid #E50914';
                }}
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
              <h2 className="about-title" style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '2.5rem',
                color: '#E50914',
                textAlign: 'left',
                marginBottom: '1.5rem',
                textShadow: '0 0 10px rgba(229, 9, 20, 0.5)'
              }}>
                THE DEVELOPER
              </h2>
              <p className="about-description" style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#e5e5e5',
                textAlign: 'justify',
                margin: 0,
                maxWidth: '100%',
              }}>
                Computer Science Engineering student specializing in Cybersecurity with hands-on experience in full-stack web development, cloud computing (AWS), machine learning, and secure software design. Proficient in C, C++, Python, Java, JavaScript, React.js, Node.js, MongoDB, MySQL, and Docker. Completed internships focusing on web application security, penetration testing, and UI/UX development. Proven ability to build scalable, secure applications using modern frameworks and tools. Strong foundation in data structures, operating systems, and network security. Seeking to apply technical skills and project experience in dynamic software or cybersecurity engineering roles. Passionate about leveraging AI and blockchain to develop innovative, real-world solutions. Recognized for leadership, adaptability, and consistently delivering high-impact results in collaborative environments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
