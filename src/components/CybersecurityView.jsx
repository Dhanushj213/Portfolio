import React from 'react';
import Navbar from './Navbar';

const contactInfo = {
  email: 'jdhanush213@gmail.com',
  phone: '+918217471928',
  location: 'Bengaluru, Karnataka, India',
  linkedin: 'https://www.linkedin.com/in/dhanush-j-a976ab26b',
  github: 'https://github.com/dhanushj213',
  dob: 'January 2nd, 2003'
};

const CybersecurityView = () => {
  return (
    <div className="app" style={{ backgroundColor: '#141414', minHeight: '100vh' }}>
      {/* Background Video */}
      <div className="video-background">
        <video className="background-video" autoPlay muted loop>
          <source src="/background-video.mp4" type="video/mp4" />
          <div className="video-fallback" style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, #141414, #1a1a1a, #141414)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 8s ease infinite'
          }}></div>
        </video>
        <div className="video-overlay"></div>
      </div>

      <Navbar />
      <div style={{ padding: '2rem 4%', color: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '3rem',
            marginBottom: '2rem',
            color: '#00ff88'
          }}>
            Cybersecurity Analyst
          </h1>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            color: '#e5e5e5',
            lineHeight: '1.6'
          }}>
            Security-focused portfolio highlighting penetration testing, threat analysis, and defensive security expertise
          </p>
        </div>

        {/* Security Domains */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '2rem',
            marginBottom: '1.5rem',
            color: '#FFFFFF',
            textAlign: 'center'
          }}>
            Security Domains
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              backgroundColor: '#181818',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'center',
              border: '2px solid #00ff88'
            }}>
              <h3 style={{ color: '#00ff88', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Offensive Security
              </h3>
              <p style={{ color: '#e5e5e5', lineHeight: '1.6' }}>
                Penetration testing, vulnerability assessment, exploit development, and red team operations
              </p>
            </div>

            <div style={{
              backgroundColor: '#181818',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'center',
              border: '2px solid #00ff88'
            }}>
              <h3 style={{ color: '#00ff88', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Defensive Security
              </h3>
              <p style={{ color: '#e5e5e5', lineHeight: '1.6' }}>
                Security monitoring, incident response, threat hunting, and security architecture design
              </p>
            </div>

            <div style={{
              backgroundColor: '#181818',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'center',
              border: '2px solid #00ff88'
            }}>
              <h3 style={{ color: '#00ff88', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Cloud Security
              </h3>
              <p style={{ color: '#e5e5e5', lineHeight: '1.6' }}>
                AWS security, container security, IAM, compliance frameworks, and secure cloud architecture
              </p>
            </div>
          </div>

          {/* Security Tools & Technologies */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              color: '#FFFFFF',
              textAlign: 'center'
            }}>
              Security Tools & Technologies
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {[
                'Burp Suite', 'Metasploit', 'Wireshark', 'Nmap', 'Nessus',
                'SIEM Tools', 'ELK Stack', 'Snort', 'OSSEC', 'AWS Security',
                'Docker Security', 'Kubernetes Security', 'Python', 'Bash'
              ].map((tool, index) => (
                <div key={index} style={{
                  backgroundColor: 'rgba(0, 255, 136, 0.1)',
                  padding: '0.8rem 1rem',
                  borderRadius: '4px',
                  textAlign: 'center',
                  border: '1px solid #00ff88',
                  color: '#00ff88',
                  fontSize: '0.9rem'
                }}>
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Security Projects */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              color: '#FFFFFF',
              textAlign: 'center'
            }}>
              Security Projects
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              <div style={{
                backgroundColor: '#181818',
                padding: '2rem',
                borderRadius: '8px',
                border: '2px solid #00ff88'
              }}>
                <h4 style={{ color: '#00ff88', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Web Application Security Testing
                </h4>
                <p style={{ color: '#e5e5e5', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Comprehensive security assessment of web applications including SQL injection, XSS, CSRF, and authentication bypass testing.
                </p>
                <div style={{ fontSize: '0.9rem', color: '#888' }}>
                  <strong>Technologies:</strong> OWASP ZAP, SQLMap, Burp Suite
                </div>
              </div>

              <div style={{
                backgroundColor: '#181818',
                padding: '2rem',
                borderRadius: '8px',
                border: '2px solid #00ff88'
              }}>
                <h4 style={{ color: '#00ff88', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Network Security Analysis
                </h4>
                <p style={{ color: '#e5e5e5', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Network traffic analysis, intrusion detection system implementation, and firewall rule optimization.
                </p>
                <div style={{ fontSize: '0.9rem', color: '#888' }}>
                  <strong>Technologies:</strong> Wireshark, Snort, pfSense
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div style={{
            backgroundColor: '#181818',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center',
            border: '2px solid #00ff88'
          }}>
            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              color: '#00ff88'
            }}>
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
