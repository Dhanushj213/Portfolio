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
                        fontWeight: '300'
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Cybersecurity-focused Computer Science Engineering student (Batch of 2026) specializing in Cybersecurity, with strong expertise in secure software development, penetration testing, cloud security, AI-driven systems, and blockchain-based solutions. Proficient in full-stack development, system design, and DevOps tools, with hands-on experience gained through multiple internships and real-world projects.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Led and developed advanced systems such as <strong>CryptaNet</strong>, a privacy-preserving blockchain-based anomaly detection platform using explainable AI, and <strong>HoneyChain</strong>, an IoT honeypot with blockchain-verified threat intelligence. Recognized for technical excellence and creativity through international and national awards, including the India Book of Records.
                        </p>
                        <p>
                            Actively seeking internship, research, or collaborative opportunities in cybersecurity, cloud-native security, ethical hacking, and intelligent system design.
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
