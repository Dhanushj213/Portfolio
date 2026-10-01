import React, { useEffect } from 'react';
import ResearchSection from './ResearchSection';
import ContactFooter from './ContactFooter';
import { researchData } from '../data/researchData';

const ResearchPage = ({ onBackToPortfolio, contactInfo }) => {
  useEffect(() => {
    // Dynamic SEO Title
    const originalTitle = document.title;
    document.title = "Dhanush J | Research & Publications | NMITCON 2026";

    // Dynamic Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Explore Dhanush J's peer-reviewed research presented at NMITCON 2026 on Neuromorphic Multi-Modal Fake Media Detection using Spiking Neural Networks with AI Content Identification and News Verification, recognized with Best Research Paper and Best Paper Presenter honors."
      );
    }

    // Dynamic Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    const originalCanonical = canonical ? canonical.getAttribute('href') : 'https://dhanushj.vercel.app/';
    if (canonical) {
      canonical.setAttribute('href', 'https://dhanushj.vercel.app/research');
    }

    // Dynamic JSON-LD Structured Data
    const scriptId = 'research-jsonld-schema';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ScholarlyArticle",
            "headline": researchData.paper.title,
            "name": researchData.paper.title,
            "author": [
              {
                "@type": "Person",
                "name": "Dhanush J",
                "jobTitle": "Computer Science Engineer & Cybersecurity Researcher",
                "sameAs": "https://www.linkedin.com/in/dhanush-jagadeesh/"
              }
            ],
            "description": researchData.paper.abstract,
            "about": [
              "Neuromorphic Computing",
              "Spiking Neural Networks",
              "Fake Media Detection",
              "Artificial Intelligence",
              "Cybersecurity",
              "Intelligent Systems"
            ],
            "publication": {
              "@type": "PublicationEvent",
              "name": "4th International Conference on Networks, Multimedia, and Information Technology (NMITCON 2026)",
              "startDate": "2026-09-24",
              "endDate": "2026-09-25",
              "location": {
                "@type": "Place",
                "name": "Nitte Meenakshi Institute of Technology",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bengaluru",
                  "addressRegion": "Karnataka",
                  "addressCountry": "India"
                }
              }
            }
          },
          {
            "@type": "Event",
            "name": "4th International Conference on Networks, Multimedia, and Information Technology (NMITCON 2026)",
            "startDate": "2026-09-24",
            "endDate": "2026-09-25",
            "location": {
              "@type": "Place",
              "name": "Nitte Meenakshi Institute of Technology",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "addressCountry": "India"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "Nitte Meenakshi Institute of Technology (NMIT), Bengaluru",
              "url": "https://www.nmit.ac.in"
            },
            "sponsor": [
              {
                "@type": "Organization",
                "name": "All India Council for Technical Education (AICTE)"
              },
              {
                "@type": "Organization",
                "name": "IEEE Bangalore Section"
              },
              {
                "@type": "Organization",
                "name": "IEEE Communications Society (ComSoc) Bangalore Chapter"
              }
            ]
          },
          {
            "@type": "Person",
            "name": "Dhanush J",
            "award": [
              "Best Paper Presenter - NMITCON 2026",
              "Best Research Paper - NMITCON 2026"
            ]
          }
        ]
      };
      scriptTag.text = JSON.stringify(structuredData);
      document.head.appendChild(scriptTag);
    }

    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      document.title = originalTitle;
      if (metaDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
      if (canonical) {
        canonical.setAttribute('href', originalCanonical);
      }
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#141414', minHeight: '100vh', color: '#ffffff' }}>
      {/* Top Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'rgba(20, 20, 20, 0.95)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1rem 4%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={onBackToPortfolio}
        >
          <img
            src="/header.png"
            alt="DHANUSH J"
            style={{
              height: '3rem',
              width: 'auto',
              maxWidth: '180px'
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={onBackToPortfolio}
            style={{
              backgroundColor: '#E50914',
              color: '#ffffff',
              border: 'none',
              padding: '8px 18px',
              borderRadius: '4px',
              fontSize: '0.9rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b00710')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E50914')}
          >
            &larr; Back to Portfolio
          </button>
        </div>
      </header>

      {/* Main Research Content */}
      <main>
        <ResearchSection isStandalone={true} onNavigateHome={onBackToPortfolio} />
      </main>

      {/* Footer */}
      {contactInfo && (
        <footer id="contactfooter">
          <ContactFooter contactInfo={contactInfo} />
        </footer>
      )}
    </div>
  );
};

export default ResearchPage;
