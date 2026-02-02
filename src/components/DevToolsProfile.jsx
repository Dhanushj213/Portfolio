import React, { useState } from 'react';
import { FaCode, FaFolder, FaSearch, FaGithub, FaCog, FaReact, FaJs, FaHtml5, FaCss3, FaTerminal, FaDownload } from 'react-icons/fa';
import { VscJson, VscMarkdown, VscFiles, VscSearch, VscSourceControl, VscDebugAlt, VscExtensions, VscAccount, VscSettingsGear, VscChevronRight, VscChevronDown, VscHome } from 'react-icons/vsc';
import './DevToolsProfile.css';

const DevToolsProfile = ({ projects, skills, experiences, certifications, contactInfo, onBack }) => {
    const [activeFile, setActiveFile] = useState('portfolio.config.json');
    const [sidebarVisible, setSidebarVisible] = useState(window.innerWidth > 768);

    const handleFileSelect = (fileName) => {
        setActiveFile(fileName);
        if (window.innerWidth <= 768) {
            setSidebarVisible(false);
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
                    <div title="Explorer" onClick={() => setSidebarVisible(!sidebarVisible)} className={`activity-icon ${sidebarVisible ? 'active' : ''}`}>
                        <VscFiles />
                    </div>
                    <div className="activity-icon">
                        <VscSearch />
                    </div>
                    <div className="activity-icon">
                        <VscSourceControl />
                    </div>
                    <div className="activity-icon">
                        <VscDebugAlt />
                    </div>
                    <div className="activity-icon">
                        <VscExtensions />
                    </div>
                </div>
                <div className="activity-bottom">
                    <div className="activity-icon">
                        <VscAccount />
                    </div>
                    <div className="activity-icon">
                        <VscSettingsGear />
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            {sidebarVisible && (
                <div className="sidebar">
                    <div className="sidebar-header">
                        Explorer
                    </div>
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
