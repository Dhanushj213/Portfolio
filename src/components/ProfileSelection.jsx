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
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <h1 className="profile-title" style={{
        color: '#FFFFFF',
        fontSize: '3rem',
        marginBottom: '50px',
        fontWeight: 'normal',
        fontFamily: "'Bebas Neue', sans-serif"
      }}>
        Who's Watching?
      </h1>
      <div className="profiles-container" style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        flexWrap: 'wrap',
        maxWidth: '1200px'
      }}>
        {profiles.map(profile => (
          <div
            key={profile.id}
            className="profile-card"
            onClick={() => onProfileSelect(profile.id)}
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              padding: '20px'
            }}
          >
            <div className="profile-icon" style={{
              width: '120px',
              height: '120px',
              borderRadius: '8px',
              backgroundColor: '#333',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#E50914',
              fontSize: '3rem',
              marginBottom: '15px',
              transition: 'all 0.3s ease',
              border: '3px solid transparent'
            }}>
              {profile.icon}
            </div>
            <div className="profile-name" style={{
              color: '#FFFFFF',
              fontSize: '1.4rem',
              fontWeight: 'bold',
              marginBottom: '8px'
            }}>
              {profile.name}
            </div>
            <div className="profile-description" style={{
              color: '#808080',
              fontSize: '0.9rem'
            }}>
              {profile.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSelection;
