import React from 'react';

const ScrollingGallery = ({ items, title = "Gallery" }) => {
    return (
        <section style={{
            padding: '4rem 0',
            backgroundColor: '#141414',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.8rem',
                marginBottom: '2rem',
                color: '#FFFFFF',
                paddingLeft: '4%',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>
                {title}
            </h2>

            <div className="marquee-container" style={{
                width: '100%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                position: 'relative'
            }}>
                <div className="marquee-content" style={{
                    display: 'inline-flex',
                    gap: '1rem',
                    animation: 'scroll 60s linear infinite' // Long duration for many images
                }}>
                    {/* Render items twice to create seamless loop */}
                    {[...items, ...items].map((src, index) => (
                        <div
                            key={index}
                            style={{
                                width: '300px',
                                height: '200px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                flexShrink: 0,
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: '#222'
                            }}
                        >
                            <img
                                src={src}
                                alt={`Gallery Item ${index}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default ScrollingGallery;
