import React, { useState, useEffect, useRef } from 'react';

// ASCII Art for DHANUSH J
const asciiArt = `
  ____  _   _    _   _ _   _ _   _ _   _     _     _   _     _     _ 
 |  _ | | | |  | | | | | | | | | | | | |   | |   | | | |   | |   | |
 | | | | | | |  | |_| | | | | | | | | | |   | |   | | | |   | |   | |
 | |_| | |_| |  |  _  | |_| | |_| | |_| |   | |___| |_| |___| |___| |
 |____/ \\___/   |_| |_|___/ \\___/ \\___/    |_____|___/____/____/ 
`;

const mobileHeader = `
DHANUSH J
=========
CYBERSECURITY ANALYST
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

// Initial File System State - moved inside component or wrapped to use props
// We will construct it inside

const DhanushOSTerminal = ({ projects = [], skills = [], experiences = [], certifications = [], contactInfo = {}, onBack }) => {
  const [booting, setBooting] = useState(true);
  const [lines, setLines] = useState(['']);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  // Menu State
  const [activeMenu, setActiveMenu] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const menuRef = useRef(null);

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuAction = (action) => {
    setActiveMenu(null);
    switch (action) {
      case 'close': onBack(); break;
      case 'clear':
        setHistory([]);
        setLines(['_']);
        break;
      case 'copy':
        const textToCopy = history.map(h => `$ ${h.cmd}\n${h.output.map(o => typeof o === 'string' ? o : '[Response]').join('\n')}`).join('\n\n');
        navigator.clipboard.writeText(textToCopy)
          .then(() => alert('Terminal output copied to clipboard!'))
          .catch(err => console.error('Failed to copy', err));
        break;
      case 'zoomIn': setZoomLevel(prev => Math.min(prev + 0.2, 2.0)); break;
      case 'zoomOut': setZoomLevel(prev => Math.max(prev - 0.2, 0.6)); break;
      case 'zoomReset': setZoomLevel(1); break;
      case 'restart':
        setBooting(true);
        setLines(['']);
        setHistory([]);
        setInput('');
        setHistoryIndex(-1);
        break;
      case 'help': handleCommand('help'); break;
      case 'about': handleCommand('about'); break;
      default: break;
    }
  };

  // Construct Initial FS based on props
  const buildInitialFS = () => ({
    'home': {
      type: 'dir',
      children: {
        'guest': {
          type: 'dir',
          children: {
            'about': { type: 'executable', description: 'Show about info' },
            'skills': { type: 'executable', description: 'List key skills' },
            'projects': { type: 'executable', description: 'Show projects' },
            'certs': { type: 'executable', description: 'List certifications' },
            'experience': { type: 'executable', description: 'Show work experience' },
            'education': { type: 'executable', description: 'Show education' },
            'social': { type: 'executable', description: 'Social links' },
            'motivate': { type: 'executable', description: 'Get a motivational quote' },
            'contact': { type: 'executable', description: 'Contact info' },
            // Keeping text files for flavor if desired, or remove to reduce clutter. 
            // User asked for "show all these files too... along with existing ones".
            'readme.txt': { type: 'file', content: 'Welcome to DhanushOS! Type "help" or use "ls" to explore.' }
          }
        }
      }
    }
  });

  // File System State
  const [fileSystem, setFileSystem] = useState(buildInitialFS());
  const [currentPath, setCurrentPath] = useState(['home', 'guest']);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const bootStarted = useRef(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (booting && !bootStarted.current) {
      bootStarted.current = true;
      typeWriter(bootLines, setLines, 30, () => {
        setLines(prev => [...prev, "Enter 'help' to see a list of commands."]);
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

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines, history]);

  // Helper to get current directory object
  const getDir = (fs, path) => {
    let current = fs;
    for (const segment of path) {
      if (current[segment] && current[segment].type === 'dir') {
        current = current[segment].children;
      } else {
        return null; // Invalid path
      }
    }
    return current;
  };

  const getCurrentDir = () => getDir(fileSystem, currentPath);

  function handleCommand(cmdRaw) {
    const parts = cmdRaw.trim().split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output = [];
    // Deep copy for FS manipulation
    const cloneFS = (obj) => JSON.parse(JSON.stringify(obj));

    switch (cmd) {
      case 'help':
        output = [
          ...helpText,
          '--- Linux Commands ---',
          'ls         - List directory contents',
          'cd <dir>   - Change directory',
          'pwd        - Print working directory',
          'mkdir <name> - Create directory',
          'touch <name> - Create file',
          'rm <name>    - Remove file or directory',
          'cat <file>   - Read file content',
          'whoami     - Print current user',
          'echo <msg> - Print message',
          '--- Portfolio Commands ---',
          'about      - Show about info',
          'skills     - List key skills',
          'projects   - Show projects',
          'certs      - List certifications',
          'experience - Show work experience',
          'education  - Show education',
          'social     - Social links',
          'contact    - Contact info'
        ];
        break;
      case 'about':
        output = [
          { type: 'image', src: '/profile-picture.png', alt: 'Dhanush J' },
          about
        ];
        break;
      case 'skills':
        output = [{ type: 'skill-list', data: skills }];
        break;
      case 'projects':
        output = [{ type: 'project-list', data: projects }];
        break;
      case 'certs':
      case 'certifications':
        output = [{ type: 'cert-list', data: certifications }];
        break;
      case 'experience':
        output = [{ type: 'exp-list', data: experiences }];
        break;
      case 'education':
        output = education; // Keep simple text or structured if available. Standard text for now.
        break;
      case 'social':
        output = [{
          type: 'social-list', data: [
            { platform: 'LinkedIn', url: contactInfo.linkedin, icon: 'fa-linkedin' },
            { platform: 'GitHub', url: contactInfo.github, icon: 'fa-github' },
            { platform: 'Twitter', url: social.find(s => s.includes('Tw'))?.split(': ')[1] || '#', icon: 'fa-twitter' }
          ]
        }];
        break;
      case 'motivate':
        output = [motivate[Math.floor(Math.random() * motivate.length)]];
        break;
      case 'contact':
        output = [{ type: 'contact-info', data: contactInfo }];
        break;

      // --- Linux Commands ---
      case 'pwd':
        output = ['/' + currentPath.join('/')];
        break;

      case 'whoami':
        output = ['guest'];
        break;

      case 'echo':
        output = [args.join(' ')];
        break;

      case 'cat': {
        if (args.length === 0) {
          output = ['cat: missing operand'];
        } else {
          const name = args[0];
          const dir = getCurrentDir();
          if (dir && dir[name]) {
            if (dir[name].type === 'dir') {
              output = [`cat: ${name}: Is a directory`];
            } else if (dir[name].type === 'executable') {
              output = [`cat: ${name}: Is a binary/executable file. Run it directly.`];
            } else {
              // It's a file
              output = [dir[name].content || ''];
            }
          } else {
            output = [`cat: ${name}: No such file or directory`];
          }
        }
        break;
      }

      case 'ls': {
        const dir = getCurrentDir();
        if (dir) {
          const items = Object.keys(dir).map(name => {
            const item = dir[name];
            return { name, type: item.type };
          });
          output = [{ type: 'ls-output', items }];
        } else {
          output = ['Error: Current directory not found.'];
        }
        break;
      }

      case 'mkdir': {
        if (args.length === 0) {
          output = ['mkdir: missing operand'];
        } else {
          const name = args[0];
          const fullFS = cloneFS(fileSystem);
          const dir = getDir(fullFS, currentPath);
          if (dir[name]) {
            output = [`mkdir: cannot create directory '${name}': File exists`];
          } else {
            dir[name] = { type: 'dir', children: {} };
            setFileSystem(fullFS);
            output = [];
          }
        }
        break;
      }

      case 'touch': {
        if (args.length === 0) {
          output = ['touch: missing file operand'];
        } else {
          const name = args[0];
          const fullFS = cloneFS(fileSystem);
          const dir = getDir(fullFS, currentPath);
          if (dir[name]) {
            // Updates timestamp in real linux, here we do nothing
            output = [];
          } else {
            dir[name] = { type: 'file', content: '' };
            setFileSystem(fullFS);
            output = [];
          }
        }
        break;
      }

      case 'rm': {
        if (args.length === 0) {
          output = ['rm: missing operand'];
        } else {
          const name = args[0];
          const fullFS = cloneFS(fileSystem);
          const dir = getDir(fullFS, currentPath);
          if (!dir[name]) {
            output = [`rm: cannot remove '${name}': No such file or directory`];
          } else {
            delete dir[name];
            setFileSystem(fullFS);
            output = [];
          }
        }
        break;
      }

      case 'cd': {
        if (args.length === 0 || args[0] === '~') {
          setCurrentPath(['home', 'guest']);
        } else if (args[0] === '/') {
          setCurrentPath([]); // Root
        } else if (args[0] === '..') {
          if (currentPath.length > 0) {
            setCurrentPath(prev => prev.slice(0, -1));
          }
        } else {
          const dest = args[0];
          const dir = getCurrentDir();
          if (dir[dest]) {
            if (dir[dest].type === 'dir') {
              setCurrentPath(prev => [...prev, dest]);
            } else {
              output = [`bash: cd: ${dest}: Not a directory`];
            }
          } else {
            output = [`bash: cd: ${dest}: No such file or directory`];
          }
        }
        break;
      }

      case 'clear':
        setHistory([]);
        setLines(['_']);
        return;
      default:
        // Check if command matches an executable file in current dir
        const dir = getCurrentDir();
        if (dir && dir[cmd] && dir[cmd].type === 'executable') {
          // It's a valid "file" command, recursively call handleCommand (won't recurse infinitely due to cases)
          // Actually, we are already in switching cases. 
          // If it's a known executable like 'about', it hits the case. 
          // If it's a dynamic executable we added?
          // For now, the files we added map to cases.
          // But if user typed something not in case but is in file list?
          output = [`Unknown command: ${cmd}`, "Type 'help' for a list of commands."];
        } else {
          output = [`Unknown command: ${cmd}`, "Type 'help' for a list of commands."];
        }
    }
    setHistory(prev => [...prev, { cmd: cmdRaw, output }]);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault();
      const trimmedInput = input.trim();
      if (trimmedInput) {
        handleCommand(trimmedInput);
      }
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex].cmd);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex].cmd);
        }
      }
    }
  }

  // Determine prompt based on screen size
  const pathStr = isMobile ? (currentPath.length > 1 && currentPath[0] === 'home' && currentPath[1] === 'guest' ? '~' + (currentPath.length > 2 ? '/...' : '') : currentPath.join('/') || '/')
    : (currentPath.join('/') || '/');

  const prompt = isMobile
    ? `guest:${pathStr}$ `
    : `DhanushOS:/${pathStr}$ `;

  // Helper function to render output, especially for structured data
  const renderOutput = (outputArray) => {
    return outputArray.map((out, i) => {
      if (typeof out === 'object' && out.type === 'image') {
        return (
          <div key={i} className="terminal-image-container scanner-effect" style={{ margin: '1rem 0', position: 'relative', display: 'inline-block' }}>
            <img
              src={out.src}
              alt={out.alt}
              className="terminal-profile-pic"
              style={{
                maxWidth: '180px',
                borderRadius: '4px',
                border: '2px solid #39FF14',
                boxShadow: '0 0 15px rgba(57, 255, 20, 0.4)',
                display: 'block'
              }}
            />
            <div className="scanner-line"></div>
          </div>
        );
      } else if (typeof out === 'object' && out.type === 'ls-output') {
        return (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
            {out.items.map((item, k) => (
              <span key={k} style={{
                color: item.type === 'dir' ? '#00BFFF' : (item.type === 'executable' ? '#39FF14' : '#FFFFFF'),
                fontWeight: item.type === 'dir' || item.type === 'executable' ? 'bold' : 'normal',
                textShadow: item.type === 'executable' ? '0 0 5px rgba(57, 255, 20, 0.5)' : 'none'
              }}>
                {item.name}{item.type === 'executable' ? '*' : item.type === 'dir' ? '/' : ''}
              </span>
            ))}
          </div>
        );
      } else if (typeof out === 'object' && out.type === 'project-list') {
        return (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1rem' }}>
            {out.data.map((project, k) => (
              <div key={k} style={{ border: '1px solid #39FF14', padding: '1rem', borderRadius: '4px', background: 'rgba(57, 255, 20, 0.05)' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#fff', fontSize: '1.2rem' }}>{project.title}</h3>
                <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{project.period}</p>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  {project.image && (
                    <div className="terminal-image-container scanner-effect" style={{ position: 'relative', display: 'block', width: '100%', maxWidth: '300px' }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="terminal-profile-pic"
                        style={{
                          width: '100%',
                          borderRadius: '4px',
                          border: '2px solid #ff0000',
                          boxShadow: '0 0 15px rgba(255, 0, 0, 0.4)',
                          display: 'block'
                        }}
                      />
                      <div className="scanner-line-red"></div>
                    </div>
                  )}
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <p style={{ fontSize: '1rem', lineHeight: '1.4' }}>{project.description}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#39FF14', textDecoration: 'underline' }}>[GitHub]</a>}
                  {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#39FF14', textDecoration: 'underline' }}>[Live Demo]</a>}
                </div>
              </div>
            ))}
          </div>
        );
      } else if (typeof out === 'object' && out.type === 'skill-list') {
        return (
          <div key={i} style={{ marginTop: '0.5rem' }}>
            {out.data.map((cat, k) => (
              <div key={k} style={{ marginBottom: '1rem' }}>
                <span style={{ color: '#00BFFF', fontWeight: 'bold' }}>{cat.title}:</span>
                <div style={{ paddingLeft: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.2rem' }}>
                  {cat.skills.map((s, j) => <span key={j} style={{ background: '#222', padding: '2px 6px', borderRadius: '2px' }}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        );
      } else if (typeof out === 'object' && out.type === 'exp-list') {
        return (
          <div key={i} style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {out.data.map((exp, k) => (
              <div key={k}>
                <div style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 'bold' }}>{exp.role}</div>
                <div style={{ color: '#39FF14' }}>@ {exp.company}</div>
                <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{exp.period}</div>
                <div style={{ fontSize: '0.95rem' }}>{exp.description}</div>
                {exp.verificationLink && <a href={exp.verificationLink} target="_blank" rel="noreferrer" style={{ display: 'block', marginTop: '0.2rem', color: '#00BFFF' }}>[Verify]</a>}
              </div>
            ))}
          </div>
        );
      } else if (typeof out === 'object' && out.type === 'cert-list') {
        return (
          <ul key={i} style={{ listStyle: 'none', padding: 0 }}>
            {out.data.map((cert, k) => (
              <li key={k} style={{ marginBottom: '1rem', borderLeft: '3px solid #39FF14', paddingLeft: '1rem' }}>
                <div style={{ fontWeight: 'bold', color: '#fff' }}>{cert.title}</div>
                <div style={{ color: '#ccc', fontSize: '0.9rem' }}>{cert.organization} | {cert.date}</div>
                {cert.verificationLink && <a href={cert.verificationLink} target="_blank" rel="noreferrer" style={{ color: '#00BFFF', fontSize: '0.8rem' }}>[View Certificate]</a>}
              </li>
            ))}
          </ul>
        );
      } else if (typeof out === 'object' && out.type === 'social-list') {
        return (
          <div key={i} style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
            {out.data.map((s, k) => (
              <a key={k} href={s.url} target="_blank" rel="noreferrer" style={{ color: '#39FF14', textDecoration: 'none', border: '1px solid #39FF14', padding: '0.5rem 1rem', borderRadius: '4px' }}>
                {s.platform}
              </a>
            ))}
          </div>
        );
      } else if (typeof out === 'object' && out.type === 'contact-info') {
        return (
          <div key={i} style={{ marginTop: '1rem' }}>
            <div>Email: <a href={`mailto:${out.data.email}`} style={{ color: '#39FF14' }}>{out.data.email}</a></div>
            <div>Phone: <span style={{ color: '#fff' }}>{out.data.phone}</span></div>
            <div>Location: <span style={{ color: '#fff' }}>{out.data.location}</span></div>
            <div style={{ marginTop: '1rem' }}>
              <a href={out.data.linkedin} target="_blank" rel="noreferrer" style={{ color: '#00BFFF', marginRight: '1rem' }}>[LinkedIn]</a>
              <a href={out.data.github} target="_blank" rel="noreferrer" style={{ color: '#00BFFF' }}>[GitHub]</a>
            </div>
          </div>
        );
      }

      return (
        <div key={i} className="terminal-line" style={{
          color: out.toString().startsWith('Unknown') ? '#008F11' : out.toString().startsWith('Type') ? '#008F11' : '#39FF14',
          paddingLeft: isMobile ? '0' : '0'
        }}>{out}</div>
      );
    });
  };


  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#0d0d0d',
      color: '#00ff00',
      fontFamily: "'VT323', monospace",
      fontSize: `calc(${isMobile ? '1.2rem' : '1.5rem'} * ${zoomLevel})`,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Kali-style Top Bar */}
      <div style={{
        backgroundColor: '#2d2d2d',
        color: '#e0e0e0',
        padding: '0 10px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'sans-serif',
        fontSize: '14px',
        userSelect: 'none',
        borderBottom: '1px solid #000',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', gap: '5px' }} ref={menuRef}>
          {/* File Menu */}
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setActiveMenu(activeMenu === 'file' ? null : 'file')}
              style={{
                cursor: 'pointer',
                padding: '4px 8px',
                backgroundColor: activeMenu === 'file' ? '#555' : 'transparent',
                borderRadius: '4px'
              }}
            >File</span>
            {activeMenu === 'file' && (
              <div className="dropdown-menu">
                <div onClick={() => handleMenuAction('close')}>Close Terminal</div>
              </div>
            )}
          </div>

          {/* Edit Menu */}
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setActiveMenu(activeMenu === 'edit' ? null : 'edit')}
              style={{
                cursor: 'pointer',
                padding: '4px 8px',
                backgroundColor: activeMenu === 'edit' ? '#555' : 'transparent',
                borderRadius: '4px'
              }}
            >Edit</span>
            {activeMenu === 'edit' && (
              <div className="dropdown-menu">
                <div onClick={() => handleMenuAction('copy')}>Copy Output</div>
                <div onClick={() => handleMenuAction('clear')}>Clear Screen</div>
              </div>
            )}
          </div>

          {/* View Menu */}
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setActiveMenu(activeMenu === 'view' ? null : 'view')}
              style={{
                cursor: 'pointer',
                padding: '4px 8px',
                backgroundColor: activeMenu === 'view' ? '#555' : 'transparent',
                borderRadius: '4px'
              }}
            >View</span>
            {activeMenu === 'view' && (
              <div className="dropdown-menu">
                <div onClick={() => handleMenuAction('zoomIn')}>Zoom In (+)</div>
                <div onClick={() => handleMenuAction('zoomOut')}>Zoom Out (-)</div>
                <div onClick={() => handleMenuAction('zoomReset')}>Reset Zoom</div>
              </div>
            )}
          </div>

          {/* Terminal Menu */}
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setActiveMenu(activeMenu === 'terminal' ? null : 'terminal')}
              style={{
                cursor: 'pointer',
                padding: '4px 8px',
                backgroundColor: activeMenu === 'terminal' ? '#555' : 'transparent',
                borderRadius: '4px'
              }}
            >Terminal</span>
            {activeMenu === 'terminal' && (
              <div className="dropdown-menu">
                <div onClick={() => handleMenuAction('restart')}>Restart Session</div>
              </div>
            )}
          </div>

          {/* Help Menu */}
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setActiveMenu(activeMenu === 'help' ? null : 'help')}
              style={{
                cursor: 'pointer',
                padding: '4px 8px',
                backgroundColor: activeMenu === 'help' ? '#555' : 'transparent',
                borderRadius: '4px'
              }}
            >Help</span>
            {activeMenu === 'help' && (
              <div className="dropdown-menu">
                <div onClick={() => handleMenuAction('help')}>Command Help</div>
                <div onClick={() => handleMenuAction('about')}>About System</div>
              </div>
            )}
          </div>
        </div>

        <div style={{ fontWeight: 'bold', color: '#aaa', fontSize: '12px' }}>
          guest@dhanush: ~
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* Decorative Min/Max buttons */}
          <div style={{ width: '12px', height: '12px', background: '#5f6368', borderRadius: '50%' }}></div>
          <div style={{ width: '12px', height: '12px', background: '#5f6368', borderRadius: '50%' }}></div>
          {/* Functional Close Button */}
          <div
            onClick={onBack}
            style={{
              width: '16px',
              height: '16px',
              background: '#ff5f56',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              color: '#333',
              fontWeight: 'bold'
            }}
            title="Close Terminal"
          >
            ✕
          </div>
        </div>
      </div>

      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px',
        scrollbarWidth: 'thin',
        scrollbarColor: '#39FF14 #0d0d0d'
      }} onClick={() => inputRef.current?.focus()}>
        {booting ? (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            DHANUSH OS
            {lines.map((line, idx) => (
              <div key={idx} className="terminal-line" style={{ color: '#00ff00', marginBottom: '5px' }}>{line}</div>
            ))}
          </div>
        ) : (
          /* Actual Terminal Content */
          <>
            {/* Initial Welcome Message */}
            <div style={{ marginBottom: '1rem', lineHeight: '1.4' }}>
              <p>Welcome to DhanushOS</p>
              <p>(c) 2026 Dhanush J. All rights reserved.</p>
              <br />
              <p>System ready. Type <span style={{ color: '#fff' }}>'help'</span> for a list of commands.</p>
              <p>Type <span style={{ color: '#fff' }}>'ls'</span> to list portfolio contents.</p>
              <br />
              {/* Show Header on Desktop if needed, or keep clean */}
              {!isMobile && <pre style={{ color: '#39FF14', fontSize: '10px', lineHeight: '10px', marginBottom: '20px' }}>{asciiArt}</pre>}
            </div>

            {/* History Output */}
            {history.map((entry, i) => (
              <div key={i} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex' }}>
                  <span style={{ color: '#39FF14', marginRight: '0.5rem' }}>{prompt}</span>
                  <span style={{ color: '#fff' }}>{entry.cmd}</span>
                </div>
                <div style={{ color: '#ccc', marginLeft: '0rem', marginTop: '0.2rem', whiteSpace: 'pre-wrap' }}>
                  {renderOutput(entry.output)}
                </div>
              </div>
            ))}

            {/* Active Input Line */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="prompt" style={{ color: '#39FF14', marginRight: '0.5rem', whiteSpace: 'nowrap' }}>{prompt}</span>
              <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '50px' }}>
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
                    fontSize: 'inherit',
                    outline: 'none',
                    width: '100%',
                    padding: 0,
                    margin: 0
                  }}
                  autoFocus
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                />
              </div>
            </div>
            <div ref={bottomRef} />
          </>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&display=swap');
        
        .terminal-line {
            white-space: pre-wrap;
            word-break: break-word;
            line-height: 1.4;
        }

        .prompt {
          color: #39FF14;
          font-weight: bold;
        }

        .terminal-profile-pic {
          animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          opacity: 0;
          transform: scale(0.95);
        }

        .scanner-effect {
          overflow: hidden;
        }

        .scanner-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 15px;
          background: linear-gradient(to bottom, transparent, rgba(57, 255, 20, 0.6), transparent);
          filter: blur(2px);
          animation: scan 2s linear infinite;
          pointer-events: none;
          z-index: 10;
        }

        .scanner-line-red {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 15px;
          background: linear-gradient(to bottom, transparent, rgba(255, 0, 0, 0.6), transparent);
          filter: blur(2px);
          animation: scan 2s linear infinite;
          pointer-events: none;
          z-index: 10;
        }

        @keyframes scan {
          0% { top: 100%; }
          100% { top: -20%; }
        }

        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @media (max-width: 600px) {
           .terminal-line { font-size: 1rem; }
           input { font-size: 16px !important; }
        }

        /* Dropdown Styles */
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #333;
          border: 1px solid #000;
          border-radius: 0 0 4px 4px;
          min-width: 150px;
          z-index: 1000;
          box-shadow: 0 4px 6px rgba(0,0,0,0.5);
          padding: 5px 0;
        }

        .dropdown-menu div {
          padding: 8px 15px;
          cursor: pointer;
          color: #eee;
          font-size: 13px;
        }

        .dropdown-menu div:hover {
          background-color: #39FF14;
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default DhanushOSTerminal;
