import React, { useState } from 'react';

const ContinueWatching = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web', 'Cybersecurity', 'ML', 'Blockchain'];

  // Keyword mapping allowing multiple categories per project
  const getCategories = (project) => {
    const text = (project.title + project.description).toLowerCase();
    const cats = [];

    // Explicit overrides for specific projects if needed, or robust keyword matching
    if (text.includes('blockchain') || text.includes('crypto') || text.includes('hyperledger')) cats.push('Blockchain');
    if (text.includes('security') || text.includes('honeypot') || text.includes('threat') || text.includes('cyber')) cats.push('Cybersecurity');
    if (text.includes('machine learning') || text.includes('ai') || text.includes('computer vision') || text.includes('tensorflow')) cats.push('ML');
    if (text.includes('react') || text.includes('web')) cats.push('Web');

    return cats.length > 0 ? cats : ['Other'];
  };

  const filteredProjects = projects.filter(p => {
    if (filter === 'All') return true;
    const projectCats = getCategories(p);
    return projectCats.includes(filter);
  });

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
        color: '#FFFFFF',
        letterSpacing: '1px'
      }}>
        FEATURED PROJECTS
      </h2>

      {/* Filters */}
      <div className="filters" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={filter === cat ? 'netflix-button primary-button' : 'netflix-button secondary-button'}
            style={{
              padding: '6px 20px',
              fontSize: '0.9rem',
              margin: 0,
              backgroundColor: filter === cat ? '#E50914' : 'rgba(255, 255, 255, 0.1)',
              border: filter === cat ? '1px solid #E50914' : '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '2px', // Netflix style boxy buttons
              fontWeight: '500',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="horizontal-scroll" style={{
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        gap: '1.5rem',
        paddingBottom: '2rem', // Space for hover expansion
        scrollbarWidth: 'none', // Hide scrollbar for cleaner look
        msOverflowStyle: 'none',
        paddingLeft: '0.5rem'
      }}>
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="card project-card"
            onClick={() => openModal(project)}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
              <div className="hover-overlay">
                <div className="play-icon-circle">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">
                {project.title}
              </h3>
              <div className="tech-tags">
                {getCategories(project).slice(0, 3).map((cat, i) => (
                  <span key={i} className="tech-tag">{cat}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .horizontal-scroll::-webkit-scrollbar {
          display: none;
        }

        .project-card {
           min-width: 300px;
           max-width: 300px;
           background-color: #181818;
           border-radius: 4px;
           transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
           cursor: pointer;
           position: relative;
           overflow: hidden;
           border: 1px solid rgba(255,255,255,0.1);
        }

        .project-card:hover {
           transform: scale(1.05) translateY(-5px);
           z-index: 10;
           box-shadow: 0 10px 25px rgba(0,0,0,0.5), 0 0 0 2px rgba(229, 9, 20, 0.8); /* Red glow border */
           background-color: #222;
        }

        .project-image-container {
           width: 100%;
           height: 169px; /* 16:9 Aspect Ratio approx */
           position: relative;
           overflow: hidden;
        }

        .project-img {
           width: 100%;
           height: 100%;
           object-fit: cover;
           transition: transform 0.5s ease;
        }

        .project-card:hover .project-img {
           filter: brightness(0.8);
        }

        .hover-overlay {
           position: absolute;
           inset: 0;
           display: flex;
           align-items: center;
           justify-content: center;
           opacity: 0;
           transition: opacity 0.3s ease;
           background: rgba(0,0,0,0.2);
        }

        .project-card:hover .hover-overlay {
           opacity: 1;
        }

        .play-icon-circle {
           width: 50px;
           height: 50px;
           border-radius: 50%;
           background: rgba(0,0,0,0.6);
           border: 2px solid white;
           display: flex;
           align-items: center;
           justify-content: center;
           color: white;
           font-size: 1.2rem;
           transform: scale(0.8);
           transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .project-card:hover .play-icon-circle {
           transform: scale(1);
           background: #E50914; /* Netflix Red */
           border-color: #E50914;
        }

        .card-content {
           padding: 1rem;
        }

        .card-title {
           font-weight: bold;
           color: white;
           font-size: 1.1rem;
           margin-bottom: 0.5rem;
           white-space: nowrap;
           overflow: hidden;
           text-overflow: ellipsis;
           font-family: 'Bebas Neue', sans-serif;
           letter-spacing: 0.5px;
        }

        .card-meta {
           display: flex;
           align-items: center;
           gap: 0.8rem;
           margin-bottom: 0.8rem;
           font-size: 0.75rem;
           color: #a3a3a3;
           font-weight: 500;
        }

        .match-score {
           color: #46d369; /* Netflix match score green */
           font-weight: bold;
        }

        .hd-badge {
           border: 1px solid rgba(255,255,255,0.4);
           padding: 0 4px;
           border-radius: 2px;
           font-size: 0.65rem;
        }

        .tech-tags {
           display: flex;
           flex-wrap: wrap;
           gap: 0.5rem;
        }

        .tech-tag {
           font-size: 0.7rem;
           color: #e5e5e5;
           position: relative;
        }
        
        .tech-tag:not(:last-child)::after {
           content: "•";
           margin-left: 0.5rem;
           color: #666;
        }
      `}</style>

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
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="netflix-button secondary-button"
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: 'rgba(255,255,255,0.2)'
                    }}
                  >
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>
                )}
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="netflix-button primary-button"
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <i className="fa-solid fa-play"></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContinueWatching;
