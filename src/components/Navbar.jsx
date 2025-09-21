import React, { useState, useEffect } from 'react';

const Navbar = (props) => {
  const [scrolled, setScrolled] = useState(false);

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
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '0.5rem 3%',
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
      <div className="nav-links" style={{
        display: 'flex',
        gap: '2rem',
        marginLeft: 'auto',
        marginRight: '2px',
        alignItems: 'center'
      }}>
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
    </nav>
  );
};

export default Navbar;
