import React from 'react';

const ScrollingGallery = ({ items, title = "Gallery" }) => {
    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    // Memoize the shuffled items so they don't re-shuffle on every render, but only when items prop changes
    const shuffledItems = React.useMemo(() => shuffleArray(items), [items]);

    return (
        <section style={{
            padding: '4rem 0',
            backgroundColor: '#141414',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(229, 9, 20, 0.2) 0%, rgba(20, 20, 20, 0) 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.8rem',
                marginBottom: '2rem',
                color: '#FFFFFF',
                paddingLeft: '4%',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative', // Ensure above glow
                zIndex: 1
            }}>
                {title}
            </h2>

            <div className="marquee-container" style={{
                width: '100%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                position: 'relative',
                zIndex: 1
            }}>
                <div className="marquee-content" style={{
                    display: 'inline-flex',
                    gap: '1rem',
                    animation: 'scroll 60s linear infinite' // Long duration for many images
                }}>
                    {/* Render items twice to create seamless loop */}
                    {[...shuffledItems, ...shuffledItems].map((src, index) => (
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
                                    objectFit: 'contain'
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
