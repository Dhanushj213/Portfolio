import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryItems = [
    { id: 1, src: '/c1.png', alt: 'Certificate 1' },
    { id: 2, src: '/c2.png', alt: 'Certificate 2' },
    { id: 3, src: '/c3.png', alt: 'Certificate 3' },
    { id: 4, src: '/c4.png', alt: 'Certificate 4' },
    { id: 5, src: '/c5.png', alt: 'Certificate 5' },
    { id: 6, src: '/c6.png', alt: 'Certificate 6' },
    { id: 7, src: '/c7.png', alt: 'Certificate 7' },
    { id: 8, src: '/c8.png', alt: 'Certificate 8' },
    { id: 9, src: '/c9.png', alt: 'Certificate 9' },
    { id: 10, src: '/c10.png', alt: 'Certificate 10' },
    { id: 11, src: '/c11.png', alt: 'Certificate 11' },
    { id: 12, src: '/c12.png', alt: 'Certificate 12' },
    { id: 13, src: '/c13.png', alt: 'Certificate 13' },
    { id: 14, src: '/c14.png', alt: 'Certificate 14' },
    { id: 15, src: '/c15.png', alt: 'Digital Forensics with Kali Linux' },
    { id: 16, src: '/c16.png', alt: 'Lanquill Level 2 Certification' },
  ];

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, 2500); // Change every 2.5 seconds
    return () => clearInterval(interval);
  }, [galleryItems.length]);

  const getStyle = (index) => {
    // Calculate distance from active index, handling wrap-around
    const total = galleryItems.length;
    let distance = (index - activeIndex + total) % total;

    // Adjust distance for intuitive left/right logic
    if (distance > total / 2) distance -= total;

    // Determine visibility and styles based on distance
    const isActive = distance === 0;
    const isVisible = Math.abs(distance) <= 2; // Show active + 2 on each side (5 total, fits 3-4 requested)

    if (!isVisible) return { display: 'none' };

    const xOffset = distance * 180; // Increased Overlap factor: 180px shift per item
    const scale = isActive ? 1 : 0.8;
    const zIndex = 10 - Math.abs(distance);
    const blur = isActive ? '0px' : '4px';
    const opacity = isActive ? 1 : 0.6;
    const rotateY = distance * -15; // Subtle 3D rotation

    return {
      transform: `translateX(calc(-50% + ${xOffset}px)) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
      zIndex: zIndex,
      filter: `blur(${blur})`,
      opacity: opacity,
      position: 'absolute',
      left: '50%',
      top: '50%',
      marginTop: '-200px', // Adjusted marginTop for larger height
      transition: 'all 0.5s ease-in-out'
    };
  };

  return (
    <section className="content-row gallery-section" style={{
      padding: '4rem 0',
      backgroundColor: '#141414',
      position: 'relative',
      overflow: 'hidden',
      height: '800px', // Increased Fixed height for the carousel stage
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h2 className="row-title gallery-title" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.8rem',
        marginBottom: '2rem',
        color: '#FFFFFF',
        paddingLeft: '4%',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        position: 'absolute',
        top: '2rem',
        width: '100%',
        zIndex: 20
      }}>
        Certificates Gallery
      </h2>

      <div className="gallery-perspective-container" style={{
        position: 'relative',
        width: '100%',
        height: '500px', // Increased Perspective Container Height
        perspective: '1000px',
      }}>
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            style={getStyle(index)}
            className="gallery-card"
          >
            <div style={{
              width: 'min(500px, 85vw)', // Responsive width
              height: 'min(350px, 60vw)', // Responsive height
              borderRadius: '16px',
              overflow: 'hidden',
              background: '#222',
              border: isActive(index) ? '2px solid #E50914' : '1px solid rgba(255,255,255,0.1)',
              boxShadow: isActive(index) ? '0 10px 30px rgba(229, 9, 20, 0.4)' : '0 5px 15px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '1rem'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  // Helper inside component (moved to getStyle scope for cleanliness in file)
  function isActive(index) {
    const total = galleryItems.length;
    let distance = (index - activeIndex + total) % total;
    if (distance > total / 2) distance -= total;
    return distance === 0;
  }
};

export default Gallery;
