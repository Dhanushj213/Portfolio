import React from 'react';

const ContactFooter = ({ contactInfo }) => {
  return (
    <footer className="py-16 px-[4%] bg-[#141414] border-t border-[#333] text-gray-400">
      <h2 className="font-heading text-4xl mb-8 text-white">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <i className="fas fa-envelope text-netflix-red"></i>
            <a href={`mailto:${contactInfo.email}`} className="no-underline text-inherit">{contactInfo.email}</a>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <i className="fas fa-phone text-netflix-red"></i>
            <a href={`tel:${contactInfo.phone}`} className="no-underline text-inherit">{contactInfo.phone}</a>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-netflix-red"></i>
            <span>{contactInfo.location}</span>
          </div>

          <div className="flex gap-6 mt-6">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-netflix-red transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-netflix-red transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full">
          <form onSubmit={(e) => {
            e.preventDefault();
            alert('Message functionality would be connected to a backend service here. For now, please use the email link!');
          }} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#333] border-none p-4 text-white rounded focus:outline-none focus:ring-2 focus:ring-netflix-red"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#333] border-none p-4 text-white rounded focus:outline-none focus:ring-2 focus:ring-netflix-red"
              required
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="bg-[#333] border-none p-4 text-white rounded resize-none focus:outline-none focus:ring-2 focus:ring-netflix-red"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-netflix-red text-white py-3 px-6 rounded font-bold hover:bg-red-700 transition w-fit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Dhanush J. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default ContactFooter;
