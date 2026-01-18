import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ aboutContent }) => {
  return (
    <section
      id="hero"
      className="hero relative flex flex-col justify-center overflow-hidden"
      style={{
        // Maintain the 28rem padding on desktop that the user liked
        // We use media queries via style or utility classes. 
        // Since we are mixing, let's stick to the CSS class 'hero' properties for base 
        // and override for mobile if needed, or vice-versa.
        // Actually, the CSS class 'hero' has padding-top: 7rem.
        // The INLINE style had 28rem.
      }}
    >
      <style>
        {`
          @media (min-width: 1024px) {
            #hero {
              padding-top: 28rem !important;
            }
          }
          @media (max-width: 1023px) {
            #hero {
              padding-top: 8rem !important;
              padding-bottom: 2rem !important;
            }
          }
        `}
      </style>

      {/* Background Video - Restored to FIXED position via class */}
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Hero Content - Netflix Style */}
      <div className="relative z-10 w-full px-4 md:px-12 flex flex-col md:flex-row items-center justify-between min-h-screen pb-20 pt-20">

        {/* Left Content (Title, Text, Buttons) */}
        <div className="flex-1 max-w-2xl pt-10 md:pt-0 z-20">
          {/* 'N' Series Logo Header */}
          <div className="flex items-center gap-4 mb-4 animate-fade-in">
            <span className="text-[#E50914] font-bold text-3xl tracking-tighter">N</span>
            <span className="text-gray-300 tracking-[0.2em] text-sm font-medium">SERIES</span>
          </div>

          {/* Massive Title */}
          <motion.h1
            className="font-heading text-6xl md:text-8xl lg:text-9xl mb-6 text-white leading-[0.9] tracking-tighter drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            DHANUSH J
          </motion.h1>

          {/* Metadata Row */}
          <div className="flex items-center flex-wrap gap-3 md:gap-4 mb-6 text-sm md:text-base font-medium text-white/90">
            <span className="text-[#46d369] font-bold">98% Match</span>
            <span className="text-gray-400">2025</span>
            <span className="border border-white/40 px-2 py-[1px] text-xs">U/A 16+</span>
            <span className="hidden md:inline">5 Seasons</span>
            <span className="border border-white/40 px-2 py-[1px] text-xs uppercase">HD</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 text-white drop-shadow-md leading-relaxed max-w-xl font-normal line-clamp-3 md:line-clamp-none">
            {aboutContent.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://drive.google.com/file/d/1E6HM8pHJJhxsQgzSjMN0gL-IG6SREJA_/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded hover:bg-white/90 transition-colors font-bold text-lg md:text-xl"
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                <path d="M4 6.91266C4 6.16086 4.81409 5.69017 5.46608 6.06496L20.2443 14.56496C20.8963 14.93975 20.8963 15.88122 20.2443 16.25601L5.46608 24.75601C4.81409 25.1308 4 24.66011 4 23.90831V6.91266Z" transform="translate(0 -2.9)" />
              </svg>
              Resume
            </a>
            <a
              href="#contactfooter"
              className="flex items-center gap-2 bg-[rgba(109,109,110,0.7)] text-white px-6 py-2.5 rounded hover:bg-[rgba(109,109,110,0.9)] transition-colors font-bold text-lg md:text-xl backdrop-blur-sm"
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" />
              </svg>
              Contact Info
            </a>
          </div>
        </div>

        {/* Right Content - Cinematic Profile Image */}
        <div className="hidden md:block absolute right-0 bottom-0 top-0 w-1/2 z-0 pointer-events-none fade-in-right">
          <div className="relative w-full h-full flex items-end justify-end">
            {/* Gradient Masks for blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10"></div>

            <img
              src="/profile-picture.png"
              alt="Dhanush J"
              className="h-[85vh] object-cover object-top mask-image-linear-gradient"
              style={{
                filter: "drop-shadow(0 0 20px rgba(0,0,0,0.5))",
                maskImage: "linear-gradient(to right, transparent, black 20%)"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
