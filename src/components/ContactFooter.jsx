import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactFooter = ({ contactInfo }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    setFocused({ ...focused, [field]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message functionality simulated! In a real app, this would send data to a backend.');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <footer className="relative bg-black text-white py-24 px-6 md:px-12 overflow-hidden border-t border-[#333]">
      {/* Background Animated Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-red-800/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left Column: Info & Connect */}
          <div className="flex flex-col justify-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl md:text-7xl font-heading mb-6 tracking-wide leading-tight">
                LET'S <br />
                <span className="text-netflix-red">COLLABORATE</span>
              </h2>
              <div className="h-1 w-24 bg-netflix-red mb-8" />
              <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-light">
                Have a groundbreaking idea? A cybersecurity challenge?
                Or just want to discuss the future of tech? I'm all ears.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <ContactItem
                icon="envelope"
                label="Email Me"
                value={contactInfo.email}
                href={`mailto:${contactInfo.email}`}
              />
              <ContactItem
                icon="phone"
                label="Call Me"
                value={contactInfo.phone}
                href={`tel:${contactInfo.phone}`}
              />
              <ContactItem
                icon="map-marker-alt"
                label="Based In"
                value={contactInfo.location}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6 mt-12">
              <SocialButton href={contactInfo.linkedin} icon="linkedin-in" label="LinkedIn" />
              <SocialButton href={contactInfo.github} icon="github" label="GitHub" />
            </motion.div>
          </div>

          {/* Right Column: Interactive Form */}
          <motion.div variants={itemVariants} className="w-full">
            <div className="bg-[#121212] p-8 md:p-10 rounded-3xl border border-[#333] shadow-2xl relative overflow-hidden group">
              {/* Subtle hover glow for the card */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <h3 className="text-3xl font-heading mb-8 relative z-10">Send a Message</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">

                <FloatingInput
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  focused={focused.name}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  label="Your Name"
                  type="text"
                />

                <FloatingInput
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  focused={focused.email}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  label="Email Address"
                  type="email"
                />

                <div className="relative group">
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    rows="5"
                    className={`w-full bg-[#0a0a0a] border-b-2 rounded-t-lg px-4 py-4 text-white text-lg outline-none transition-all duration-300 resize-none ${focused.message || formState.message ? 'border-netflix-red bg-[#181818]' : 'border-[#333]'
                      }`}
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused.message || formState.message
                        ? 'top-1 text-xs text-netflix-red'
                        : 'top-4 text-gray-500 text-base'
                      }`}
                  >
                    Your Message...
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-netflix-red text-white font-bold py-5 rounded-lg shadow-lg hover:shadow-red-600/40 transition-all duration-300 uppercase tracking-widest text-sm mt-4"
                >
                  Send Message
                </motion.button>

              </form>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-[#333] mt-24 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Dhanush J. Designed & Developed with <span className="text-netflix-red animate-pulse">♥</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

const ContactItem = ({ icon, label, value, href }) => (
  <div className="flex items-center gap-6 group cursor-default">
    <div className="w-14 h-14 rounded-2xl bg-[#1f1f1f] flex items-center justify-center text-netflix-red group-hover:scale-110 group-hover:bg-netflix-red group-hover:text-white transition-all duration-300 shadow-lg">
      <i className={`fas fa-${icon} text-xl`}></i>
    </div>
    <div>
      <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">{label}</p>
      {href ? (
        <a href={href} className="text-lg md:text-xl text-gray-200 group-hover:text-white transition-colors decoration-slice">
          {value}
        </a>
      ) : (
        <p className="text-lg md:text-xl text-gray-200">{value}</p>
      )}
    </div>
  </div>
);

const SocialButton = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#1F1F1F] text-gray-400 text-2xl hover:bg-netflix-red hover:text-white hover:-translate-y-2 transition-all duration-300 shadow-xl"
    aria-label={label}
  >
    <i className={`fab fa-${icon}`}></i>
  </a>
);

const FloatingInput = ({ name, value, onChange, focused, onFocus, onBlur, label, type }) => (
  <div className="relative group">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`w-full bg-[#0a0a0a] border-b-2 rounded-t-lg px-4 py-6 text-white text-lg outline-none transition-all duration-300 ${focused || value ? 'border-netflix-red bg-[#181818]' : 'border-[#333]'
        }`}
    />
    <label
      className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused || value
          ? 'top-2 text-xs text-netflix-red'
          : 'top-5 text-gray-500 text-base'
        }`}
    >
      {label}
    </label>
  </div>
);

export default ContactFooter;
