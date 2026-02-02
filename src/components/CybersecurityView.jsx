import React from 'react';
import Navbar from './Navbar';
import './CybersecurityView.css';

const contactInfo = {
  email: 'jdhanush213@gmail.com',
  phone: '+918217471928',
  location: 'Bengaluru, Karnataka, India',
  linkedin: 'https://www.linkedin.com/in/dhanush-j-a976ab26b',
  github: 'https://github.com/dhanushj213',
  dob: 'January 2nd, 2003'
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

          {/* Security Projects */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 className="section-title">
              Security Projects
            </h3>
            <div className="projects-grid">
              <div className="cyber-card">
                <h4 className="card-title">
                  Web Application Security Testing
                </h4>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  Comprehensive security assessment of web applications including SQL injection, XSS, CSRF, and authentication bypass testing.
                </p>
                <div style={{ fontSize: '0.9rem', color: '#888' }}>
                  <strong>Technologies:</strong> OWASP ZAP, SQLMap, Burp Suite
                </div>
              </div>

              <div className="cyber-card">
                <h4 className="card-title">
                  Network Security Analysis
                </h4>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  Network traffic analysis, intrusion detection system implementation, and firewall rule optimization.
                </p>
                <div style={{ fontSize: '0.9rem', color: '#888' }}>
                  <strong>Technologies:</strong> Wireshark, Snort, pfSense
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
