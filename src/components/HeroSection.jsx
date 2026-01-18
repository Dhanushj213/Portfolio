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

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl px-4 md:px-0">
        <h1 className="font-heading text-5xl md:text-7xl mb-4 text-white leading-tight">
          Dhanush J
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-[#e5e5e5] leading-relaxed max-w-3xl">
          {aboutContent.description}
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="https://drive.google.com/file/d/1E6HM8pHJJhxsQgzSjMN0gL-IG6SREJA_/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="netflix-button primary-button"
          >
            View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/dhanush-j-a976ab26b"
            target="_blank"
            rel="noopener noreferrer"
            className="netflix-button secondary-button"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* About Me Section - Glass Card Layout */}
      <div className="mt-20 w-full max-w-6xl mx-auto px-4 md:px-8 pb-20">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl bg-white/5 p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Glass Highlight Effect */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#E50914]/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Centered Title */}
          <h2 className="font-heading text-4xl md:text-5xl mb-12 text-center text-white/90 tracking-wide drop-shadow-lg">
            ABOUT ME
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Image - Slides from Left */}
            <motion.div
              className="shrink-0 w-72 h-96 relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-[#E50914] rounded-2xl rotate-6 opacity-20 group-hover:rotate-3 transition-transform duration-300"></div>
              <img
                src="/profile-picture.png"
                alt="Profile Picture"
                className="relative z-10 w-full h-full object-cover rounded-2xl border border-white/20 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </motion.div>

            {/* Description - Slides from Right */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-3xl md:text-4xl text-[#E50914] mb-6 drop-shadow-md">
                THE DEVELOPER
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-[#e5e5e5] text-justify font-light min-h-[300px] flex items-center">
                Computer Science Engineering student specializing in Cybersecurity with hands-on experience in full-stack web development, cloud computing (AWS), machine learning, and secure software design. Proficient in C, C++, Python, Java, JavaScript, React.js, Node.js, MongoDB, MySQL, and Docker. Completed internships focusing on web application security, penetration testing, and UI/UX development. Proven ability to build scalable, secure applications using modern frameworks and tools. Strong foundation in data structures, operating systems, and network security. Seeking to apply technical skills and project experience in dynamic software or cybersecurity engineering roles. Passionate about leveraging AI and blockchain to develop innovative, real-world solutions. Recognized for leadership, adaptability, and consistently delivering high-impact results in collaborative environments.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
