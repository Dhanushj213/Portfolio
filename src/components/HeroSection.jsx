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

      {/* About Me Section - Premium 3D Glass Layout */}
      <div className="mt-24 w-full max-w-7xl mx-auto px-4 md:px-8 pb-24perspective-1000">
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-2xl p-8 md:p-16 isolate transform-gpu"
          initial={{ opacity: 0, y: 100, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.005, transition: { duration: 0.5 } }}
        >
          {/* Liquid/Glass Reflection Layers */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-50 pointer-events-none"></div>
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/5 to-transparent rotate-45 animate-pulse opacity-30 pointer-events-none"></div>

          {/* Subtle Shimmer Animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear", repeatDelay: 2 }}
          />

          {/* Decorative Glow Blobs */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#E50914]/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center">

            {/* Section Title */}
            <h2 className="font-heading text-5xl md:text-6xl mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 tracking-wider drop-shadow-2xl">
              ABOUT ME
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 w-full">

              {/* Profile Image - 3D Float Effect */}
              <motion.div
                className="shrink-0 w-80 h-[26rem] relative group perspective-500"
                initial={{ opacity: 0, x: -50, rotateY: 20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Image Glow/Shadow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#E50914]/30 to-transparent rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>

                {/* The Image Itself */}
                <img
                  src="/profile-picture.png"
                  alt="Profile Picture"
                  className="w-full h-full object-cover rounded-3xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-700 group-hover:scale-105 group-hover:rotate-y-6 group-hover:shadow-[0_30px_60px_rgba(229,9,20,0.3)]"
                />

                {/* Glass Reflection on Image */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>

              {/* Description - Glassy Text Block */}
              <motion.div
                className="flex-1 text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="mb-8 inline-block">
                  <h3 className="font-heading text-3xl md:text-4xl text-white mb-2 drop-shadow-lg">
                    THE DEVELOPER
                  </h3>
                  <div className="h-1 w-24 bg-[#E50914] rounded-full mx-auto lg:mx-0 shadow-[0_0_10px_#E50914]"></div>
                </div>

                <p className="text-lg md:text-xl leading-loose text-gray-200 font-light text-justify tracking-wide drop-shadow-md">
                  <span className="text-[#E50914] font-semibold">Computer Science Engineering</span> student specializing in <span className="text-white font-medium">Cybersecurity</span> with hands-on experience in full-stack web development, cloud computing (AWS), machine learning, and secure software design. Proficient in <span className="text-white/80">C, C++, Python, Java, JavaScript, React.js, Node.js, MongoDB, MySQL, and Docker</span>. Completed internships focusing on web application security, penetration testing, and UI/UX development. Proven ability to build scalable, secure applications using modern frameworks and tools. Strong foundation in data structures, operating systems, and network security. Seeking to apply technical skills and project experience in dynamic software or cybersecurity engineering roles. Passionate about leveraging <span className="text-[#E50914] font-semibold">AI and blockchain</span> to develop innovative, real-world solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
