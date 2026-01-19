import React from 'react';

const HeroSection = () => {
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
            color: 'white',
            backgroundColor: 'black',
            fontFamily: "'Inter', sans-serif"
        }}>
            {/* Background Video Layer */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>
                <video
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/background-video.mp4" type="video/mp4" />
                </video>
                {/* Dark Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                }}></div>
                {/* Bottom Gradient Fade for Seamless Merge */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '150px',
                    background: 'linear-gradient(to bottom, transparent, #141414)',
                    zIndex: 2
                }}></div>
            </div>

            {/* Content Layer */}
            <div style={{
                position: 'relative',
                zIndex: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                height: '100%',
                padding: '0 5% 5% 5%', // Added bottom padding
                maxWidth: '1200px'
            }}>
                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)', // Responsive font size
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    letterSpacing: '-0.02em',
                    color: 'white',
                    fontFamily: "'Bebas Neue', sans-serif",
                    lineHeight: '1'
                }}>
                    DHANUSH J
                </h1>

                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                    color: '#e5e5e5',
                    marginBottom: '2rem',
                    maxWidth: '800px',
                    lineHeight: '1.6'
                }}>
                    Computer Science Engineering student specializing in Cybersecurity with a passion for developing secure and innovative solutions.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center'
                }}>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: '12px 32px',
                            backgroundColor: '#E50914',
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                            transition: 'background-color 0.2s',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#b00710'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#E50914'}
                    >
                        View Resume
                    </a>

                    <a
                        href="https://www.linkedin.com/in/dhanush-j-a976ab26b"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: '12px 32px',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(4px)',
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.2)',
                            transition: 'background-color 0.2s',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
