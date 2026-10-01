import React, { useState } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { 
  FaAward, 
  FaCertificate, 
  FaExternalLinkAlt, 
  FaClock, 
  FaMicrochip, 
  FaShieldAlt, 
  FaUniversity, 
  FaCalendarAlt, 
  FaUserCheck, 
  FaCamera, 
  FaCheckCircle,
  FaFileAlt
} from 'react-icons/fa';
import { researchData } from '../data/researchData';
import ResearchEvidenceModal from './ResearchEvidenceModal';

const ResearchSection = ({ isStandalone = false, onNavigateHome = null }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('certificate');
  const [copiedCitation, setCopiedCitation] = useState(false);

  const { conference, paper, recognitions, conferenceExperience, timeline, evidence } = researchData;

  const openEvidence = (tab = 'certificate') => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const handleCopyCitation = () => {
    const citation = `Dhanush J, "${paper.title}", in Proc. 4th International Conference on Networks, Multimedia, and Information Technology (NMITCON 2026), Bengaluru, India, Sept. 24–25, 2026. (IEEE Xplore publication pending).`;
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 3000);
  };

  return (
    <section
      id="research"
      className="research-section"
      style={{
        position: 'relative',
        zIndex: 20,
        backgroundColor: '#141414',
        padding: isStandalone ? '6rem 4% 5rem 4%' : '5rem 4%',
        color: '#ffffff',
        fontFamily: "'Inter', sans-serif",
        overflow: 'hidden'
      }}
    >
      {/* Background cinematic radial glows */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(229, 9, 20, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '2%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(229, 9, 20, 0.08) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Navigation Breadcrumb if Standalone */}
        {isStandalone && (
          <div style={{ marginBottom: '2.5rem' }}>
            <button
              onClick={() => {
                if (onNavigateHome) {
                  onNavigateHome();
                } else {
                  window.location.href = '/';
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E50914';
                e.currentTarget.style.borderColor = '#E50914';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              }}
            >
              &larr; Back to Portfolio
            </button>
          </div>
        )}

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '6px 18px',
              borderRadius: '999px',
              backgroundColor: 'rgba(229, 9, 20, 0.12)',
              border: '1px solid rgba(229, 9, 20, 0.35)',
              color: '#E50914',
              fontSize: '0.85rem',
              fontWeight: '700',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              boxShadow: '0 0 20px rgba(229, 9, 20, 0.2)'
            }}
          >
            <FaAward />
            Academic Milestone & Peer-Reviewed Research
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              lineHeight: '1.05',
              letterSpacing: '1.5px',
              margin: '0.25rem 0 1rem 0',
              color: '#FFFFFF',
              textShadow: '0 4px 20px rgba(0,0,0,0.8)'
            }}
          >
            Research, Conferences & Recognition
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: '#b3b3b3',
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              maxWidth: '850px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Official research presentation and double honors at the{' '}
            <span style={{ color: '#ffffff', fontWeight: '600' }}>{conference.name}</span>, hosted by{' '}
            <span style={{ color: '#ffffff', fontWeight: '600' }}>{conference.host}</span> under{' '}
            <span style={{ color: '#E50914', fontWeight: '600' }}>AICTE sponsorship</span> in technical association with the{' '}
            <span style={{ color: '#ffffff', fontWeight: '600' }}>IEEE Bangalore Section</span>.
          </motion.p>
        </div>

        {/* Conference Credentials Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(20,20,20,0.85) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderLeft: '4px solid #E50914',
            borderRadius: '14px',
            padding: '1.75rem 2rem',
            marginBottom: '3rem',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.8rem',
                  color: '#E50914',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                <span>{conference.edition}</span>
                <span>•</span>
                <span>{conference.dates}</span>
                <span>•</span>
                <span>Bengaluru, India</span>
              </div>
              <h3
                style={{
                  margin: '0.5rem 0',
                  fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                  fontWeight: '700',
                  color: '#fff',
                  lineHeight: '1.3'
                }}
              >
                {conference.fullName}
              </h3>
              <p style={{ margin: 0, color: '#9ca3af', fontSize: '0.95rem' }}>
                Hosted by <strong style={{ color: '#e5e5e5' }}>{conference.host}</strong> ({conference.campus})
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <span
                style={{
                  padding: '6px 14px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: '#e5e5e5'
                }}
              >
                🏛️ {conference.sponsoredBy}
              </span>
              <span
                style={{
                  padding: '6px 14px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(229, 9, 20, 0.1)',
                  border: '1px solid rgba(229, 9, 20, 0.3)',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: '#ff6b6b'
                }}
              >
                🌐 IEEE Bangalore Section Co-Sponsored
              </span>
              <span
                style={{
                  padding: '6px 14px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: '#e5e5e5'
                }}
              >
                📄 CMT Paper ID: {paper.cmtPaperId}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Prominent Research Recognition Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.75rem'
            }}
          >
            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.9rem',
                letterSpacing: '1px',
                margin: 0,
                color: '#fff'
              }}
            >
              Honors & Research Recognition
            </h3>
            <div
              style={{
                height: '2px',
                flex: 1,
                background: 'linear-gradient(to right, rgba(229, 9, 20, 0.6), transparent)'
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {recognitions.map((item, index) => {
              const isPresenterAward = item.id === 'best-presenter';
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{
                    y: -6,
                    borderColor: '#E50914',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.6), 0 0 25px rgba(229, 9, 20, 0.25)'
                  }}
                  style={{
                    position: 'relative',
                    background: isPresenterAward
                      ? 'linear-gradient(145deg, rgba(229, 9, 20, 0.08) 0%, rgba(20, 20, 20, 0.95) 100%)'
                      : 'linear-gradient(145deg, rgba(255, 255, 255, 0.04) 0%, rgba(18, 18, 18, 0.95) 100%)',
                    borderRadius: '16px',
                    padding: '2rem',
                    border: isPresenterAward
                      ? '1.5px solid rgba(229, 9, 20, 0.45)'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: isPresenterAward
                      ? '0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(229, 9, 20, 0.15)'
                      : '0 10px 30px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Top Badge */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1.25rem'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: '800',
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          padding: '5px 12px',
                          borderRadius: '999px',
                          backgroundColor: isPresenterAward ? '#E50914' : 'rgba(255, 255, 255, 0.1)',
                          color: '#fff'
                        }}
                      >
                        {item.type}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{item.date}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '12px',
                          backgroundColor: isPresenterAward
                            ? 'rgba(229, 9, 20, 0.15)'
                            : 'rgba(255, 255, 255, 0.06)',
                          border: isPresenterAward
                            ? '1px solid rgba(229, 9, 20, 0.4)'
                            : '1px solid rgba(255, 255, 255, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.6rem',
                          color: '#E50914',
                          flexShrink: 0
                        }}
                      >
                        {item.id === 'paper-presentation' ? '📄' : '🏆'}
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: '1.35rem',
                            fontWeight: '700',
                            color: '#ffffff',
                            margin: '0 0 4px 0',
                            lineHeight: '1.2'
                          }}
                        >
                          {item.title}
                        </h4>
                        <div
                          style={{
                            fontSize: '0.85rem',
                            color: '#E50914',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                          }}
                        >
                          <FaCheckCircle style={{ fontSize: '0.75rem' }} />
                          {item.status}
                        </div>
                      </div>
                    </div>

                    <p
                      style={{
                        color: '#d1d5db',
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        margin: '1rem 0 1.5rem 0'
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Actions / Evidence Buttons */}
                  <div
                    style={{
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      paddingTop: '1.25rem',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                      alignItems: 'center'
                    }}
                  >
                    {isPresenterAward && (
                      <>
                        <button
                          onClick={() => openEvidence('certificate')}
                          style={{
                            flex: 1,
                            minWidth: '130px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            backgroundColor: '#E50914',
                            color: '#ffffff',
                            border: 'none',
                            padding: '10px 14px',
                            borderRadius: '6px',
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 4px 12px rgba(229, 9, 20, 0.3)'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b00710')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E50914')}
                        >
                          <FaCertificate />
                          View Certificate
                        </button>

                        <button
                          onClick={() => openEvidence('photo')}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                            color: '#fff',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            padding: '10px 14px',
                            borderRadius: '6px',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
                        >
                          <FaCamera />
                          Stage Photo
                        </button>
                      </>
                    )}

                    {!isPresenterAward && (
                      <button
                        onClick={() => openEvidence('details')}
                        style={{
                          width: '100%',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.06)',
                          color: '#e5e5e5',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          padding: '10px 14px',
                          borderRadius: '6px',
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#E50914';
                          e.currentTarget.style.color = '#fff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                          e.currentTarget.style.color = '#e5e5e5';
                        }}
                      >
                        <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                        View Conference Credentials
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Featured Research Paper Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.04) 0%, rgba(15, 15, 16, 0.95) 100%)',
            border: '1px solid rgba(229, 9, 20, 0.35)',
            borderRadius: '20px',
            padding: 'clamp(1.75rem, 4vw, 3rem)',
            marginBottom: '4rem',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(229, 9, 20, 0.15)'
          }}
        >
          {/* Decorative Corner Glow */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '280px',
              height: '280px',
              background: 'radial-gradient(circle, rgba(229, 9, 20, 0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Meta Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem'
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  backgroundColor: '#E50914',
                  color: '#fff',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}
              >
                <FaFileAlt />
                CMT Paper ID: {paper.cmtPaperId}
              </span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#e5e5e5',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}
              >
                <FaUniversity />
                NMITCON 2026
              </span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  color: '#fbbf24',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}
              >
                <FaClock />
                Status: {paper.status}
              </span>
            </div>

            {/* Exact Paper Title */}
            <h3
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.3rem)',
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: '1.3',
                margin: '0 0 1.25rem 0',
                letterSpacing: '-0.01em'
              }}
            >
              {paper.title}
            </h3>

            {/* Authors & Institutional Affiliation */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '1rem 0',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(229, 9, 20, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E50914',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}
                >
                  DJ
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem' }}>
                    {paper.authors[0].name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#E50914', fontWeight: '500' }}>
                    {paper.authors[0].role}
                  </div>
                </div>
              </div>

              <div style={{ color: '#6b7280', display: 'none' }}>|</div>

              <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
                Computer Science & Engineering (Specialization in Cybersecurity)
              </div>
            </div>

            {/* Abstract / Scientific Scope */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h5
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: '#9ca3af',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  margin: '0 0 0.5rem 0'
                }}
              >
                Research Focus & Abstract
              </h5>
              <p
                style={{
                  color: '#e5e5e5',
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  margin: 0,
                  textAlign: 'justify'
                }}
              >
                {paper.abstract}
              </p>
            </div>

            {/* Domain Badges */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {paper.domains.map((domain, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      fontSize: '0.8rem',
                      color: '#d1d5db'
                    }}
                  >
                    #{domain}
                  </span>
                ))}
              </div>
            </div>

            {/* IEEE Xplore Disclosure & Action Area */}
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.25rem'
              }}
            >
              <div style={{ flex: 1, minWidth: '280px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#fbbf24',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    marginBottom: '4px'
                  }}
                >
                  <FaClock />
                  <span>Publication Processing Disclosure:</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#9ca3af', lineHeight: '1.5' }}>
                  {paper.publicationNote}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                {/* Future-Ready IEEE Xplore Button */}
                {paper.ieeeXploreUrl ? (
                  <a
                    href={paper.ieeeXploreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      backgroundColor: '#006699', // IEEE Blue
                      color: '#ffffff',
                      padding: '12px 22px',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      boxShadow: '0 4px 14px rgba(0, 102, 153, 0.4)'
                    }}
                  >
                    <span>View on IEEE Xplore</span>
                    <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                  </a>
                ) : (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#9ca3af',
                      border: '1px dashed rgba(255, 255, 255, 0.25)',
                      padding: '11px 20px',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'not-allowed',
                      userSelect: 'none'
                    }}
                    title="Expected to be submitted for inclusion in IEEE Xplore Digital Library"
                  >
                    <FaClock style={{ color: '#fbbf24' }} />
                    <span>IEEE Xplore — Coming Soon</span>
                  </div>
                )}

                <button
                  onClick={() => openEvidence('certificate')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    backgroundColor: '#E50914',
                    color: '#ffffff',
                    border: 'none',
                    padding: '12px 22px',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 14px rgba(229, 9, 20, 0.35)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b00710')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E50914')}
                >
                  <FaCertificate />
                  <span>View Certificate & Evidence</span>
                </button>

                <button
                  onClick={handleCopyCitation}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    color: '#e5e5e5',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '11px 18px',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.color = '#e5e5e5';
                  }}
                >
                  {copiedCitation ? (
                    <>
                      <FaCheckCircle style={{ color: '#22c55e' }} />
                      <span>Citation Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaFileAlt />
                      <span>Copy Citation</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two-Column Experience & Timeline Area */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Conference Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(18, 18, 18, 0.9) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: '#E50914',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem'
                }}
              >
                <FaMicrochip />
                <span>Conference Experience & Oral Defense</span>
              </div>

              <h4
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.9rem',
                  letterSpacing: '1px',
                  margin: '0 0 1rem 0',
                  color: '#fff'
                }}
              >
                Presenter & Student Researcher
              </h4>

              <p
                style={{
                  color: '#e5e5e5',
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                  textAlign: 'justify'
                }}
              >
                {conferenceExperience.summary}
              </p>

              <div
                style={{
                  borderLeft: '3px solid #E50914',
                  paddingLeft: '1rem',
                  marginBottom: '1.5rem',
                  color: '#d1d5db',
                  fontSize: '0.9rem',
                  lineHeight: '1.6'
                }}
              >
                Participated as a student researcher and oral presenter, defending the paper before academic reviewers, IEEE technical committee chairs, and domain researchers at Nitte Meenakshi Institute of Technology, Bengaluru.
              </div>

              {/* Technical Architecture Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <FaShieldAlt style={{ color: '#E50914', marginTop: '4px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: '#d1d5db' }}>
                    <strong>Neuromorphic SNNs:</strong> Event-driven temporal processing for low-power, millisecond-latency detection.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <FaShieldAlt style={{ color: '#E50914', marginTop: '4px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: '#d1d5db' }}>
                    <strong>Multi-Modal Forensics:</strong> Simultaneous fusion of audio-visual anomalies and synthetic artifacts.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <FaShieldAlt style={{ color: '#E50914', marginTop: '4px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: '#d1d5db' }}>
                    <strong>News Integrity Engine:</strong> Automated credibility scoring and news verification pipeline.
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Preview Thumbnail */}
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img
                  src={evidence.presentationPhotoUrl}
                  alt="Ceremony Preview"
                  style={{
                    width: '60px',
                    height: '42px',
                    objectFit: 'cover',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    cursor: 'pointer'
                  }}
                  onClick={() => openEvidence('photo')}
                />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#fff' }}>Stage Ceremony Photos</div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Click to view high resolution</div>
                </div>
              </div>
              <button
                onClick={() => openEvidence('photo')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#E50914',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                <span>View</span>
                <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} />
              </button>
            </div>
          </motion.div>

          {/* Research Timeline Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(18, 18, 18, 0.9) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '2.25rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '0.8rem',
                fontWeight: '700',
                color: '#E50914',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '0.75rem'
              }}
            >
              <FaCalendarAlt />
              <span>Milestone Roadmap</span>
            </div>

            <h4
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.9rem',
                letterSpacing: '1px',
                margin: '0 0 1.75rem 0',
                color: '#fff'
              }}
            >
              Research Progress Timeline
            </h4>

            {/* Timeline Vertical Stack */}
            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              {/* Connecting Line */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  bottom: '12px',
                  left: '9px',
                  width: '2px',
                  background: 'linear-gradient(to bottom, #E50914 0%, #E50914 70%, rgba(245, 158, 11, 0.8) 100%)'
                }}
              />

              {timeline.map((step, idx) => {
                const isCompleted = step.status === 'completed';
                return (
                  <div
                    key={step.step}
                    style={{
                      position: 'relative',
                      marginBottom: idx === timeline.length - 1 ? 0 : '1.75rem'
                    }}
                  >
                    {/* Node Dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-2rem',
                        top: '2px',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: isCompleted ? '#E50914' : '#141414',
                        border: isCompleted ? '3px solid #141414' : '2px dashed #fbbf24',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: isCompleted ? '0 0 10px rgba(229, 9, 20, 0.6)' : 'none',
                        zIndex: 2
                      }}
                    >
                      {isCompleted ? (
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#fff' }} />
                      ) : (
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#fbbf24' }} />
                      )}
                    </div>

                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          marginBottom: '2px'
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            backgroundColor: isCompleted ? 'rgba(229, 9, 20, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                            color: isCompleted ? '#ff6b6b' : '#fbbf24',
                            letterSpacing: '0.5px'
                          }}
                        >
                          {step.year}
                        </span>
                        {isCompleted ? (
                          <span style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: '600' }}>✓ Completed</span>
                        ) : (
                          <span style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: '600' }}>⏳ Processing / Pending</span>
                        )}
                      </div>

                      <h5 style={{ margin: '4px 0 2px 0', fontSize: '1.05rem', fontWeight: '700', color: '#fff' }}>
                        {step.title}
                      </h5>

                      <p style={{ margin: 0, fontSize: '0.85rem', color: '#9ca3af', lineHeight: '1.5' }}>
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note on indexing */}
            <div
              style={{
                marginTop: '2rem',
                padding: '0.85rem 1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                fontSize: '0.78rem',
                color: '#9ca3af'
              }}
            >
              ℹ️ Peer-reviewed conference proceedings submitted to the IEEE publication pipeline are indexed in the IEEE Xplore Digital Library following official IEEE verification and production workflows.
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Evidence Lightbox Modal */}
      <ResearchEvidenceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
        data={researchData}
      />
    </section>
  );
};

export default ResearchSection;
