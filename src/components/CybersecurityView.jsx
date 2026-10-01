import React from 'react';
import Navbar from './Navbar';
import './CybersecurityView.css';

const contactInfo = {
  email: 'jdhanush213@gmail.com',
  phone: '+918217471928',
  location: 'Bengaluru, Karnataka, India',
  linkedin: 'https://www.linkedin.com/in/dhanush-jagadeesh/',
  github: 'https://github.com/dhanushj213',
  dob: 'January 2nd, 2003',
  resume: 'https://drive.google.com/file/d/1tqq1up0lBEt9R5qRmbRKn-FzGjVlfRvP/view?usp=drive_link'
};

const CybersecurityView = ({ onBack }) => {
  return (
    <div className="cybersecurity-view">
      {/* Background Video */}
      <div className="video-background">
        <video className="background-video" autoPlay muted loop playsInline>
          <source src="/background-video.mp4" type="video/mp4" />
          <div className="video-fallback"></div>
        </video>
        <div className="video-overlay"></div>
      </div>

      <Navbar onBackToProfile={onBack} />

      <div className="cyber-content">
        <div className="cyber-hero">
          <h1 className="cyber-title">
            Cybersecurity Analyst
          </h1>
          <p className="cyber-subtitle">
            Security-focused portfolio highlighting penetration testing, threat analysis, and defensive security expertise
          </p>
        </div>

        {/* Security Domains */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="section-title">
            Security Domains
          </h2>

          <div className="domains-grid">
            <div className="cyber-card">
              <h3 className="card-title">
                Offensive Security
              </h3>
              <p className="card-text">
                Penetration testing, vulnerability assessment, exploit development, and red team operations
              </p>
            </div>

            <div className="cyber-card">
              <h3 className="card-title">
                Defensive Security
              </h3>
              <p className="card-text">
                Security monitoring, incident response, threat hunting, and security architecture design
              </p>
            </div>

            <div className="cyber-card">
              <h3 className="card-title">
                Cloud Security
              </h3>
              <p className="card-text">
                AWS security, container security, IAM, compliance frameworks, and secure cloud architecture
              </p>
            </div>
          </div>

          {/* Security Tools & Technologies */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 className="section-title">
              Security Tools & Technologies
            </h3>
            <div className="tools-grid">
              {[
                'Burp Suite', 'Metasploit', 'Wireshark', 'Nmap', 'Nessus',
                'SIEM Tools', 'ELK Stack', 'Snort', 'OSSEC', 'AWS Security',
                'Docker Security', 'Kubernetes Security', 'Python', 'Bash'
              ].map((tool, index) => (
                <div key={index} className="tool-item">
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Research & Conference Achievement */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 className="section-title">
              Research & Conference Achievement
            </h3>
            <div className="cyber-card" style={{ borderLeft: '4px solid #00ff88' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h4 className="card-title" style={{ color: '#00ff88' }}>
                  4th Edition of the International Conference on Networks, Multimedia, and Information Technology (NMITCON 2026)
                </h4>
                <span style={{ backgroundColor: 'rgba(0, 255, 136, 0.15)', color: '#00ff88', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  🏆 Best Research Paper & Best Paper Presenter
                </span>
              </div>
              <p className="card-text" style={{ marginBottom: '0.75rem', color: '#e5e5e5' }}>
                Paper ID 3111: "Neuromorphic Multi-Modal Fake Media Detection System using Spiking Neural Networks with AI Content Identification and News Verification"
              </p>
              <div style={{ fontSize: '0.85rem', color: '#888' }}>
                <strong>Host:</strong> Nitte Meenakshi Institute of Technology (NMIT), Bengaluru • <strong>Dates:</strong> September 24–25, 2026 • AICTE-sponsored, technically co-sponsored by IEEE Bangalore Section & IEEE Communications Society. (Presented — IEEE Xplore publication pending).
              </div>
            </div>
          </div>

          {/* Security Projects */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 className="section-title">
              Featured Security & Intelligence Projects
            </h3>
            <div className="projects-grid">
              <div className="cyber-card">
                <h4 className="card-title">
                  Neuromorphic Multi-Modal Fake Media Detection System
                </h4>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  Multi-modal AI and cybersecurity system using neuromorphic computing and event-driven Spiking Neural Networks to detect deepfakes, synthetic artifacts, manipulated media, and unverified news.
                </p>
                <div style={{ fontSize: '0.9rem', color: '#888' }}>
                  <strong>Technologies:</strong> Python, PyTorch, snnTorch, Spiking Neural Networks, Multi-Modal AI, AWS EC2, TenSEAL
                </div>
              </div>

              <div className="cyber-card">
                <h4 className="card-title">
                  HoneyChain: IoT Honeypot with Blockchain Intelligence
                </h4>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  Built distributed IoT honeypot network using ESP32 devices to emulate vulnerable IoT devices. Captured real-time attack vectors with 85% classification accuracy and blockchain-verified tamper-proof logging.
                </p>
                <div style={{ fontSize: '0.9rem', color: '#888' }}>
                  <strong>Technologies:</strong> ESP32, Python, TensorFlow, Blockchain, Threat Pattern Analysis
                </div>
              </div>

              <div className="cyber-card">
                <h4 className="card-title">
                  CryptaNet: Privacy-Preserving AI Anomaly Detection
                </h4>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  Secure supply chain monitoring system using Hyperledger Fabric permissioned blockchain with Isolation Forest ML anomaly detection and SHAP-based explainable AI layer with AES/SHA-256 cryptography.
                </p>
                <div style={{ fontSize: '0.9rem', color: '#888' }}>
                  <strong>Technologies:</strong> Hyperledger Fabric, Python/Flask, React.js, Go Smart Contracts, AES, SHA-256
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="cyber-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3 className="section-title" style={{ marginBottom: '1rem', color: '#00ff88' }}>
              Contact for Security Opportunities
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              <div>
                <strong style={{ color: '#FFFFFF' }}>Email:</strong>
                <p style={{ color: '#e5e5e5', margin: '0.5rem 0' }}>{contactInfo.email}</p>
              </div>
              <div>
                <strong style={{ color: '#FFFFFF' }}>Phone:</strong>
                <p style={{ color: '#e5e5e5', margin: '0.5rem 0' }}>{contactInfo.phone}</p>
              </div>
              <div>
                <strong style={{ color: '#FFFFFF' }}>LinkedIn:</strong>
                <p style={{ color: '#e5e5e5', margin: '0.5rem 0' }}>
                  <a href={contactInfo.linkedin} style={{ color: '#00ff88', textDecoration: 'none' }}>
                    Security Professional Profile
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityView;
