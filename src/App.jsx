import { SpeedInsights } from '@vercel/speed-insights/react';
import DhanushOSTerminal from './components/DhanushOSTerminal';
import DevToolsProfile from './components/DevToolsProfile';
import { useState, useEffect } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary
import ProfileSelection from './components/ProfileSelection';
import ArtistProfile from './components/ArtistProfile';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';


import MyList from './components/MyList';
import TrendingNow from './components/TrendingNow';
import ContinueWatching from './components/ContinueWatching';
import SkillsLibrary from './components/SkillsLibrary';
import Certifications from './components/AwardsCertifications';
import Gallery from './components/Gallery';
import Languages from './components/Languages';
import Awards from './components/Awards';
import AboutNew from './components/AboutNew';
import ResearchSection from './components/ResearchSection';
import ResearchPage from './components/ResearchPage';

import ContactFooter from './components/ContactFooter';
import ScrollingGallery from './components/ScrollingGallery';



const contactInfo = {
  email: 'jdhanush213@gmail.com',
  phone: '+918217471928',
  location: 'Bengaluru, Karnataka, India',
  linkedin: 'https://www.linkedin.com/in/dhanush-jagadeesh/',
  github: 'https://github.com/dhanushj213',
  dob: 'January 2nd, 2003',
  resume: 'https://drive.google.com/file/d/1tqq1up0lBEt9R5qRmbRKn-FzGjVlfRvP/view?usp=drive_link'
};

const aboutContent = {
  title: 'About Me',
  description: 'Computer Science Engineering student specializing in Cybersecurity with a passion for developing secure and innovative solutions.',
};

const skills = [
  {
    id: 1,
    title: 'Programming Languages',
    skills: ['C', 'C++', 'Java', 'Python', 'Swift', 'PHP', 'Shell Scripting', 'SQL']
  },
  {
    id: 2,
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'PHP', 'Django', 'Flask', 'MERN Stack', 'LAMP Stack', 'RESTful API & GraphQL Development']
  },
  {
    id: 3,
    title: 'Frameworks & Libraries',
    skills: ['React.js', 'Vue.js', 'Bootstrap', 'Tailwind CSS', 'Laravel']
  },
  {
    id: 4,
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Figma', 'Power BI']
  },
  {
    id: 5,
    title: 'Databases',
    skills: ['MySQL', 'MongoDB']
  },
  {
    id: 6,
    title: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3, Lambda)', 'Docker']
  },
  {
    id: 7,
    title: 'Operating Systems',
    skills: ['Linux (Ubuntu, Kali Linux)', 'Metasploit', 'Windows', 'macOS']
  },
  {
    id: 8,
    title: 'Cybersecurity & Networking',
    skills: ['Penetration Testing', 'Network Security & Protocols', 'Cryptography', 'Firewalls & Intrusion Detection Systems']
  },
  {
    id: 9,
    title: 'Embedded Systems & IoT',
    skills: ['Arduino', 'Raspberry Pi']
  },
  {
    id: 10,
    title: 'Mobile App Development',
    skills: ['Android (Flutter)', 'iOS (Swift)']
  },
  {
    id: 11,
    title: 'Soft Skills',
    skills: ['Problem-Solving & Algorithmic Thinking', 'Leadership & Team Management', 'UI/UX Design', 'Public Speaking']
  }
];

const certifications = [
  {
    id: 1,
    title: 'Google Cloud Career Launchpad - Cybersecurity Track',
    organization: 'Google Cloud',
    date: 'May 21, 2025',
    verificationLink: 'https://www.credly.com/badges/1b40e2a7-1bce-4786-89ac-9fb4e0126b64'
  },
  {
    id: 2,
    title: 'Machine Learning Fundamentals',
    organization: 'Infosys Springboard',
    date: 'May 9, 2025',
    verificationLink: 'https://verify.onwingspan.com/'
  },
  {
    id: 3,
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    organization: 'AWS Academy',
    date: 'May 6, 2025',
    verificationLink: 'https://www.credly.com/badges/ac7c4a9a-012d-4c61-8cb7-40ffa64b1f71/print'
  },
  {
    id: 4,
    title: 'Spark SQL & Hadoop (For Data Science)',
    organization: 'Udemy',
    date: 'December 2024 - February 2025',
    verificationLink: 'https://www.udemy.com/certificate/UC-e184a0c3-1ded-42fa-89a9-267f87aa39b9/'
  },
  {
    id: 5,
    title: 'Digital Forensics with Kali Linux',
    organization: 'Infosys Springboard',
    date: 'November 24, 2025',
    verificationLink: 'https://verify.onwingspan.com/'
  },
  {
    id: 6,
    title: 'Lanquill Level 2 certification in English Language',
    organization: 'Lanquill',
    date: 'August 7, 2023',
    verificationLink: '/c16.png'
  }
];

const experiences = [
  {
    company: 'Octanet Services Pvt. Ltd.',
    role: 'Full-Stack Web Developer Intern',
    period: 'September 2024 - November 2024',
    description: 'Developed full-stack web applications using HTML, CSS, JavaScript, Node.js, Express.js. Managed databases with MongoDB, MySQL and optimized API integration. Focused on responsive web design, debugging, and version control (Git, GitHub).',
    verificationLink: 'https://drive.google.com/drive/mobile/folders/1u0x4hys1l09uhQo21TH5taeOtpqjiga4'
  },
  {
    company: 'Oasis Infobyte - AICTE OIB-SIP',
    role: 'Web Development & UI/UX Design Intern',
    period: 'September 2024 - October 2024',
    description: 'Specialized in Web Development & UI/UX Design. Gained experience in front-end & back-end technologies, project management, and problem-solving. Recognized as a Star Performer for contributions to web development projects.',
    verificationLink: 'https://drive.google.com/drive/mobile/folders/1CmX70Nlgosanr-AP3fpW-cXm247lqSB9'
  },
  {
    company: 'CodeVertex',
    role: 'Cybersecurity Intern',
    period: 'June 2024 - August 2024',
    description: 'Developed secure web applications and implemented UI/UX optimizations. Conducted penetration testing, vulnerability assessments, and cybersecurity implementations. Worked on data security strategies, encryption, and access control.',
    verificationLink: 'https://drive.google.com/drive/mobile/folders/1_RJmyf5eZAxOc3_n3tOG9fT_T5-n65-2'
  }
];

const projects = [
  {
    id: 6,
    title: 'Neuromorphic Multi-Modal Fake Media Detection System using Spiking Neural Networks with AI Content Identification and News Verification',
    shortTitle: 'Neuromorphic Multi-Modal Fake Media Detection',
    image: '/P6.png',
    period: '2025 - 2026',
    category: 'AI/ML • Neuromorphic Computing • Deepfake Detection • Multi-Modal AI • Spiking Neural Networks • Content Verification',
    categories: ['ML', 'Cybersecurity', 'Web'],
    overview: 'A multi-modal AI system designed to identify manipulated and synthetic media across images, videos, and news content using Spiking Neural Networks and intelligent content verification techniques.',
    description: 'A multi-modal AI system designed to identify manipulated and synthetic media across images, videos, and news content using Spiking Neural Networks and intelligent content verification techniques. The system focuses on multi-modal fake media detection, deepfake identification, visual artifact analysis, AI-generated synthetic content detection, and automated news verification pipelines. Built on neuromorphic computing principles, the architecture utilizes event-driven Spiking Neural Networks to analyze complex temporal audio-visual patterns and cross-modal synchronization. The platform integrates image analysis, video frame forensics, and news text verification to detect subtle manipulation cues and evaluate source credibility.',
    keyCapabilities: [
      'Multi-modal fake media detection',
      'Image analysis and synthetic artifact detection',
      'Video analysis with temporal consensus tracking',
      'AI-generated and manipulated content identification',
      'News and content verification with source credibility evaluation',
      'Spiking Neural Network-based temporal analysis',
      'Neuromorphic computing approach for event-driven evaluation'
    ],
    technologies: [
      'Python',
      'PyTorch',
      'snnTorch',
      'Norse',
      'Spiking Neural Networks',
      'Machine Learning',
      'Deep Learning',
      'Multi-Modal AI',
      'AWS EC2',
      'TenSEAL'
    ],
    images: [
      {
        src: '/projects/neuromorphic/neuromorphic-detection-verdict.png',
        alt: 'Neuromorphic detection system interface displaying source image analysis, AI-generated verdict, and multi-signal forensic summary',
        caption: 'Source Image Analysis & AI-Generated Verdict with Multi-Signal Forensic Summary'
      },
      {
        src: '/projects/neuromorphic/video-deepfake-snn-analysis.png',
        alt: 'Video deepfake detection interface analyzing synthetic video frames with Neuromorphic SNN engine showing 91% confidence',
        caption: 'Video Deepfake Detection — Neuromorphic SNN Analysis & Synthetic Media Identification'
      },
      {
        src: '/projects/neuromorphic/truth-lens-news-verification.png',
        alt: 'Truth Lens multi-layer forensics interface for text, URL, and news verification showing credibility verdict and domain trust',
        caption: 'Truth Lens — Multi-Layer News Forensics, Entity Analysis & Source Credibility Verification'
      },
      {
        src: '/projects/neuromorphic/global-verdict-multimodal-fusion.png',
        alt: 'Global verdict and multi-modal fusion panel displaying verdict confidence gauge, relative signal contribution, and model attribution radar',
        caption: 'Global Verdict & Multi-Modal Fusion — Signal Contribution & Model Attribution Radar'
      },
      {
        src: '/projects/neuromorphic/snn-spiking-dynamics.png',
        alt: 'Neuromorphic spiking dynamics panel showing spike raster plot, density estimation, membrane potential trace, and SNN energy consumption log',
        caption: 'Neuromorphic Spiking Dynamics (SNN) — Spike Raster Plot, Density Estimation & Membrane Potential'
      },
      {
        src: '/projects/neuromorphic/frequency-statistical-artifacts.png',
        alt: 'Frequency and statistical artifacts panel showing FFT spectrum, frequency artifact heatmap, and pixel distribution histogram',
        caption: 'Frequency & Statistical Forensics — FFT Spectrum, Artifact Heatmap & Texture Repetition Analysis'
      },
      {
        src: '/projects/neuromorphic/raw-forensic-evidence.png',
        alt: 'Raw forensic evidence table detailing multi-signal metrics, SNN efficiency in picojoules per spike, and consistency verification checks',
        caption: 'Raw Forensic Evidence — Multi-Signal Numerical Metrics & SNN Efficiency (100.00 pJ/spike)'
      },
      {
        src: '/projects/neuromorphic/synthid-chain-of-custody.png',
        alt: 'SynthID digital watermark verification, metadata anomaly analysis, and cryptographic chain-of-custody session hashes',
        caption: 'SynthID Verification, Metadata Anomaly Analysis & Cryptographic Chain of Custody'
      },
      {
        src: '/projects/neuromorphic/forensic-methodology-pipeline.png',
        alt: 'Forensic analysis methodology pipeline detailing image ingestion, ResNet-50 CNN, SNN spike-train encoding, and FFT frequency analysis',
        caption: 'Forensic Analysis Methodology — Ingestion, Custom CNN, Neuromorphic SNN & FFT Stages'
      },
      {
        src: '/projects/neuromorphic/forensic-reporting-suite.png',
        alt: 'Forensic reporting suite generating court-admissible ISO-standard PDF analysis documents and immutable shareable links',
        caption: 'Forensic Reporting Suite — ISO-Standard PDF Export & Immutable Shareable Audit Links'
      }
    ],
    demoUrl: 'https://neuromorphic-fake-media-detection-s.vercel.app/'
  },
  {
    id: 1,
    title: 'CryptaNet: Privacy-Preserving Explainable AI for Supply Chain Anomaly Detection on a Permissioned Blockchain',
    image: '/P1.png',
    description: 'Developed secure supply chain monitoring system using Hyperledger Fabric permissioned blockchain. Implemented Isolation Forest ML algorithm achieving real-time anomaly detection and automated threat identification. Created SHAP-based explainable AI layer providing transparent, human-readable explanations for detected anomalies. Ensured data privacy through AES and SHA-256 cryptographic operations. Built full-stack solution with React.js dashboard and Python/Flask backend. Developed Go smart contracts enabling immutable transaction logging. Facilitated collaborative threat intelligence sharing across supply chain partners.',
    period: 'April 2025 - July 2025'
  },
  {
    id: 2,
    title: 'HoneyChain: IoT Honeypot with Blockchain-Verified Threat Intelligence',
    image: '/P2.png',
    description: 'Built distributed IoT honeypot network using ESP32 devices to emulate vulnerable IoT devices. Captured real-time attack vectors with 85% classification accuracy. Implemented blockchain-based immutable logging system for tamper-proof threat intelligence sharing. Enhanced data integrity across organizations through blockchain verification. Developed AI/ML models using Python and TensorFlow for automated threat pattern analysis. Created predictive attack detection system on blockchain-verified data.',
    period: 'March 2025 - May 2025'
  },
  {
    id: 3,
    title: 'Intelligent Driver Monitoring System',
    image: '/P3.png',
    description: 'Built real-time web application using computer vision and machine learning. Monitored driver alertness through eye-tracking and head position analysis. Implemented solution using Python, OpenCV, and TensorFlow. Developed real-time alertness detection algorithms. Created user-friendly interface for monitoring results.',
    period: '2024 - 2025'
  },
  {
    id: 4,
    title: 'Innovative Web Compiler (TypeScript & React.js)',
    image: '/P4.png',
    description: 'Designed online code compiler supporting multiple programming constructs. Developed lexical analysis and syntax parsing components. Implemented AST generation and runtime interpretation. Integrated real-time error detection and feedback system. Enhanced coding experience through intuitive user interface. Built using TypeScript and React.js for robust performance.',
    period: '2024 - 2025'
  },
  {
    id: 5,
    title: 'Permutation Engine: A Scalable, Multi-Algorithm Solver with Interactive 3D Rendering',
    image: '/P5.png',
    description: 'This project is a 3D interactive Rubik\'s Cube solver created for the AeroHack\'25 hackathon. The main challenge was to design an algorithm that could solve any scrambled 3x3 cube. The solution is a sophisticated web application that not only solves the cube but also provides real-time analytics and a full 3D visualization. The solver supports multiple algorithms, including Kociemba, Two-Phase, and Layer-by-Layer, and can dynamically select the most efficient one based on the scramble\'s complexity. Key features include a scalable architecture to support different cube sizes (from 2x2 to 4x4), a mobile-responsive design, and extensive accessibility features like screen reader support and keyboard navigation. The system also boasts an advanced analytics dashboard that tracks metrics like solution time, move optimality, permutation cycles, and the status of solving stages like Cross and F2L pairs. The project stands out for its production-ready quality, educational value, technical excellence in combining advanced algorithms with modern web graphics, and a strong focus on user experience. Future plans include integrating machine learning, adding more puzzle types like Pyraminx and Megaminx, and developing a multiplayer mode.',
    period: 'August 3rd, 2025',
    githubUrl: 'https://github.com/Dhanushj213/PermutationEngine', // Added link
    demoUrl: 'https://permutation-engine.vercel.app/' // Added link
  }
];

const extraGalleryImages = [
  "/extra/1003.JPG", "/extra/1015.JPG", "/extra/13689742_265434453848681_1500397308_n.jpg", "/extra/13714287_265434447182015_1995013426_n.jpg",
  "/extra/20230704_121150.jpg", "/extra/20230806_141755(1).jpg", "/extra/20231207_170926.jpg", "/extra/20231207_171145.jpg",
  "/extra/20231207_180911.jpg", "/extra/20231221_173236.jpg", "/extra/20240914_114748.jpg", "/extra/20240914_125109.jpg",
  "/extra/20241020_121425.jpg", "/extra/20241020_123824.jpg", "/extra/20241118_214804.jpg", "/extra/20241121_130855.jpg",
  "/extra/20241203_143756.jpg", "/extra/20241207_165727.jpg", "/extra/20241211_183318.jpg", "/extra/20241211_202127.jpg",
  "/extra/20241217_201527.jpg", "/extra/20241218_112411.jpg", "/extra/20241218_182653.jpg", "/extra/20241219_184712.jpg",
  "/extra/20241224_172810.jpg", "/extra/20251128_134543(1).jpg", "/extra/810.JPG", "/extra/825.JPG",
  "/extra/DSCN0550.JPG", "/extra/DSCN0710.JPG", "/extra/DSCN0711.JPG", "/extra/DSCN3009.JPG", "/extra/DSCN3747.JPG",
  "/extra/DSCN3771.JPG", "/extra/DSCN6830.JPG", "/extra/DSCN7306.JPG", "/extra/DSCN8125.JPG", "/extra/DSCN8580.JPG",
  "/extra/DSCN8586.JPG", "/extra/DSCN9645.JPG", "/extra/DSCN9652.JPG", "/extra/DSC_3162.JPG", "/extra/DSC_3186.JPG",
  "/extra/DSC_3192.JPG", "/extra/DSC_3199(1).jpg", "/extra/DSC_3316.JPG", "/extra/EOSR0131(1).jpg",
  "/extra/IMG-20231219-WA0018.jpg", "/extra/IMG-20241119-WA0064.jpg", "/extra/IMG-20241121-WA0199.jpg",
  "/extra/IMG-20241205-WA0026.jpg", "/extra/IMG-20241217-WA0025.jpg", "/extra/IMG-20241217-WA0035.jpg",
  "/extra/IMG-20241225-WA0087.jpg", "/extra/IMG-20251122-WA1054.jpg", "/extra/IMG-20251206-WA0033.jpg",
  "/extra/IMG_1761.jpg", "/extra/IMG_20140727_180816.jpg", "/extra/IMG_20230704_122043.jpg", "/extra/P6165223.JPG",
  "/extra/_DSC0168.jpg", "/extra/a1.JPG", "/extra/a2.JPG", "/extra/a3.JPG", "/extra/a4.JPG",
  "/extra/a5.JPG", "/extra/a6.JPG", "/extra/a7.JPG", "/extra/a8.JPG"
];

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showIntro, setShowIntro] = useState(true);
  const [introPlayed, setIntroPlayed] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Dedicated /research page direct access
  if (currentPath === '/research' || window.location.hash === '#/research') {
    return (
      <>
        <ResearchPage
          onBackToPortfolio={() => {
            window.history.pushState({}, '', '/');
            setCurrentPath('/');
            setSelectedProfile('recruiter');
            setShowIntro(false);
            setIntroPlayed(true);
          }}
          contactInfo={contactInfo}
        />
        <SpeedInsights />
      </>
    );
  }

  // Show intro video overlay before profile selection
  if (showIntro && !introPlayed) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100dvh', // Dynamic viewport height
          background: 'black',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
        onClick={() => {
          setShowIntro(false);
          setIntroPlayed(true);
        }}
      >
        <video
          src="/video.mp4"
          autoPlay
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Ensure full video is visible
          onEnded={() => {
            setShowIntro(false);
            setIntroPlayed(true);
          }}
          onError={() => {
            console.error("Video failed to play");
            setShowIntro(false);
            setIntroPlayed(true);
          }}
        />
        <button
          style={{
            position: 'absolute',
            bottom: 'max(2rem, env(safe-area-inset-bottom))', // Safe area respected
            right: 'max(2rem, env(safe-area-inset-right))',
            padding: '10px 24px',
            background: 'rgba(229, 9, 20, 0.8)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            zIndex: 10000,
            backdropFilter: 'blur(4px)',
            transition: 'background 0.2s'
          }}
          onClick={(e) => {
            e.stopPropagation();
            setShowIntro(false);
            setIntroPlayed(true);
          }}
          onMouseEnter={(e) => e.target.style.background = '#E50914'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(229, 9, 20, 0.8)'}
        >
          Skip Intro &rarr;
        </button>
      </div>
    );
  }

  if (!selectedProfile) {
    return <>
      <ProfileSelection onProfileSelect={setSelectedProfile} />
      <SpeedInsights />
    </>;
  }

  if (selectedProfile === 'cybersecurity') {
    return (
      <>
        <DhanushOSTerminal
          onBack={() => {
            setSelectedProfile(null);
            setShowIntro(false);
            setIntroPlayed(true);
          }}
          projects={projects}
          skills={skills}
          experiences={experiences}
          certifications={certifications}
          contactInfo={contactInfo}
        />
        <SpeedInsights />
      </>
    );
  }

  if (['developer'].includes(selectedProfile)) {
    return (
      <>
        <DevToolsProfile
          projects={projects}
          skills={skills}
          experiences={experiences}
          certifications={certifications}
          contactInfo={contactInfo}
          onBack={() => {
            setSelectedProfile(null);
            setShowIntro(false);
            setIntroPlayed(true);
          }}
        />
        <SpeedInsights />
      </>
    );
  }

  if (['recruiter'].includes(selectedProfile)) {
    return (
      <>
        <ErrorBoundary>
          <div className="app" style={{ height: '100vh', overflowY: 'auto', background: '#141414' }}>
            <Navbar
              onBackToProfile={() => {
                setSelectedProfile(null);
                setShowIntro(false);
                setIntroPlayed(true);
              }}
            />
            <HeroSection />
            <AboutNew />

            <div className="relative z-20 bg-[#141414]">
              <MyList />
              <SkillsLibrary skills={skills} />

              {/* Featured Research & Conference Achievement Section */}
              <ResearchSection />

              <TrendingNow experiences={experiences} />
              <ContinueWatching projects={projects} />
              <Certifications certifications={certifications} />
              <Gallery />
              <Languages />

              <Awards />


              <ScrollingGallery title="Co-Curricular Highlights - Activities & Achievements" items={extraGalleryImages} />

              <div id="contactfooter">
                <ContactFooter contactInfo={contactInfo} />
              </div>
            </div>
          </div>
        </ErrorBoundary>
        <SpeedInsights />
      </>
    );
  }

  if (selectedProfile === 'artist') {
    return (
      <>
        <ArtistProfile
          projects={projects}
          skills={skills}
          experiences={experiences}
          certifications={certifications}
          contactInfo={contactInfo}
          aboutContent={aboutContent}
          extraGalleryImages={extraGalleryImages}
          onBack={() => {
            setSelectedProfile(null);
            setShowIntro(false);
            setIntroPlayed(true);
          }}
        />
        <SpeedInsights />
      </>
    );
  }

  // Placeholder for other profiles
  return (
    <>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#141414',
        color: '#fff',
        fontSize: '3rem',
        fontFamily: "'Bebas Neue', sans-serif",
        letterSpacing: '2px'
      }}>
        <p>Coming Soon!!</p>
        <button
          onClick={() => {
            setSelectedProfile(null);
            setShowIntro(false);
            setIntroPlayed(true);
          }}
          style={{
            marginTop: '2rem',
            background: '#E50914',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '0.75rem 1.5rem',
            fontSize: '1.1rem',
            fontFamily: 'inherit',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            transition: 'background 0.2s',
          }}
        >
          &#8592; Back to Profile
        </button>
      </div>
      <SpeedInsights />
    </>
  );
}

export default App;
