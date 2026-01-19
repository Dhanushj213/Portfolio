import React, { useState, useEffect, useRef } from 'react';

// ASCII Art for DHANUSH J
const asciiArt = `
  ____  _   _    _   _ _   _ _   _ _   _     _     _   _     _     _ 
 |  _ | | | |  | | | | | | | | | | | | |   | |   | | | |   | |   | |
 | | | | | | |  | |_| | | | | | | | | | |   | |   | | | |   | |   | |
 | |_| | |_| |  |  _  | |_| | |_| | |_| |   | |___| |_| |___| |___| |
 |____/ \\___/   |_| |_|___/ \\___/ \\___/    |_____|___/____/____/ 
`;

const bootLines = [
  'Initializing DHanush-Kernel v2.6... OK',
  'Loading system modules...',
  'Scanning for vulnerabilities... 0 found.',
  'Mounting user filesystems [/root, /usr, /home]...',
  'Welcome to DhanushPortfolio',
  'Lets start with the command "help"',
];

const helpText = [
  'Available commands:',
  'about      - Show about info',
  'skills     - List key skills',
  'projects   - Show projects',
  'certs      - List certifications',
  'experience - Show work experience',
  'education  - Show education',
  'social     - Social links',
  'motivate   - Get a motivational quote',
  'contact    - Contact info',
  'clear      - Clear terminal',
  'help       - Show this help message',
];
const experience = [
  'Octanet Services Pvt. Ltd. - Full-Stack Web Developer Intern (Sep-Nov 2024)',
  'Oasis Infobyte - AICTE OIB-SIP - Web Development & UI/UX Design Intern (Sep-Oct 2024)',
  'CodeVertex - Cybersecurity Intern (Jun-Aug 2024)',
];

const education = [
  'B.E in Computer Science & Engineering with specialization in Cybersecurity, 2022-2026',
  'M.S.Ramaiah Institute of Technology, Bengaluru',
];

const social = [
  'LinkedIn: linkedin.com/in/dhanush-j-a976ab26b',
  'GitHub: github.com/dhanushj213',
  'Twitter: twitter.com/dhanushj213',
];

const motivate = [
  '"Security is not a product, but a process." – Bruce Schneier',
  '"The only way to do great work is to love what you do." – Steve Jobs',
  '"Stay curious. Hack the planet!"',
];

const about = 'Dhanush J is a Cybersecurity Analyst passionate about defending digital assets and building secure systems.';
const skills = [
  'Penetration Testing',
  'Network Security',
  'Vulnerability Assessment',
  'Incident Response',
  'Security Automation',
  'Threat Intelligence',
  'Cloud Security (AWS)',
  'Linux & Bash Scripting',
  'Metasploit & Wireshark',
  'Secure Software Development',
];
const certs = [
  'Google Cloud Career Launchpad - Cybersecurity Track',
  'AWS Academy Graduate - Cloud Foundations',
  'Infosys Springboard - Machine Learning Fundamentals',
  'Udemy - Spark SQL & Hadoop for Data Science',
];
const projects = [
  'CryptaNet: Privacy-Preserving Explainable AI for Supply Chain Anomaly Detection',
  'HoneyChain: IoT Honeypot with Blockchain-Verified Threat Intelligence',
  'Intelligent Driver Monitoring System',
  'Innovative Web Compiler (TypeScript & React.js)',
  'Permutation Engine: Multi-Algorithm Solver with 3D Rendering',
];
const contact = [
  'Email: jdhanush213@gmail.com',
  'LinkedIn: linkedin.com/in/dhanush-j-a976ab26b',
  'GitHub: github.com/dhanushj213',
];

function typeWriter(lines, setDisplay, speed = 30, callback) {
  let i = 0, j = 0, current = '';
  function type() {
    if (i < lines.length) {
      if (j < lines[i].length) {
        current += lines[i][j];
        setDisplay(prev => [...prev.slice(0, -1), current + '_']);
        j++;
        setTimeout(type, speed);
      } else {
        setDisplay(prev => [...prev.slice(0, -1), lines[i]]);
        i++;
        j = 0;
        current = '';
        setDisplay(prev => [...prev, '']);
        setTimeout(type, speed * 10);
      }
    } else if (callback) {
      callback();
    }
  }
  type();
}

const DhanushOSTerminal = () => {
  const [booting, setBooting] = useState(true);
  const [lines, setLines] = useState(['']);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (booting) {
      typeWriter(bootLines, setLines, 30, () => {
        setLines(prev => [...prev, asciiArt, "Enter 'help' to see a list of commands.", 'DhanushOS:/home/guest$ _']);
        setBooting(false);
        setTimeout(() => inputRef.current && inputRef.current.focus(), 500);
      });
    }
  }, [booting]);

  useEffect(() => {
    if (!booting) {
      inputRef.current && inputRef.current.focus();
    }
  }, [booting]);

  function handleCommand(cmd) {
    let output = [];
    switch (cmd.trim().toLowerCase()) {
      case 'help':
        output = helpText;
        break;
      case 'about':
        output = [about];
        break;
      case 'skills':
        output = skills;
        break;
      case 'projects':
        output = projects;
        break;
      case 'certs':
        output = certs;
        break;
      case 'experience':
        output = experience;
        break;
      case 'education':
        output = education;
        break;
      case 'social':
        output = social;
        break;
      case 'motivate':
        output = [motivate[Math.floor(Math.random() * motivate.length)]];
        break;
      case 'contact':
        output = contact;
        break;
      case 'clear':
        setHistory([]);
        setLines(['DhanushOS:/home/guest$ _']);
        return;
      default:
        output = [`Unknown command: ${cmd}`, "Type 'help' for a list of commands."];
    }
    setHistory(prev => [...prev, { cmd, output }]);
    setLines(['DhanushOS:/home/guest$ _']);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input);
      setInput('');
    }
  }

  return (
    <div style={{
      background: '#000',
      color: '#39FF14',
      fontFamily: 'VT323, "Press Start 2P", monospace',
      minHeight: '100vh',
      padding: '0',
      fontSize: '1.35rem',
      letterSpacing: '0.5px',
      overflow: 'visible', // Changed from auto to visible to allow full page scrolling
      display: 'block',    // Changed from flex to block for standard flow
      boxSizing: 'border-box',
    }}>
      {/* Header image removed */}
      <div style={{ padding: '6rem 1rem 5rem 1rem', maxWidth: 900, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        {lines.map((line, idx) => (
          // ASCII art detection (lines 4-10 in original file are ASCII) - apply specific class or style if needed, 
          // but here we just check if it LOOKS like ASCII (contains pipe chars etc) or just rely on index.  
          // Since booting lines are mixed, we'll just style the container to scroll for wide content.
          <div key={idx} className="terminal-line" style={{ marginBottom: '0.2rem' }}>{line}</div>
        ))}
        {history.map((entry, idx) => (
          <div key={idx + 'h'}>
            <div style={{ color: '#39FF14' }}>DhanushOS:/home/guest$ <span style={{ color: '#39FF14' }}>{entry.cmd}</span></div>
            {entry.output.map((out, i) => (
              <div key={i} className="terminal-line" style={{ color: out.startsWith('Unknown') ? '#008F11' : out.startsWith('Type') ? '#008F11' : '#39FF14' }}>{out}</div>
            ))}
          </div>
        ))}
        {!booting && (
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ color: '#39FF14', marginRight: '0.5rem' }}>DhanushOS:/home/guest$ </span>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '200px' }}>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#39FF14',
                  fontFamily: 'inherit',
                  fontSize: '1.35rem',
                  outline: 'none',
                  width: '100%',
                  minWidth: '50px'
                }}
                autoFocus
              />
              <span className="blinking-cursor" style={{
                background: '#39FF14',
                color: '#39FF14',
                marginLeft: '2px',
                width: '12px',
                height: '1.35rem',
                display: 'inline-block',
                animation: 'blink 1s steps(1) infinite',
              }}>_</span>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&display=swap');
        .blinking-cursor {
          animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .terminal-line {
            white-space: pre-wrap; /* Wrap text on mobile */
            word-break: break-all;
        }

        /* Target the ASCII art specifically if possible, or usually it is the first few lines after boot */
        /* For now, just ensuring container is robust */
        
        @media (max-width: 600px) {
           /* Scale down the ASCII art container logic if detected, or just allow scroll */
           /* Simple fix: reduce font size on mobile to make ASCII fit better */
           .terminal-line {
               font-size: 1rem; 
               line-height: 1.2;
           }
        }
      `}</style>
    </div>
  );
};

export default DhanushOSTerminal;
