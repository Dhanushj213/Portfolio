import React from 'react';

const CybersecurityAnalystProfile = () => {
  return (
    <section className="cyber-profile" style={{
      background: 'radial-gradient(ellipse at center, #0f0 0%, #0a0a0a 100%)',
      color: '#0f0',
      minHeight: '100vh',
      padding: '4rem 0',
      fontFamily: 'Share Tech Mono, monospace',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Matrix-style animated background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'repeating-linear-gradient(180deg, rgba(0,255,0,0.08) 0px, rgba(0,255,0,0.08) 2px, transparent 2px, transparent 24px)'
      }} />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', background: 'rgba(10,20,10,0.85)', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,255,0,0.15)', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <img src="/profile-picture.png" alt="Cybersecurity Analyst" style={{ width: '180px', borderRadius: '12px', border: '3px solid #0f0', boxShadow: '0 0 20px #0f05' }} />
          <div>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 700, color: '#0f0', marginBottom: '0.5rem', textShadow: '0 0 10px #0f0' }}>Dhanush J</h1>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#0f0', marginBottom: '1.2rem', textShadow: '0 0 6px #0f0' }}>Cybersecurity Analyst</h2>
            <p style={{ fontSize: '1.1rem', color: '#b6ffb6', marginBottom: '1.5rem', fontFamily: 'Share Tech Mono, monospace' }}>
              <span style={{ color: '#0f0', fontWeight: 'bold' }}>&gt; </span>
              Passionate about <span style={{ color: '#b6ffb6' }}>defending digital assets</span> and building secure systems.<br />
              Experienced in <span style={{ color: '#b6ffb6' }}>penetration testing</span>, <span style={{ color: '#b6ffb6' }}>vulnerability assessment</span>, <span style={{ color: '#b6ffb6' }}>network security</span>, and <span style={{ color: '#b6ffb6' }}>secure software development</span>.<br />
              Adept at <span style={{ color: '#b6ffb6' }}>threat modeling</span>, <span style={{ color: '#b6ffb6' }}>incident response</span>, and <span style={{ color: '#b6ffb6' }}>security automation</span>.<br />
              Skilled in <span style={{ color: '#b6ffb6' }}>Python</span>, <span style={{ color: '#b6ffb6' }}>Bash</span>, <span style={{ color: '#b6ffb6' }}>Linux</span>, <span style={{ color: '#b6ffb6' }}>Metasploit</span>, <span style={{ color: '#b6ffb6' }}>Wireshark</span>, and <span style={{ color: '#b6ffb6' }}>cloud security (AWS)</span>.
            </p>
            <a href="mailto:jdhanush213@gmail.com" style={{ color: '#0f0', textDecoration: 'underline', fontWeight: 500 }}>jdhanush213@gmail.com</a>
          </div>
        </div>
        <hr style={{ margin: '2rem 0', borderColor: '#0f03' }} />
        <div>
          <h3 style={{ color: '#0f0', fontSize: '1.4rem', marginBottom: '1rem', textShadow: '0 0 6px #0f0' }}>Key Skills</h3>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.7rem', listStyle: 'none', padding: 0 }}>
            <li style={{ color: '#b6ffb6' }}>Penetration Testing</li>
            <li style={{ color: '#b6ffb6' }}>Network Security</li>
            <li style={{ color: '#b6ffb6' }}>Vulnerability Assessment</li>
            <li style={{ color: '#b6ffb6' }}>Incident Response</li>
            <li style={{ color: '#b6ffb6' }}>Security Automation</li>
            <li style={{ color: '#b6ffb6' }}>Threat Intelligence</li>
            <li style={{ color: '#b6ffb6' }}>Cloud Security (AWS)</li>
            <li style={{ color: '#b6ffb6' }}>Linux & Bash Scripting</li>
            <li style={{ color: '#b6ffb6' }}>Metasploit & Wireshark</li>
            <li style={{ color: '#b6ffb6' }}>Secure Software Development</li>
          </ul>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#0f0', fontSize: '1.4rem', marginBottom: '1rem', textShadow: '0 0 6px #0f0' }}>Certifications</h3>
          <ul style={{ color: '#b6ffb6', fontSize: '1.05rem', paddingLeft: '1.2rem' }}>
            <li>Google Cloud Career Launchpad - Cybersecurity Track</li>
            <li>AWS Academy Graduate - Cloud Foundations</li>
            <li>Infosys Springboard - Machine Learning Fundamentals</li>
            <li>Udemy - Spark SQL & Hadoop for Data Science</li>
          </ul>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#0f0', fontSize: '1.4rem', marginBottom: '1rem', textShadow: '0 0 6px #0f0' }}>Projects</h3>
          <ul style={{ color: '#b6ffb6', fontSize: '1.05rem', paddingLeft: '1.2rem' }}>
            <li>CryptaNet: Privacy-Preserving Explainable AI for Supply Chain Anomaly Detection</li>
            <li>HoneyChain: IoT Honeypot with Blockchain-Verified Threat Intelligence</li>
            <li>Intelligent Driver Monitoring System</li>
            <li>Innovative Web Compiler (TypeScript & React.js)</li>
            <li>Permutation Engine: Multi-Algorithm Solver with 3D Rendering</li>
          </ul>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#0f0', fontSize: '1.4rem', marginBottom: '1rem', textShadow: '0 0 6px #0f0' }}>Contact & Social</h3>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="https://www.linkedin.com/in/dhanush-j-a976ab26b" target="_blank" rel="noopener noreferrer" style={{ color: '#0f0', fontWeight: 500, textShadow: '0 0 6px #0f0' }}>LinkedIn</a>
            <a href="https://github.com/dhanushj213" target="_blank" rel="noopener noreferrer" style={{ color: '#0f0', fontWeight: 500, textShadow: '0 0 6px #0f0' }}>GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityAnalystProfile;
