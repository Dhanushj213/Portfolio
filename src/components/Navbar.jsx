import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const getScrollTop = () => {
      const appEl = document.querySelector('.app');
      return (
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        (appEl ? appEl.scrollTop : 0) ||
        0
      );
    };

    const handleScroll = () => {
      const top = getScrollTop();
      setScrolled(top > 15);
    };

    window.addEventListener('scroll', handleScroll, { capture: true, passive: true });
    const appEl = document.querySelector('.app');
    if (appEl) {
      appEl.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Check immediately and on timers to catch initial route or hash scroll
    handleScroll();
    const t1 = setTimeout(handleScroll, 50);
    const t2 = setTimeout(handleScroll, 250);

    return () => {
      window.removeEventListener('scroll', handleScroll, { capture: true });
      if (appEl) {
        appEl.removeEventListener('scroll', handleScroll);
      }
      clearTimeout(t1);
      clearTimeout(t2);
    };
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
      padding: scrolled ? '0.75rem 4%' : '1.15rem 4%',
      paddingTop: `calc(${scrolled ? '0.75rem' : '1.15rem'} + var(--safe-area-top, 0px))`,
      backgroundColor: scrolled ? 'rgba(14, 14, 14, 0.94)' : 'rgba(14, 14, 14, 0.72)',
      backgroundImage: scrolled
        ? 'linear-gradient(to bottom, rgba(14, 14, 14, 0.98) 0%, rgba(20, 20, 20, 0.92) 100%)'
        : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, rgba(14, 14, 14, 0.5) 60%, rgba(14, 14, 14, 0.1) 100%)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderBottom: scrolled
        ? '1px solid rgba(229, 9, 20, 0.3)'
        : '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: scrolled
        ? '0 10px 30px -10px rgba(0, 0, 0, 0.9), 0 0 25px rgba(229, 9, 20, 0.12)'
        : '0 4px 20px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div className="logo" style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
      }} onClick={() => scrollToSection('hero')}>
        <img
          src="/header.png"
          alt="DHANUSH J"
          style={{
            height: scrolled ? '2.8rem' : '3.3rem',
            width: 'auto',
            maxWidth: '200px',
            transition: 'height 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
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
        {['Skills', 'Research', 'Experience', 'Projects'].map((link) => (
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
          {['Skills', 'Research', 'Experience', 'Projects'].map((link) => (
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
