import React, { useState, useRef, useEffect } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  // Gallery items: images only
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
  ];
  // Carousel logic for looping
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % galleryItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [galleryItems.length]);

  // Arrow navigation
  const goLeft = () => setActiveIndex(prev => (prev - 1 + galleryItems.length) % galleryItems.length);
  const goRight = () => setActiveIndex(prev => (prev + 1) % galleryItems.length);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % galleryItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [galleryItems.length]);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  // Only show one image at a time
  const visibleItem = galleryItems[currentIndex];

  return (
    <section className="content-row gallery-section" style={{
      padding: '2rem 4%',
      backgroundColor: '#141414',
      position: 'relative',
    }}>
      <h2 className="row-title" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.8rem',
        marginBottom: '1rem',
        color: '#FFFFFF'
      }}>
        Gallery
      </h2>

      {/* Carousel with Embossing Animation and Arrows */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        height: '60vh',
        background: '#181818',
        borderRadius: '2rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        overflow: 'hidden',
      }}>
        {/* Left Arrow */}
        <button
          onClick={goLeft}
          style={{
            position: 'absolute',
            left: '2%',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.2)',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '2rem',
            zIndex: 10,
            cursor: 'pointer',
            opacity: 0.7,
            transition: 'opacity 0.2s',
          }}
        >
          &#8249;
        </button>
        {/* Image Card with Embossing Animation */}
        <div
          className="gallery-card"
          style={{
            width: '60vw',
            maxWidth: '600px',
            height: '60vh',
            borderRadius: '2rem',
            background: '#222',
            boxShadow: '0 16px 48px rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            animation: 'emboss 1.5s infinite alternate',
          }}
        >
          <img
            src={galleryItems[activeIndex].src}
            alt={galleryItems[activeIndex].alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: '2rem',
              background: '#181818',
              boxShadow: '0 0 32px 8px #000',
              display: 'block',
            }}
          />
        </div>
        {/* Right Arrow */}
        <button
          onClick={goRight}
          style={{
            position: 'absolute',
            right: '2%',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.2)',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '2rem',
            zIndex: 10,
            cursor: 'pointer',
            opacity: 0.7,
            transition: 'opacity 0.2s',
          }}
        >
          &#8250;
        </button>
      </div>

      {/* Embossing Animation Keyframes */}
      <style>{`
        @keyframes emboss {
          0% { box-shadow: 0 16px 48px rgba(0,0,0,0.8), 0 0 32px 8px #000; transform: scale(1); }
          100% { box-shadow: 0 32px 64px rgba(0,0,0,1), 0 0 48px 16px #000; transform: scale(1.03); }
        }
      `}</style>

      {/* Gallery Modal */}
      {showModal && selectedImage && (
        <div className="modal-backdrop" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 6000,
          padding: '2rem'
        }} onClick={closeModal}>
          <div className="modal-content" style={{
            backgroundColor: '#181818',
            borderRadius: '16px',
            width: '90%',
            maxWidth: '3800px',
            maxHeight: '290vh',
            overflowY: 'auto',
            position: 'relative'
          }} onClick={e => e.stopPropagation()}>
            <button
              className="modal-close"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 10
              }}
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="modal-body" style={{
              padding: '2rem'
            }}>
              <div style={{
                width: '100%',
                height: '400px',
                backgroundColor: '#333',
                borderRadius: '4px',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E50914',
                fontSize: '3rem',
                overflow: 'hidden'
              }}>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <h2 style={{
                color: '#FFFFFF',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                fontFamily: "'Bebas Neue', sans-serif",
                textAlign: 'center'
              }}>
                {selectedImage.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
