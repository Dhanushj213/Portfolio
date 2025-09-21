import React from 'react';
import { FaShieldAlt, FaCode, FaCloud, FaRobot } from 'react-icons/fa';

const MyList = () => {
  const myListItems = [
    {
      id: 1,
      title: 'Cybersecurity',
      icon: <FaShieldAlt />,
      description: 'Penetration Testing, Network Security, Cryptography, Firewalls & Intrusion Detection Systems',
      color: '#E50914'
    },
    {
      id: 2,
      title: 'Full-Stack Development',
      icon: <FaCode />,
      description: 'MERN Stack, LAMP Stack, RESTful API development, React.js, Node.js',
      color: '#00D4AA'
    },
    {
      id: 3,
      title: 'Cloud & DevOps',
      icon: <FaCloud />,
      description: 'AWS (EC2, S3, Lambda), Docker, Cloud Infrastructure Management',
      color: '#FF9500'
    },
    {
      id: 4,
      title: 'Machine Learning',
      icon: <FaRobot />,
      description: 'Python, TensorFlow, Data Science, AI Model Development',
      color: '#007AFF'
    }
  ];

  return (
    <section id="mylist" className="content-row" style={{
      padding: '2rem 4%',
      backgroundColor: '#141414'
    }}>
      <h2 className="row-title" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.8rem',
        marginBottom: '1rem',
        color: '#FFFFFF'
      }}>
        My List
      </h2>
      <div className="horizontal-scroll" style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '1rem',
        paddingBottom: '1rem',
        scrollbarWidth: 'thin'
      }}>
        {myListItems.map(item => (
          <div key={item.id} className="card" style={{
            minWidth: '280px',
            backgroundColor: '#181818',
            borderRadius: '4px',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            borderLeft: `4px solid ${item.color}`
          }}>
            <div className="card-content" style={{
              padding: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  color: item.color,
                  fontSize: '1.5rem',
                  marginRight: '0.8rem'
                }}>
                  {item.icon}
                </div>
                <h3 className="card-title" style={{
                  fontWeight: 'bold',
                  margin: 0,
                  color: '#FFFFFF',
                  fontSize: '1.1rem'
                }}>
                  {item.title}
                </h3>
              </div>
              <p className="card-text" style={{
                color: '#e5e5e5',
                fontSize: '0.9rem',
                lineHeight: '1.4',
                margin: 0
              }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyList;
