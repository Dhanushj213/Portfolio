import React from 'react';

const ContactFooter = ({ contactInfo }) => {
  return (
    <footer className="relative bg-[#141414] text-white py-16 px-6 md:px-16 border-t border-[#333] overflow-hidden">

      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="flex flex-col md:flex-row gap-16 md:gap-24">

          {/* Left Column: Contact Info */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-heading mb-6 tracking-wide">
              Let's <span className="text-[#E50914]">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              Have a project in mind or just want to chat about cybersecurity?
              I'm always open to new opportunities and collaborations.
            </p>

            <div className="space-y-6">

              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center gap-5 p-4 rounded-xl bg-[#1f1f1f]/50 border border-transparent hover:border-[#E50914]/30 hover:bg-[#1f1f1f] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#E50914]/10 flex items-center justify-center text-[#E50914] group-hover:scale-110 transition-transform">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Email</p>
                  <p className="text-lg text-gray-200 group-hover:text-white transition-colors">{contactInfo.email}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${contactInfo.phone}`}
                className="group flex items-center gap-5 p-4 rounded-xl bg-[#1f1f1f]/50 border border-transparent hover:border-[#E50914]/30 hover:bg-[#1f1f1f] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#E50914]/10 flex items-center justify-center text-[#E50914] group-hover:scale-110 transition-transform">
                  <i className="fas fa-phone text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Phone</p>
                  <p className="text-lg text-gray-200 group-hover:text-white transition-colors">{contactInfo.phone}</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-5 p-4 rounded-xl bg-[#1f1f1f]/50 border border-transparent">
                <div className="w-12 h-12 rounded-full bg-[#E50914]/10 flex items-center justify-center text-[#E50914]">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Location</p>
                  <p className="text-lg text-gray-200">{contactInfo.location}</p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-10">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1F1F1F] text-gray-400 text-2xl hover:bg-[#E50914] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1F1F1F] text-gray-400 text-2xl hover:bg-[#E50914] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1">
            <div className="bg-[#181818] p-8 md:p-10 rounded-2xl border border-[#333] shadow-2xl relative overflow-hidden group hover:border-[#E50914]/50 transition-colors duration-500">

              <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-[#E50914] transition-colors">Send a Message</h3>

              <form onSubmit={(e) => {
                e.preventDefault();
                alert('Message simulated! Connectivity to backend would go here.');
              }} className="flex flex-col gap-6">

                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    id="name"
                    className="peer w-full bg-[#0a0a0a] border border-[#333] rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all"
                    required
                  />
                  <label htmlFor="name" className="absolute left-4 top-4 text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#E50914] peer-focus:bg-[#181818] peer-focus:px-1 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-[#181818] peer-not-placeholder-shown:px-1 pointer-events-none">
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder=" "
                    id="email"
                    className="peer w-full bg-[#0a0a0a] border border-[#333] rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all"
                    required
                  />
                  <label htmlFor="email" className="absolute left-4 top-4 text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#E50914] peer-focus:bg-[#181818] peer-focus:px-1 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-[#181818] peer-not-placeholder-shown:px-1 pointer-events-none">
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    placeholder=" "
                    id="message"
                    rows="5"
                    className="peer w-full bg-[#0a0a0a] border border-[#333] rounded-lg px-4 py-4 text-white resize-none focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all"
                    required
                  ></textarea>
                  <label htmlFor="message" className="absolute left-4 top-4 text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#E50914] peer-focus:bg-[#181818] peer-focus:px-1 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-[#181818] peer-not-placeholder-shown:px-1 pointer-events-none">
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E50914] hover:bg-red-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-red-600/30 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>

        <div className="border-t border-[#333] mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dhanush J. All rights reserved.</p>
          <p>Designed with <span className="text-[#E50914]">♥</span> in Bengaluru</p>
        </div>

      </div>
    </footer>
  );
};

export default ContactFooter;
