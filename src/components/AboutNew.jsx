import React from 'react';
import { motion } from 'framer-motion';

const AboutNew = () => {
    return (
        <section
            style={{
                position: 'relative',
                zIndex: 20,
                backgroundColor: '#141414', // Match background
                padding: '4rem 5%',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr', // 1/3 - 2/3 split
                    gap: '4rem',
                    maxWidth: '1400px',
                    width: '100%',
                    alignItems: 'center'
                }}
                className="about-grid" // for media query hooks if needed
            >
                {/* Left Column: Image (1/3) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{
                        position: 'relative',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    <img
                        src="/profile-picture.png"
                        alt="Dhanush J"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            objectFit: 'cover'
                        }}
                    />
                    {/* Glass Overlay on Image */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '2rem'
                    }}>
                        <h3 style={{
                            color: 'white',
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: '2rem',
                            letterSpacing: '2px'
                        }}>
                            DHANUSH J
                        </h3>
                    </div>
                </motion.div>

                {/* Right Column: Text (2/3) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '24px',
                        padding: '3rem',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                    }}
                >
                    <h2 style={{
                        color: '#E50914', // Netflix Red
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '4rem',
                        lineHeight: '1',
                        marginBottom: '1.5rem',
                        letterSpacing: '1px'
                    }}>
                        THE DEVELOPER
                    </h2>

                    <div style={{
                        color: '#e5e5e5',
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        fontFamily: 'sans-serif',
                        fontWeight: '300',
                        textAlign: 'justify',
                        hyphens: 'auto'
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I'm a Computer Science Engineer with experience across artificial intelligence and machine learning, intelligent systems, software engineering, cloud and data technologies, cybersecurity, and research. I enjoy building practical, technology-driven solutions that combine software engineering, intelligent systems, and emerging technologies.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Through academic, research, internship, and project-based experience, I've worked on systems spanning AI/ML, full-stack development, cybersecurity, blockchain, cloud technologies, and intelligent computing. My projects include CryptaNet, HoneyChain, and a Neuromorphic Multi-Modal Fake Media Detection System using Spiking Neural Networks for AI content identification and media analysis.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            My work also extends into research, where I explore the application of intelligent and emerging technologies to real-world problems. I presented my research at <a href="#research" style={{ color: '#E50914', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid rgba(229, 9, 20, 0.4)', transition: 'border-color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.borderBottomColor = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.borderBottomColor = 'rgba(229, 9, 20, 0.4)'}>NMITCON 2026</a> and received recognition for my research and presentation. My research portfolio includes work involving neuromorphic computing, AI-driven systems, and multi-modal content analysis.
                        </p>
                        <p style={{ color: '#E50914', fontWeight: '500' }}>
                            I'm interested in opportunities across software engineering, AI/ML, intelligent systems, cloud technologies, cybersecurity, and research, where I can build secure, scalable, and innovative technology solutions.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Responsive Styles Injection */}
            <style>{`
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
        </section>
    );
};

export default AboutNew;
