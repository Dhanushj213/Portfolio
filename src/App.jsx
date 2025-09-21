import DhanushOSTerminal from './components/DhanushOSTerminal';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import PineappleOS from './pineappleos/PineappleOS';
import CybersecurityAnalystProfile from './components/CybersecurityAnalystProfile';
import { useState } from 'react';
import './App.css';
import ProfileSelection from './components/ProfileSelection';
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
import ContactFooter from './components/ContactFooter';

const contactInfo = {
  email: 'jdhanush213@gmail.com',
  phone: '+918217471928',
  location: 'Bengaluru, Karnataka, India',
  linkedin: 'https://www.linkedin.com/in/dhanush-j-a976ab26b',
  github: 'https://github.com/dhanushj213',
  dob: 'January 2nd, 2003'
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
      period: 'August 3rd, 2025'
      }
    ];

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showIntro, setShowIntro] = useState(true);
  const [introPlayed, setIntroPlayed] = useState(false);

  // Show intro video overlay before profile selection
  if (showIntro && !introPlayed) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'black',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <video
          src="/video.mp4"
          autoPlay
          muted
          playsInline
          style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
          onEnded={() => {
            setShowIntro(false);
            setIntroPlayed(true);
          }}
        />
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
      <div>
        <button
          onClick={() => {
            setSelectedProfile(null);
            setShowIntro(false);
            setIntroPlayed(true);
          }}
          style={{
            position: 'fixed',
            top: 24,
            left: 24,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.7)',
            color: '#39FF14',
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
        <DhanushOSTerminal />
        <SpeedInsights />
      </div>
    );
  }

  if (selectedProfile === 'developer') {
    return (
      <>
        <PineappleOS
          projects={projects}
          skills={skills}
          experiences={experiences}
          certifications={certifications}
          contactInfo={contactInfo}
          menuBarProps={{
            onBackToProfile: () => {
              setSelectedProfile(null);
              setShowIntro(false);
              setIntroPlayed(true);
            }
          }}
        />
        <SpeedInsights />
      </>
    );
  }

  if (selectedProfile === 'recruiter') {
    return (
      <>
        <div className="app" style={{ height: '100vh', overflowY: 'auto', background: '#141414' }}>
          <Navbar
            onBackToProfile={() => {
              setSelectedProfile(null);
              setShowIntro(false);
              setIntroPlayed(true);
            }}
          />
          <HeroSection aboutContent={aboutContent} contactInfo={contactInfo} />
          <MyList />
          <SkillsLibrary skills={skills} />
          <TrendingNow experiences={experiences} />
          <ContinueWatching projects={projects} />
          <Certifications certifications={certifications} />
          <Gallery />
          <Languages />
          <Awards />
          <div id="contactfooter">
            <ContactFooter contactInfo={contactInfo} />
          </div>
        </div>
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
        fontSize: '2rem'
      }}>
        <p>Profile view for "{selectedProfile}" is coming soon.</p>
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
