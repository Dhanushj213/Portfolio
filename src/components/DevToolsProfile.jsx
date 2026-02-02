import React, { useState } from 'react';
import { FaCode, FaFolder, FaSearch, FaGithub, FaCog, FaReact, FaJs, FaHtml5, FaCss3, FaTerminal, FaDownload } from 'react-icons/fa';
import { VscJson, VscMarkdown, VscFiles, VscSearch, VscSourceControl, VscDebugAlt, VscExtensions, VscAccount, VscSettingsGear, VscChevronRight, VscChevronDown, VscHome } from 'react-icons/vsc';
import './DevToolsProfile.css';

const DevToolsProfile = ({ projects, skills, experiences, certifications, contactInfo, onBack }) => {
    const [activeFile, setActiveFile] = useState('portfolio.config.json');
    const [sidebarVisible, setSidebarVisible] = useState(window.innerWidth > 768);
    const [activeActivity, setActiveActivity] = useState('explorer');
    const [searchQuery, setSearchQuery] = useState('');
    const [showAccount, setShowAccount] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showCommandPalette, setShowCommandPalette] = useState(false);
    const [showShortcuts, setShowShortcuts] = useState(false);

    const handleFileSelect = (fileName) => {
        setActiveFile(fileName);
        if (window.innerWidth <= 768) {
            setSidebarVisible(false);
        }
    };

    const handleActivityClick = (activity) => {
        if (activeActivity === activity && sidebarVisible) {
            setSidebarVisible(false); // Toggle off if clicking active
        } else {
            setActiveActivity(activity);
            setSidebarVisible(true);
        }
    };

    // ... (Data definitions remain unchanged)

    // Render Sidebar Content based on activeActivity
    const renderSidebarContent = () => {
        switch (activeActivity) {
            case 'explorer':
                return (
                    <>
                        <div className="sidebar-header">Explorer</div>
                        <div className="sidebar-content">
                            <div className="sidebar-item">
                                <VscChevronDown className="mr-1" />
                                <span style={{ fontWeight: 'bold', fontSize: '0.75rem', textTransform: 'uppercase' }}>Portfolio-v2</span>
                            </div>
                            <div style={{ paddingLeft: '1rem' }}>
                                {Object.keys(files).map(fileName => (
                                    <div
                                        key={fileName}
                                        onClick={() => handleFileSelect(fileName)}
                                        className={`sidebar-item ${activeFile === fileName ? 'active' : ''}`}
                                    >
                                        <span className={`mr-2 ${fileName.endsWith('.json') ? 'icon-json' : 'icon-markdown'}`}>
                                            {fileName.endsWith('.json') ? <VscJson /> : <VscMarkdown />}
                                        </span>
                                        <span>{fileName}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                );
            case 'search':
                return (
                    <>
                        <div className="sidebar-header">Search</div>
                        <div className="sidebar-content" style={{ padding: '1rem' }}>
                            <div style={{ background: '#3c3c3c', padding: '4px', display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="text"
                                    placeholder="Search files..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none' }}
                                />
                                <VscSearch />
                            </div>
                            <div style={{ marginTop: '1rem' }}>
                                {Object.keys(files).filter(f => f.toLowerCase().includes(searchQuery.toLowerCase())).map(fileName => (
                                    <div
                                        key={fileName}
                                        onClick={() => handleFileSelect(fileName)}
                                        className={`sidebar-item ${activeFile === fileName ? 'active' : ''}`}
                                        style={{ paddingLeft: 0 }}
                                    >
                                        <span className={`mr-2 ${fileName.endsWith('.json') ? 'icon-json' : 'icon-markdown'}`}>
                                            {fileName.endsWith('.json') ? <VscJson /> : <VscMarkdown />}
                                        </span>
                                        <span>{fileName}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                );
            case 'source-control':
                return (
                    <>
                        <div className="sidebar-header">Source Control</div>
                        <div className="sidebar-content" style={{ padding: '1rem' }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'bold' }}>Repository</span><br />
                                <a href="https://github.com/Dhanushj213/Portfolio" target="_blank" rel="noopener noreferrer" style={{ color: '#4fc1ff' }}>
                                    Dhanushj213/Portfolio
                                </a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                                <VscSourceControl />
                                <span>main*</span>
                            </div>
                            <p style={{ marginTop: '0.5rem', color: '#888', fontSize: '0.8rem' }}>
                                All changes committed.
                            </p>
                        </div>
                    </>
                );
            case 'debug':
                return (
                    <>
                        <div className="sidebar-header">Run and Debug</div>
                        <div className="sidebar-content" style={{ padding: '1rem' }}>
                            <button style={{
                                background: '#388e3c', color: 'white', border: 'none', padding: '0.5rem 1rem',
                                width: '100%', borderRadius: '2px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                            }}>
                                <VscDebugAlt /> Run Portfolio
                            </button>
                            <div style={{ marginTop: '1.5rem' }}>
                                <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.75rem', color: '#bbb' }}>VARIABLES</div>
                                <div style={{ fontSize: '0.8rem', color: '#ccc' }}>
                                    <div>status: <span className="text-orange-400">"Online"</span></div>
                                    <div>version: <span className="text-orange-400">"2.0.0"</span></div>
                                    <div>env: <span className="text-green-400">"production"</span></div>
                                    <div>theme: <span className="text-green-400">"dark"</span></div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'extensions':
                return (
                    <>
                        <div className="sidebar-header">Extensions</div>
                        <div className="sidebar-content">
                            {[
                                { name: 'React', desc: 'JavaScript Library', icon: <FaReact color="#61dafb" /> },
                                { name: 'Tailwind CSS', desc: 'Utility-first CSS', icon: <FaCss3 color="#38b2ac" /> }, // Approximation
                                { name: 'Vite', desc: 'Next Generation Frontend Tooling', icon: <FaJs color="#f7df1e" /> }, // Placeholder icon
                                { name: 'React Icons', desc: 'Include popular icons', icon: <FaCode color="white" /> },
                            ].map(ext => (
                                <div key={ext.name} style={{ padding: '0.5rem 1rem', display: 'flex', gap: '0.75rem', borderBottom: '1px solid #2b2b2b' }}>
                                    <div style={{ fontSize: '1.5rem' }}>{ext.icon}</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>{ext.name}</div>
                                        <div style={{ fontSize: '0.75rem', color: '#888' }}>{ext.desc}</div>
                                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                                            <button style={{ background: '#2d2d2d', color: '#888', border: 'none', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '2px' }} disabled>Installed</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                );
            default:
                return null;
        }
    };


    // Duplicate data from Recruiter View
    const aboutData = {
        name: "Dhanush J",
        role: "Computer Science Engineering Student",
        batch: "2026",
        specialization: "Cybersecurity",
        summary: "Specializing in secure software development, penetration testing, cloud security, AI-driven systems, and blockchain-based solutions.",
        key_achievements: [
            "CryptaNet: Privacy-preserving blockchain-based anomaly detection",
            "HoneyChain: IoT honeypot with blockchain-verified threat intelligence",
            "India Book of Records holder"
        ]
    };

    const myListData = [
        { title: 'Cybersecurity', description: 'Penetration Testing, Network Security, Cryptography' },
        { title: 'Full-Stack Development', description: 'MERN Stack, LAMP Stack, RESTful API' },
        { title: 'Cloud & DevOps', description: 'AWS, Docker, Cloud Infrastructure' },
        { title: 'Machine Learning', description: 'Python, TensorFlow, AI Model Development' }
    ];

    const languagesData = [
        { name: 'English', proficiency: 'Fluent', level: '98%' },
        { name: 'Kannada', proficiency: 'Native', level: '100%' },
        { name: 'Hindi', proficiency: 'Professional', level: '85%' }
    ];

    const files = {
        'portfolio.config.json': { content: aboutData, language: 'json' },
        'projects.json': { content: projects, language: 'json' },
        'experience.json': { content: experiences, language: 'json' },
        'skills.json': { content: skills, language: 'json' },
        'certifications.json': { content: certifications, language: 'json' },
        'contact.json': { content: contactInfo, language: 'json' },
        'interests.json': { content: myListData, language: 'json' },
        'languages.json': { content: languagesData, language: 'json' },
        'settings.json': {
            content: {
                "editor.fontSize": 14,
                "editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",
                "workbench.colorTheme": "Default Dark+",
                "files.autoSave": "onFocusChange",
                "editor.minimap.enabled": true
            },
            language: 'json'
        },
        'README.md': {
            language: 'markdown-react'
        }
    };

    const renderReadme = () => (
        <div className="markdown-preview" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '2rem', fontSize: '2.5em', fontWeight: 'bold', color: '#E50914' }}>
                {aboutData.name}
            </h1>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <div style={{ flex: 1, minWidth: '280px' }}>
                    <p style={{ marginBottom: '1rem', color: '#d4d4d4', lineHeight: '1.6' }}>
                        Computer Science Engineering student (Batch of 2026) specializing in Cybersecurity, with strong expertise in secure software development, penetration testing, cloud security, AI-driven systems, and blockchain-based solutions. Proficient in full-stack development, system design, and DevOps tools, with hands-on experience gained through multiple internships and real-world projects.
                    </p>
                    <p style={{ marginBottom: '1rem', color: '#d4d4d4', lineHeight: '1.6' }}>
                        Led and developed advanced systems such as <strong>CryptaNet</strong>, a privacy-preserving blockchain-based anomaly detection platform using explainable AI, and <strong>HoneyChain</strong>, an IoT honeypot with blockchain-verified threat intelligence. Recognized for technical excellence and creativity through international and national awards, including the India Book of Records.
                    </p>
                    <p style={{ marginBottom: '1.5rem', color: '#E50914', lineHeight: '1.6', fontWeight: '500' }}>
                        Seeking opportunities in software engineering and cybersecurity, specializing in secure cloud-native systems, ethical hacking, and intelligent, scalable software solutions.
                    </p>

                    <a
                        href="/Resume.pdf"
                        download
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: '#E50914',
                            color: 'white',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            transition: 'background 0.2s',
                            fontSize: '0.9rem'
                        }}
                    >
                        <FaDownload /> Download Resume
                    </a>
                </div>
                <img
                    src="/profile-picture.png"
                    alt="Dhanush J"
                    style={{
                        width: '200px',
                        height: 'auto',
                        borderRadius: '12px',
                        objectFit: 'cover',
                        border: '2px solid #333',
                        flexShrink: 0
                    }}
                />
            </div>

            <h2 style={{ fontSize: '1.5em', borderBottom: '1px solid #333', paddingBottom: '0.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#d4d4d4' }}>
                About
            </h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#cccccc' }}>
                {aboutData.key_achievements.map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
            </ul>

            <h2 style={{ fontSize: '1.5em', borderBottom: '1px solid #333', paddingBottom: '0.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#d4d4d4' }}>
                Experience
            </h2>
            {experiences.map((exp, index) => (
                <div key={index} style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#E50914' }}>{exp.role}</h3>
                    <p style={{ fontStyle: 'italic', marginBottom: '0.25rem' }}>{exp.company} | {exp.period}</p>
                    <p style={{ color: '#aaa' }}>{exp.description}</p>
                </div>
            ))}

            <h2 style={{ fontSize: '1.5em', borderBottom: '1px solid #333', paddingBottom: '0.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#d4d4d4' }}>
                Projects
            </h2>
            {projects.map((proj, index) => (
                <div key={index} style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#E50914' }}>{proj.title}</h3>
                    <p style={{ fontStyle: 'italic', marginBottom: '0.25rem' }}>{proj.period}</p>
                    <p style={{ color: '#aaa' }}>{proj.description}</p>
                </div>
            ))}

            <h2 style={{ fontSize: '1.5em', borderBottom: '1px solid #333', paddingBottom: '0.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#d4d4d4' }}>
                Skills
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {skills.map((skillGroup, index) => (
                    <div key={index} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '4px' }}>
                        <h3 style={{ color: '#E50914', marginBottom: '0.5rem', fontSize: '0.9em', fontWeight: 'bold' }}>{skillGroup.title}</h3>
                        <p style={{ fontSize: '0.85em', color: '#ccc' }}>{skillGroup.skills.join(', ')}</p>
                    </div>
                ))}
            </div>

            <h2 style={{ fontSize: '1.5em', borderBottom: '1px solid #333', paddingBottom: '0.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#d4d4d4' }}>
                Certifications
            </h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#cccccc' }}>
                {certifications.map((cert, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>
                        <strong>{cert.title}</strong> - {cert.organization} ({cert.date})
                    </li>
                ))}
            </ul>

            <h2 style={{ fontSize: '1.5em', borderBottom: '1px solid #333', paddingBottom: '0.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#d4d4d4' }}>
                Languages
            </h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#cccccc' }}>
                {languagesData.map((lang, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>
                        <strong>{lang.name}</strong>: {lang.proficiency} ({lang.level})
                    </li>
                ))}
            </ul>

            <h2 style={{ fontSize: '1.5em', borderBottom: '1px solid #333', paddingBottom: '0.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#d4d4d4' }}>
                Contact
            </h2>
            <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> {contactInfo.email}</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>Phone:</strong> {contactInfo.phone}</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>Location:</strong> {contactInfo.location}</p>
            <p>
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#4fc1ff', textDecoration: 'underline', marginRight: '1rem' }}>LinkedIn</a>
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: '#4fc1ff', textDecoration: 'underline' }}>GitHub</a>
            </p>
        </div>
    );

    const renderContent = () => {
        const file = files[activeFile];
        if (!file) return null;

        if (file.language === 'markdown-react') {
            return renderReadme();
        }

        if (file.language === 'json') {
            const jsonString = JSON.stringify(file.content, null, 2);
            return (
                <pre className="code-pre">
                    <code dangerouslySetInnerHTML={{ __html: syntaxHighlight(jsonString) }} />
                </pre>
            );
        } else {
            return (
                <div className="markdown-preview whitespace-pre-wrap">
                    {file.content}
                </div>
            );
        }
    };

    const [selectedImage, setSelectedImage] = useState(null);

    // Simple syntax highlighting
    const syntaxHighlight = (json) => {
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            let cls = 'text-orange-400'; // number
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'text-blue-400'; // key
                } else {
                    cls = 'text-green-400'; // string
                    const innerContent = match.slice(1, -1);

                    // Check if string is an image path (ends with image extension) or matches specific known paths
                    if (innerContent.match(/\.(png|jpg|jpeg|gif|webp)$/i) || innerContent === '/c16.png') {
                        return `<span class="${cls}">"<span class="image-link" data-src="${innerContent}" style="text-decoration: underline; cursor: pointer;">${innerContent}</span>"</span>`;
                    }

                    // Check if string contains a URL
                    const urlMatch = match.match(/^"((https?:\/\/[^\s"]+))"$/);
                    if (urlMatch) {
                        const url = urlMatch[1];
                        return `<span class="${cls}">"<a href="${url}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; cursor: pointer; color: inherit;">${url}</a>"</span>`;
                    }
                }
            } else if (/true|false/.test(match)) {
                cls = 'text-purple-400'; // boolean
            } else if (/null/.test(match)) {
                cls = 'text-gray-500'; // null
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    };

    const handleEditorClick = (e) => {
        if (e.target.classList.contains('image-link')) {
            const src = e.target.getAttribute('data-src');
            if (src) {
                setSelectedImage(src);
            }
        }
    };

    return (
        <div className="devtools-container">
            {/* Image Modal */}
            {selectedImage && (
                <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal-btn" onClick={() => setSelectedImage(null)}>&times;</button>
                        <img src={selectedImage} alt="Preview" />
                    </div>
                </div>
            )}

            {/* Activity Bar */}
            <div className="activity-bar">
                <div className="activity-top">
                    <div title="Back to Home" onClick={onBack} className="activity-icon">
                        <VscHome />
                    </div>
                    <div
                        title="Explorer"
                        onClick={() => handleActivityClick('explorer')}
                        className={`activity-icon ${activeActivity === 'explorer' && sidebarVisible ? 'active' : ''}`}
                    >
                        <VscFiles />
                    </div>
                    <div
                        title="Search"
                        onClick={() => handleActivityClick('search')}
                        className={`activity-icon ${activeActivity === 'search' && sidebarVisible ? 'active' : ''}`}
                    >
                        <VscSearch />
                    </div>
                    <div
                        title="Source Control"
                        onClick={() => handleActivityClick('source-control')}
                        className={`activity-icon ${activeActivity === 'source-control' && sidebarVisible ? 'active' : ''}`}
                    >
                        <VscSourceControl />
                    </div>
                    <div
                        title="Run and Debug"
                        onClick={() => handleActivityClick('debug')}
                        className={`activity-icon ${activeActivity === 'debug' && sidebarVisible ? 'active' : ''}`}
                    >
                        <VscDebugAlt />
                    </div>
                    <div
                        title="Extensions"
                        onClick={() => handleActivityClick('extensions')}
                        className={`activity-icon ${activeActivity === 'extensions' && sidebarVisible ? 'active' : ''}`}
                    >
                        <VscExtensions />
                    </div>
                </div>
                <div className="activity-bottom">
                    <div className="activity-icon" title="Account" onClick={() => setShowAccount(prev => !prev)}>
                        <VscAccount className={showAccount ? 'active' : ''} />
                    </div>
                    <div className="activity-icon" title="Manage" onClick={() => setShowSettings(prev => !prev)}>
                        <VscSettingsGear className={showSettings ? 'active' : ''} />
                    </div>
                </div>
            </div>

            {/* Account Popup */}
            {showAccount && (
                <div style={{
                    position: 'absolute',
                    bottom: '50px',
                    left: '48px',
                    background: '#252526',
                    border: '1px solid #454545',
                    padding: '1rem',
                    zIndex: 2000,
                    borderRadius: '4px',
                    width: '300px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <img src="/profile-picture.png" alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                        <div>
                            <div style={{ fontWeight: 'bold' }}>{aboutData.name}</div>
                            <div style={{ fontSize: '0.8rem', color: '#ccc' }}>Active</div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#aaa', lineHeight: '1.4' }}>
                        Cybersecurity Specialist & Full Stack Developer.<br />
                        Batch of 2026.
                    </p>
                    <button
                        onClick={() => setShowAccount(false)}
                        style={{ marginTop: '1rem', width: '100%', padding: '0.5rem', background: '#333', border: 'none', color: 'white', cursor: 'pointer' }}
                    >
                        Close
                    </button>
                </div>
            )}

            {/* Settings Popup */}
            {showSettings && (
                <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '48px',
                    background: '#252526',
                    border: '1px solid #454545',
                    padding: '0.5rem 0',
                    zIndex: 2000,
                    borderRadius: '4px',
                    width: '200px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                }}>
                    <div
                        style={{ padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '0.9rem', color: '#ccc' }}
                        className="sidebar-item"
                        onClick={() => { setShowCommandPalette(true); setShowSettings(false); }}
                    >
                        Command Palette...
                    </div>
                    <div
                        style={{ padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '0.9rem', color: '#ccc' }}
                        className="sidebar-item"
                        onClick={() => { handleFileSelect('settings.json'); setShowSettings(false); }}
                    >
                        Settings
                    </div>
                    <div
                        style={{ padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '0.9rem', color: '#ccc' }}
                        className="sidebar-item"
                        onClick={() => { handleActivityClick('extensions'); setShowSettings(false); }}
                    >
                        Extensions
                    </div>
                    <div
                        style={{ padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '0.9rem', color: '#ccc' }}
                        className="sidebar-item"
                        onClick={() => { setShowShortcuts(true); setShowSettings(false); }}
                    >
                        Keyboard Shortcuts
                    </div>
                    <div style={{ borderTop: '1px solid #333', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
                        <div style={{ padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '0.9rem', color: '#ccc' }} className="sidebar-item" onClick={() => setShowSettings(false)}>
                            Close Menu
                        </div>
                    </div>
                </div>
            )}

            {/* Command Palette Modal */}
            {showCommandPalette && (
                <div className="image-modal-overlay" onClick={() => setShowCommandPalette(false)}>
                    <div
                        style={{
                            width: '600px',
                            maxWidth: '90%',
                            background: '#252526',
                            borderRadius: '6px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                            padding: '10px',
                            marginTop: '-20vh'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', background: '#3c3c3c', padding: '5px 10px', borderRadius: '4px', marginBottom: '10px' }}>
                            <span style={{ marginRight: '10px', color: '#ccc' }}>&gt;</span>
                            <input
                                autoFocus
                                type="text"
                                placeholder="Type a command..."
                                style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none', fontSize: '1rem' }}
                            />
                        </div>
                        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                            {[
                                { label: 'File: Save', shortcut: 'Cmd+S' },
                                { label: 'View: Toggle Sidebar', shortcut: 'Cmd+B' },
                                { label: 'View: Toggle Terminal', shortcut: 'Ctrl+`' },
                                { label: 'Preferences: Open Settings', shortcut: 'Cmd+,' },
                                { label: 'Developer: Reload Window', shortcut: 'Cmd+R' },
                                { label: 'Help: About', shortcut: '' },
                            ].map((cmd, i) => (
                                <div key={i} className="sidebar-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 10px' }}>
                                    <span>{cmd.label}</span>
                                    {cmd.shortcut && <span style={{ fontSize: '0.8rem', color: '#888' }}>{cmd.shortcut}</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Keyboard Shortcuts Modal */}
            {showShortcuts && (
                <div className="image-modal-overlay" onClick={() => setShowShortcuts(false)}>
                    <div
                        style={{
                            width: '800px',
                            maxWidth: '90%',
                            background: '#1e1e1e',
                            borderRadius: '6px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                            padding: '2rem',
                            maxHeight: '80vh',
                            overflowY: 'auto'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h2 style={{ margin: 0 }}>Keyboard Shortcuts</h2>
                            <button onClick={() => setShowShortcuts(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '1rem' }}>General</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Command Palette</span> <code style={{ background: '#333', padding: '2px 6px', borderRadius: '3px' }}>Cmd+Shift+P</code></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Settings</span> <code style={{ background: '#333', padding: '2px 6px', borderRadius: '3px' }}>Cmd+,</code></div>
                            </div>
                            <div>
                                <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '1rem' }}>View</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Explorer</span> <code style={{ background: '#333', padding: '2px 6px', borderRadius: '3px' }}>Cmd+Shift+E</code></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Search</span> <code style={{ background: '#333', padding: '2px 6px', borderRadius: '3px' }}>Cmd+Shift+F</code></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Source Control</span> <code style={{ background: '#333', padding: '2px 6px', borderRadius: '3px' }}>Ctrl+Shift+G</code></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Sidebar */}
            {sidebarVisible && (
                <div className="sidebar">
                    {renderSidebarContent()}
                </div>
            )}

            {/* Main Content */}
            <div className="main-content" onClick={() => {
                if (window.innerWidth <= 768 && sidebarVisible) {
                    setSidebarVisible(false);
                }
            }}>
                {/* Tab Bar */}
                <div className="tab-bar">
                    {Object.keys(files).map((fileName) => (
                        <div
                            key={fileName}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleFileSelect(fileName);
                            }}
                            className={`tab ${activeFile === fileName ? 'active' : ''}`}
                        >
                            <span className={`tab-icon ${fileName.endsWith('.json') ? 'icon-json' : 'icon-markdown'}`}>
                                {fileName.endsWith('.json') ? '{ }' : 'M+'}
                            </span>
                            {fileName}
                        </div>
                    ))}
                </div>

                {/* Breadcrumb / Path */}
                <div className="breadcrumbs">
                    portfolio-v2 &gt; src &gt; data &gt; {activeFile}
                </div>

                {/* Editor Area */}
                <div className="editor-area" onClick={handleEditorClick}>
                    {/* Line Numbers */}
                    <div className="line-numbers">
                        {Array.from({ length: 50 }).map((_, i) => (
                            <div key={i}>{i + 1}</div>
                        ))}
                    </div>
                    {/* Code Content */}
                    <div className="code-content">
                        {renderContent()}
                    </div>
                </div>

                {/* Status Bar */}
                <div className="status-bar">
                    <div className="status-left">
                        <div className="status-item"><VscSourceControl /> master*</div>
                        <div className="status-item">0 errors, 0 warnings</div>
                    </div>
                    <div className="status-right">
                        <div className="status-item">Ln 1, Col 1</div>
                        <div className="status-item">UTF-8</div>
                        <div className="status-item">JavaScript</div>
                        <div className="status-item">Prettier</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevToolsProfile;
