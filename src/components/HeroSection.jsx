import React from 'react';

const HeroSection = () => {
    return (
        <div className="hero-container" style={{
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
                    poster="/wallpaper.png" // Fallback image
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
                paddingBottom: 'calc(5% + var(--safe-area-bottom, 20px))', // Safe area padding
                maxWidth: '1200px'
            }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 8vw, 6rem)', // Adjusted clamp
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    letterSpacing: '-0.02em',
                    color: 'white',
                    fontFamily: "'Bebas Neue', sans-serif",
                    lineHeight: '1',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)' // Better readability
                }}>
                    DHANUSH J
                </h1>

                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                    color: '#e5e5e5',
                    marginBottom: '2rem',
                    maxWidth: '800px',
                    lineHeight: '1.6',
                    textShadow: '0 1px 4px rgba(0,0,0,0.8)' // Contrast for video
                }}>
                    Computer Science Engineering student specializing in Cybersecurity with a passion for developing secure and innovative solutions.
                </p>

                {/* Featured Research Recognition Pill */}
                <a
                    href="#research"
                    onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById('research');
                        if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                        } else {
                            window.location.href = '/research';
                        }
                    }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '8px 18px',
                        backgroundColor: 'rgba(229, 9, 20, 0.15)',
                        border: '1px solid rgba(229, 9, 20, 0.45)',
                        borderRadius: '999px',
                        color: '#ffffff',
                        fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                        fontWeight: '700',
                        marginBottom: '1.25rem',
                        width: 'fit-content',
                        textDecoration: 'none',
                        boxShadow: '0 0 20px rgba(229, 9, 20, 0.25)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(229, 9, 20, 0.3)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(229, 9, 20, 0.15)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    <span style={{ fontSize: '1.1rem' }}>🏆</span>
                    <span>Best Paper Presenter &bull; NMITCON 2026</span>
                    <span style={{ color: '#E50914', fontSize: '1rem' }}>&darr;</span>
                </a>

                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    flexWrap: 'wrap' // Allow wrapping on small screens
                }}>
                    <a
                        href="https://drive.google.com/file/d/1tqq1up0lBEt9R5qRmbRKn-FzGjVlfRvP/view?usp=drive_link"
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
                            cursor: 'pointer',
                            minWidth: '44px', // Touch target
                            minHeight: '44px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#b00710'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#E50914'}
                    >
                        View Resume
                    </a>

                    <a
                        href="https://www.linkedin.com/in/dhanush-jagadeesh/"
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
                            cursor: 'pointer',
                            minWidth: '44px',
                            minHeight: '44px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                    >
                        LinkedIn
                    </a>
                </div>
            </div>

            <style>{`
                @media (max-width: 767px) {
                    .hero-container {
                        height: 85vh !important; /* App view height */
                    }
                }
            `}</style>
        </div>
    );
};

export default HeroSection;
