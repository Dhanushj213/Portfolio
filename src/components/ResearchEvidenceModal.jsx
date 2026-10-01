import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaTimes, FaExternalLinkAlt, FaAward, FaCamera, FaInfoCircle, FaFileAlt } from 'react-icons/fa';

const ResearchEvidenceModal = ({ isOpen, onClose, initialTab = 'certificate', data }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          backgroundColor: 'rgba(0, 0, 0, 0.88)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            maxHeight: '90vh',
            backgroundColor: '#181818',
            border: '1px solid rgba(229, 9, 20, 0.4)',
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(229, 9, 20, 0.25)',
            color: '#ffffff'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: '#121212'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(229, 9, 20, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E50914',
                  fontSize: '1.2rem',
                  border: '1px solid rgba(229, 9, 20, 0.3)'
                }}
              >
                <FaAward />
              </div>
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: '1.2rem',
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: '1px',
                    color: '#fff'
                  }}
                >
                  NMITCON 2026 — Research Evidence & Media
                </h3>
                <p style={{ margin: 0, fontSize: '0.75rem', color: '#9ca3af' }}>
                  Paper ID 3111 • Nitte Meenakshi Institute of Technology, Bengaluru
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative',
                zIndex: 100
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E50914';
                e.currentTarget.style.borderColor = '#E50914';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="Close modal"
              title="Close modal (Esc)"
            >
              <FaTimes style={{ fontSize: '1.1rem' }} />
            </button>
          </div>

          {/* Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#141414',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              overflowX: 'auto'
            }}
          >
            <button
              onClick={() => setActiveTab('certificate')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                backgroundColor: activeTab === 'certificate' ? '#E50914' : 'rgba(255, 255, 255, 0.05)',
                color: activeTab === 'certificate' ? '#fff' : '#d1d5db',
                transition: 'all 0.2s'
              }}
            >
              <FaAward />
              Official Certificate
            </button>
            <button
              onClick={() => setActiveTab('photo')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                backgroundColor: activeTab === 'photo' ? '#E50914' : 'rgba(255, 255, 255, 0.05)',
                color: activeTab === 'photo' ? '#fff' : '#d1d5db',
                transition: 'all 0.2s'
              }}
            >
              <FaCamera />
              Stage Presentation Ceremony
            </button>
            <button
              onClick={() => setActiveTab('details')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                backgroundColor: activeTab === 'details' ? '#E50914' : 'rgba(255, 255, 255, 0.05)',
                color: activeTab === 'details' ? '#fff' : '#d1d5db',
                transition: 'all 0.2s'
              }}
            >
              <FaInfoCircle />
              Conference & Affiliation Details
            </button>
          </div>

          {/* Modal Body */}
          <div
            style={{
              padding: '1.5rem',
              overflowY: 'auto',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {activeTab === 'certificate' && (
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '560px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
                    backgroundColor: '#fff'
                  }}
                >
                  <img
                    src={data?.evidence?.certificateUrl || '/research/nmitcon-best-presenter-certificate.png'}
                    alt="NMITCON 2026 Best Paper Presenter Certificate - Dhanush J"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </div>

                <div
                  style={{
                    marginTop: '1.25rem',
                    width: '100%',
                    maxWidth: '680px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#fff' }}>
                      Certificate of Appreciation: Awarded "BEST PAPER PRESENTER"
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '2px' }}>
                      Signatories: Dr. Parameshachari B D (Conference Chair) & Dr. H C Nagaraj (Principal, NMIT)
                    </div>
                  </div>
                  <a
                    href={data?.evidence?.certificateUrl || '/research/nmitcon-best-presenter-certificate.png'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '8px 16px',
                      backgroundColor: 'rgba(229, 9, 20, 0.2)',
                      color: '#E50914',
                      border: '1px solid rgba(229, 9, 20, 0.4)',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E50914', e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(229, 9, 20, 0.2)', e.currentTarget.style.color = '#E50914')}
                  >
                    <span>Open Full Image</span>
                    <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'photo' && (
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '720px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
                    backgroundColor: '#000'
                  }}
                >
                  <img
                    src={data?.evidence?.presentationPhotoUrl || '/research/nmitcon-presentation-award.jpg'}
                    alt="Dhanush J receiving Best Paper Presenter certificate at NMITCON 2026"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </div>

                <div
                  style={{
                    marginTop: '1.25rem',
                    width: '100%',
                    maxWidth: '720px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#fff' }}>
                      On-Stage Conferment Ceremony at Nitte Meenakshi Institute of Technology
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '2px' }}>
                      Dhanush J receiving the certificate of appreciation from conference dignitaries.
                    </div>
                  </div>
                  <a
                    href={data?.evidence?.presentationPhotoUrl || '/research/nmitcon-presentation-award.jpg'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '8px 16px',
                      backgroundColor: 'rgba(229, 9, 20, 0.2)',
                      color: '#E50914',
                      border: '1px solid rgba(229, 9, 20, 0.4)',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E50914', e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(229, 9, 20, 0.2)', e.currentTarget.style.color = '#E50914')}
                  >
                    <span>View High-Res Photo</span>
                    <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div style={{ width: '100%', maxWidth: '720px' }}>
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '1.5rem',
                    marginBottom: '1rem'
                  }}
                >
                  <h4
                    style={{
                      margin: '0 0 1rem 0',
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: '1px',
                      fontSize: '1.4rem',
                      color: '#E50914'
                    }}
                  >
                    Official Conference & Institutional Affiliations
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                      <span style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Host Institution
                      </span>
                      <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#fff', marginTop: '4px' }}>
                        Nitte Meenakshi Institute of Technology (NMIT)
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#d1d5db' }}>Nitte University, Bengaluru Campus</div>
                    </div>

                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                      <span style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Conference Edition & Dates
                      </span>
                      <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#fff', marginTop: '4px' }}>
                        NMITCON 2026 (4th Edition)
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#d1d5db' }}>September 24–25, 2026 • Bengaluru, India</div>
                    </div>

                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                      <span style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Technical Co-Sponsorship
                      </span>
                      <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#fff', marginTop: '4px' }}>
                        IEEE Bangalore Section
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#d1d5db' }}>IEEE ComSoc Bangalore Chapter</div>
                    </div>

                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                      <span style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Sponsorship
                      </span>
                      <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#fff', marginTop: '4px' }}>
                        AICTE Sponsored
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#d1d5db' }}>All India Council for Technical Education</div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(229, 9, 20, 0.06)',
                    borderRadius: '12px',
                    border: '1px solid rgba(229, 9, 20, 0.25)',
                    padding: '1.25rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <FaFileAlt style={{ color: '#E50914' }} />
                    <span style={{ fontWeight: 'bold', fontSize: '0.95rem', color: '#fff' }}>
                      Publication Disclosure
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#e5e5e5', lineHeight: '1.6' }}>
                    This research paper was successfully presented at NMITCON 2026. As per the official conference process, papers presented at the conference are expected to be submitted for inclusion in the IEEE Xplore Digital Library, subject to the conference and IEEE publication process and requirements. Official IEEE Xplore link will be activated here immediately upon indexing.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: '0.85rem 1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              backgroundColor: '#121212'
            }}
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '6px',
                padding: '8px 22px',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E50914';
                e.currentTarget.style.borderColor = '#E50914';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};

export default ResearchEvidenceModal;
