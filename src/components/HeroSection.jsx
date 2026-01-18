import React from 'react';

const HeroSection = ({ aboutContent }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex flex-col justify-center bg-[#141414] overflow-hidden px-4 md:px-12 pt-32 pb-12 lg:pt-[28rem]"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-25"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl">
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
            className="flex items-center justify-center px-6 py-3 rounded font-bold transition-all duration-300 bg-[#E50914] text-white hover:bg-red-700 hover:scale-105"
          >
            View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/dhanush-j-a976ab26b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 rounded font-bold transition-all duration-300 bg-gray-600/70 text-white hover:bg-gray-600/90 hover:scale-105"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* About Me Section */}
      <div className="mt-12 w-full">
        <h2 className="font-heading text-3xl md:text-4xl mb-6 text-white border-l-4 border-[#E50914] pl-4">
          ABOUT ME
        </h2>

        <div className="bg-[#141414]/80 p-6 md:p-10 rounded-xl border border-[#E50914]/20 shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-red-900/10 hover:border-[#E50914]/40 group">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

            {/* Profile Image */}
            <div className="shrink-0 w-64 h-80 relative group-hover:scale-105 transition-transform duration-300">
              <img
                src="/profile-picture.png"
                alt="Profile Picture"
                className="w-full h-full object-cover rounded-lg border-2 border-[#E50914] shadow-[0_0_15px_rgba(229,9,20,0.3)] group-hover:border-white transition-colors duration-300"
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
      </div>
    </section>
  );
};

export default HeroSection;
