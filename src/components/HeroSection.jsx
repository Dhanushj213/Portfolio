import React from 'react';

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

      {/* About Me Section - Restored to clean layout (No Card) */}
      <div className="mt-12 w-full px-4 md:px-0">
        <h2 className="font-heading text-3xl md:text-4xl mb-6 text-white border-l-4 border-[#E50914] pl-4">
          ABOUT ME
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="shrink-0 w-64 h-80 relative group">
            <img
              src="/profile-picture.png"
              alt="Profile Picture"
              className="w-full h-full object-cover rounded-lg border-2 border-[#E50914] shadow-[0_0_15px_rgba(229,9,20,0.3)] transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Description */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-heading text-4xl md:text-5xl text-[#E50914] mb-6 drop-shadow-[0_0_10px_rgba(229,9,20,0.5)]">
              THE DEVELOPER
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#e5e5e5] text-justify">
              Computer Science Engineering student specializing in Cybersecurity with hands-on experience in full-stack web development, cloud computing (AWS), machine learning, and secure software design. Proficient in C, C++, Python, Java, JavaScript, React.js, Node.js, MongoDB, MySQL, and Docker. Completed internships focusing on web application security, penetration testing, and UI/UX development. Proven ability to build scalable, secure applications using modern frameworks and tools. Strong foundation in data structures, operating systems, and network security. Seeking to apply technical skills and project experience in dynamic software or cybersecurity engineering roles. Passionate about leveraging AI and blockchain to develop innovative, real-world solutions. Recognized for leadership, adaptability, and consistently delivering high-impact results in collaborative environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
