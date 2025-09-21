import React, { useState } from 'react';

const ContinueWatching = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <section id="projects" className="content-row" style={{
      padding: '2rem 4%',
      backgroundColor: '#141414'
    }}>
      <h2 className="row-title" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.8rem',
        marginBottom: '1rem',
        color: '#FFFFFF'
      }}>
        Continue Watching - Featured Projects
      </h2>
      <div className="horizontal-scroll" style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '1rem',
        paddingBottom: '1rem',
        scrollbarWidth: 'thin'
      }}>
        {projects.map(project => (
          <div
            key={project.id}
            className="card project-card"
            onClick={() => openModal(project)}
            style={{
              minWidth: '250px',
              backgroundColor: '#181818',
              borderRadius: '4px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
          >
            <div className="project-image" style={{
              width: '100%',
              height: '140px',
              backgroundColor: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#E50914',
              fontSize: '2rem',
              overflow: 'hidden'
            }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className="card-content" style={{
              padding: '1rem'
            }}>
              <h3 className="card-title" style={{
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                color: '#FFFFFF',
                fontSize: '1rem',
                lineHeight: '1.3'
              }}>
                {project.title}
              </h3>
              <p className="card-text" style={{
                color: '#808080',
                fontSize: '0.8rem',
                margin: 0
              }}>
                {project.period}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {showModal && selectedProject && (
        <div className="modal-backdrop" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
          padding: '2rem'
        }} onClick={closeModal}>
          <div className="modal-content" style={{
            backgroundColor: '#181818',
            borderRadius: '4px',
            width: '90%',
            maxWidth: '800px',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative'
          }} onClick={e => e.stopPropagation()}>
            <button
              className="modal-close"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 10
              }}
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="modal-body" style={{
              padding: '2rem'
            }}>
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#333',
                borderRadius: '4px',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E50914',
                fontSize: '3rem',
                overflow: 'hidden'
              }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h2 style={{
                color: '#FFFFFF',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                fontFamily: "'Bebas Neue', sans-serif"
              }}>
                {selectedProject.title}
              </h2>
              <p style={{
                color: '#808080',
                fontSize: '0.9rem',
                marginBottom: '1rem'
              }}>
                {selectedProject.period}
              </p>
              <div style={{
                color: '#e5e5e5',
                fontSize: '0.95rem',
                lineHeight: '1.6'
              }}>
                {selectedProject.description.split('. ').map((sentence, index) => (
                  <p key={index} style={{ marginBottom: '0.8rem' }}>
                    {sentence.trim()}{sentence.trim().endsWith('.') ? '' : '.'}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContinueWatching;
