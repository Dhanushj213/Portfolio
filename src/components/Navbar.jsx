import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1rem 4%',
      paddingTop: 'calc(1rem + var(--safe-area-top, 0px))', // Safe area padding
      background: scrolled
        ? 'linear-gradient(to bottom, rgba(20,20,20,0.95) 0%, rgba(20,20,20,0.9) 100%)'
        : 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
      transition: 'background-color 0.3s ease',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div className="logo" style={{
        cursor: 'pointer'
      }} onClick={() => scrollToSection('hero')}>
        <img
          src="/header.png"
          alt="DHANUSH J"
          style={{
            height: '3.5rem',
            width: 'auto',
            maxWidth: '200px'
          }}
        />
      </div>
      <div className="nav-links desktop-menu" style={{
        display: 'flex',
        gap: '2rem',
        marginLeft: 'auto',
        marginRight: '2px',
        alignItems: 'center'
      }}>
        <style>{`
          @media (max-width: 768px) {
            .desktop-menu { display: none !important; }
            .mobile-menu-btn { display: block !important; }
          }
          @media (min-width: 769px) {
            .mobile-menu-btn { display: none !important; }
          }
        `}</style>
        <button
          className="nav-link"
          onClick={() => scrollToSection('hero')}
          style={{
            color: '#e5e5e5',
            background: 'none',
            border: 'none',
            textDecoration: 'none',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
            fontFamily: 'inherit',
            marginRight: '0.5rem'
          }}
        >
          Home
        </button>
        <button
          className="nav-link"
          onClick={props.onBackToProfile}
          style={{
            color: '#E50914',
            background: 'none',
            border: 'none',
            textDecoration: 'none',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
            fontFamily: 'inherit',
            marginRight: '1.5rem',
            fontWeight: 'bold'
          }}
        >
          &#8592; Back to Profile
        </button>
        {['Skills', 'Experience', 'Projects'].map((link) => (
          <button
            key={link}
            className="nav-link"
            onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
            style={{
              color: '#e5e5e5',
              background: 'none',
              border: 'none',
              textDecoration: 'none',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
              fontFamily: 'inherit'
            }}
          >
            {link}
          </button>
        ))}
        <button
          className="nav-link"
          onClick={() => scrollToSection('contactfooter')}
          style={{
            color: '#e5e5e5',
            background: 'none',
            border: 'none',
            textDecoration: 'none',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
            fontFamily: 'inherit'
          }}
        >
          Contact
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={toggleMenu}
        style={{
          background: 'none',
          border: 'none',
          color: '#ffffff',
          fontSize: '1.5rem',
          cursor: 'pointer',
          zIndex: 1001,
          minWidth: '44px', // Minimum touch target
          minHeight: '44px', // Minimum touch target
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.95)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          gap: '2rem'
        }}>
          <button
            onClick={() => scrollToSection('hero')}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              fontSize: '1.5rem',
              cursor: 'pointer',
              fontFamily: 'Bebas Neue, sans-serif'
            }}
          >
            Home
          </button>
          <button
            onClick={props.onBackToProfile}
            style={{
              background: 'none',
              border: 'none',
              color: '#E50914',
              fontSize: '1.5rem',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontFamily: 'Bebas Neue, sans-serif'
            }}
          >
            &#8592; Back to Profile
          </button>
          {['Skills', 'Experience', 'Projects'].map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
              style={{
                background: 'none',
                border: 'none',
                color: '#e5e5e5',
                fontSize: '1.5rem',
                cursor: 'pointer',
                fontFamily: 'Bebas Neue, sans-serif'
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contactfooter')}
            style={{
              background: 'none',
              border: 'none',
              color: '#e5e5e5',
              fontSize: '1.5rem',
              cursor: 'pointer',
              fontFamily: 'Bebas Neue, sans-serif'
            }}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
