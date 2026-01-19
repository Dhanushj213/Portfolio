import React from 'react';
import { FaUser, FaShieldAlt, FaCode, FaProjectDiagram } from 'react-icons/fa';

const ProfileSelection = ({ onProfileSelect }) => {
  const profiles = [
    {
      id: 'recruiter',
      name: 'Recruiter',
      icon: <FaUser />,
      description: 'Comprehensive view for recruiters'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Analyst',
      icon: <FaShieldAlt />,
      description: 'Security-focused projects & skills'
    },
    {
      id: 'developer',
      name: 'Developer',
      icon: <FaCode />,
      description: 'Programming & development focus'
    },
    {
      id: 'manager',
      name: 'Project Manager',
      icon: <FaProjectDiagram />,
      description: 'Leadership & project experience'
    },
    {
      id: 'artist',
      name: 'Artist',
      icon: <FaUser style={{ color: '#E50914' }} />, // You can replace with a more suitable icon
      description: 'Creative works and portfolio'
    }
  ];

  return (
    <div className="profile-selection" style={{
      backgroundColor: '#141414',
      minHeight: '100dvh',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start', // Start from top to prevent cropping
      alignItems: 'center',
      padding: 'max(60px, env(safe-area-inset-top)) 20px max(20px, env(safe-area-inset-bottom)) 20px', // More top padding for visual balance
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch'
    }}>
      <h1 className="profile-title" style={{
        color: '#FFFFFF',
        fontSize: '3rem',
        marginBottom: '40px',
        marginTop: '0', // Reset margin since we have container padding
        fontWeight: 'normal',
        fontFamily: "'Bebas Neue', sans-serif",
        textAlign: 'center'
      }}>
        Who's Watching?
      </h1>
      <div className="profiles-container">
        {profiles.map(profile => (
          <div
            key={profile.id}
            className="profile-card"
            onClick={() => onProfileSelect(profile.id)}
          >
            <div className="profile-icon">
              {profile.icon}
            </div>
            <div className="profile-name">
              {profile.name}
            </div>
            <div className="profile-description">
              {profile.description}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 'auto',
        color: '#666',
        fontSize: '0.8rem',
        letterSpacing: '2px',
        paddingTop: '2rem',
        paddingBottom: 'max(10px, env(safe-area-inset-bottom))', // Respect safe area
        fontFamily: "'Bebas Neue', sans-serif",
        textAlign: 'center',
        width: '100%'
      }}>
        BY DHANUSH J
      </div>
      <style>{`
        .profiles-container {
            display: flex;
            justify-content: center;
            gap: 40px;
            flex-wrap: wrap;
            max-width: 1200px;
            width: 100%;
        }

        .profile-card {
            cursor: pointer;
            text-align: center;
            transition: transform 0.3s ease;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 200px; /* Fixed width for better alignment */
        }

        .profile-icon {
            width: 120px;
            height: 120px;
            border-radius: 8px;
            background-color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #E50914;
            font-size: 3rem;
            margin-bottom: 15px;
            transition: all 0.3s ease;
            border: 3px solid transparent;
        }

        .profile-name {
            color: #FFFFFF;
            font-size: 1.4rem;
            font-weight: bold;
            margin-bottom: 8px;
        }

        .profile-description {
            color: #808080;
            font-size: 0.9rem;
            line-height: 1.2;
        }

        .profile-card:hover .profile-icon {
            border-color: #FFFFFF;
            background-color: black;
        }
        
        .profile-card:hover {
            transform: scale(1.05);
        }

        @media (max-width: 768px) {
            .profiles-container {
                display: grid;
                grid-template-columns: repeat(2, 1fr); /* 2 Columns on mobile */
                gap: 15px;
                padding: 0 10px;
            }

            .profile-card {
                width: 100%; /* Full width of grid cell */
                padding: 10px;
            }

            .profile-icon {
                width: 80px; /* Smaller icons */
                height: 80px;
                font-size: 2rem;
                margin-bottom: 10px;
            }

            .profile-name {
                font-size: 1rem;
                margin-bottom: 4px;
            }

            .profile-description {
                font-size: 0.75rem;
                display: block; /* Keep visible as requested, but smaller */
            }

            .profile-title {
                margin-bottom: 2rem !important; /* Reduce header margin */
                font-size: 2rem !important;
            }
        }
        

      `}</style>
    </div>
  );
};

export default ProfileSelection;
