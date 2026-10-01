import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const ContinueWatching = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categories = ['All', 'Web', 'Cybersecurity', 'ML', 'Blockchain'];

  // Keyword mapping allowing multiple categories per project
  const getCategories = (project) => {
    if (project.categories && project.categories.length > 0) return project.categories;
    const text = (project.title + (project.shortTitle || '') + project.description).toLowerCase();
    const cats = [];

    // Explicit overrides for specific projects if needed, or robust keyword matching
    if (text.includes('blockchain') || text.includes('crypto') || text.includes('hyperledger')) cats.push('Blockchain');
    if (text.includes('security') || text.includes('honeypot') || text.includes('threat') || text.includes('cyber')) cats.push('Cybersecurity');
    if (text.includes('machine learning') || text.includes('ai') || text.includes('computer vision') || text.includes('tensorflow') || text.includes('neuromorphic') || text.includes('spiking')) cats.push('ML');
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
    setActiveImageIndex(0);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
    setShowModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

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
              <h3 className="card-title" title={project.title}>
                {project.shortTitle || project.title}
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
      {showModal && selectedProject && typeof document !== 'undefined' && createPortal(
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
          zIndex: 999999,
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
              type="button"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                cursor: 'pointer',
                zIndex: 50,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E50914';
                e.currentTarget.style.borderColor = '#E50914';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                closeModal();
              }}
              aria-label="Close modal"
              title="Close modal (Esc)"
            >
              &times;
            </button>
            <div className="modal-body" style={{
              padding: '2rem'
            }}>
              {/* Category Badge if available */}
              {selectedProject.category && (
                <div style={{
                  display: 'inline-block',
                  color: '#00D4AA',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(0, 212, 170, 0.1)',
                  border: '1px solid rgba(0, 212, 170, 0.25)'
                }}>
                  {selectedProject.category}
                </div>
              )}

              {/* Multi-Image Gallery or Single Image */}
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <div className="project-gallery-container" style={{ marginBottom: '1.75rem' }}>
                  {/* Main Active Image Display */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '360px',
                    backgroundColor: '#0a0a0a',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img
                      src={selectedProject.images[activeImageIndex].src}
                      alt={selectedProject.images[activeImageIndex].alt || selectedProject.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        transition: 'all 0.3s ease'
                      }}
                    />

                    {/* Prev/Next arrows if multiple images */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
                          }}
                          style={{
                            position: 'absolute',
                            left: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(0, 0, 0, 0.65)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: '#fff',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.2s',
                            zIndex: 2
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E50914'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.65)'}
                          aria-label="Previous image"
                        >
                          &#10094;
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
                          }}
                          style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(0, 0, 0, 0.65)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: '#fff',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.2s',
                            zIndex: 2
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E50914'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.65)'}
                          aria-label="Next image"
                        >
                          &#10095;
                        </button>
                      </>
                    )}

                    {/* Open full image link */}
                    <a
                      href={selectedProject.images[activeImageIndex].src}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        padding: '4px 10px',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        borderRadius: '4px',
                        color: '#fff',
                        fontSize: '0.75rem',
                        textDecoration: 'none',
                        border: '1px solid rgba(255,255,255,0.2)',
                        zIndex: 2
                      }}
                    >
                      Full Size &#8599;
                    </a>
                  </div>

                  {/* Caption & Counter */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.6rem 0.2rem',
                    fontSize: '0.82rem',
                    color: '#9ca3af',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    <span style={{ color: '#e5e5e5', fontWeight: '500' }}>
                      {selectedProject.images[activeImageIndex].caption || selectedProject.images[activeImageIndex].alt}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#888' }}>
                      {activeImageIndex + 1} / {selectedProject.images.length}
                    </span>
                  </div>

                  {/* Thumbnail Navigation Strip */}
                  {selectedProject.images.length > 1 && (
                    <div style={{
                      display: 'flex',
                      gap: '0.6rem',
                      marginTop: '0.75rem',
                      overflowX: 'auto',
                      paddingBottom: '0.4rem',
                      scrollbarWidth: 'none'
                    }}>
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          style={{
                            flex: '0 0 90px',
                            height: '56px',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            border: activeImageIndex === idx ? '2px solid #E50914' : '1px solid rgba(255, 255, 255, 0.15)',
                            opacity: activeImageIndex === idx ? 1 : 0.6,
                            padding: 0,
                            backgroundColor: '#000',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            transform: activeImageIndex === idx ? 'scale(1.03)' : 'scale(1)'
                          }}
                          title={img.caption || `View image ${idx + 1}`}
                        >
                          <img
                            src={img.src}
                            alt={img.alt || `Thumbnail ${idx + 1}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div style={{
                  width: '100%',
                  height: '240px',
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
              )}

              {/* Title & Period */}
              <h2 style={{
                color: '#FFFFFF',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                lineHeight: '1.25',
                marginBottom: '0.5rem',
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: '0.5px'
              }}>
                {selectedProject.title}
              </h2>
              <p style={{
                color: '#808080',
                fontSize: '0.9rem',
                marginBottom: '1.25rem'
              }}>
                {selectedProject.period}
              </p>

              {/* Short Overview Callout */}
              {selectedProject.overview && (
                <div style={{
                  padding: '0.85rem 1.1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderLeft: '3px solid #E50914',
                  borderRadius: '0 6px 6px 0',
                  marginBottom: '1.25rem',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  fontWeight: '500'
                }}>
                  {selectedProject.overview}
                </div>
              )}

              {/* Detailed Description */}
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

              {/* Key Capabilities */}
              {selectedProject.keyCapabilities && selectedProject.keyCapabilities.length > 0 && (
                <div style={{ marginTop: '1.5rem', marginBottom: '1.25rem' }}>
                  <h4 style={{
                    color: '#FFFFFF',
                    fontSize: '1.1rem',
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: '1px',
                    margin: '0 0 0.75rem 0'
                  }}>
                    Key Capabilities & Scope
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '0.6rem'
                  }}>
                    {selectedProject.keyCapabilities.map((cap, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: '#d1d5db' }}>
                        <span style={{ color: '#00D4AA', flexShrink: 0, fontWeight: 'bold' }}>&#10003;</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technology Stack */}
              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
                  <h4 style={{
                    color: '#FFFFFF',
                    fontSize: '1.1rem',
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: '1px',
                    margin: '0 0 0.6rem 0'
                  }}>
                    Technology Stack
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          fontSize: '0.8rem',
                          color: '#e5e5e5'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
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
        </div>,
        document.body
      )}
    </section>
  );
};

export default ContinueWatching;
