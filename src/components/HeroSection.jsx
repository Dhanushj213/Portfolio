import React from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const HeroSection = ({ aboutContent }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  // Mouse Parallax Logic
  const x = useMotionValue(0);
  const mouseY = useMotionValue(0); // Renamed to avoid conflict with transformed y
  const rotateX = useTransform(mouseY, [-500, 500], [10, -10]); // Reverse for natural feel
  const rotateY = useTransform(x, [-500, 500], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);
  }

  // Floating Animation for Icons
  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section
      id="hero"
      className="hero relative flex flex-col justify-center overflow-hidden perspective-1000"
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        mouseY.set(0);
      }}
      style={{
        perspective: 1000
      }}
    >
      <style>
        {`
          @media (min-width: 1024px) {
            #hero { padding-top: 0 !important; }
          }
          @media (max-width: 1023px) {
            #hero { padding-top: 8rem !important; padding-bottom: 2rem !important; }
          }
        `}
      </style>

      {/* 3D Background Video Layer with Parallax */}
      <motion.div
        className="video-background absolute inset-0 preserve-3d"
        style={{
          scale: 1.1,
          x: useTransform(x, [-1000, 1000], [-20, 20]),
          y: useTransform(mouseY, [-1000, 1000], [-20, 20]),
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video object-cover w-full h-full"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay absolute inset-0 bg-black/60 z-10"></div>
        {/* Animated matrix/cyber grid overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-20 mix-blend-overlay"></div>
      </motion.div>

      {/* Main 3D Container - Netflix Style */}
      <motion.div
        className="relative z-30 w-full px-4 md:px-12 flex flex-col md:flex-row items-center justify-between min-h-screen pb-20 pt-20 preserve-3d"
        style={{
          rotateX: useSpring(rotateX, { stiffness: 50, damping: 20 }),
          rotateY: useSpring(rotateY, { stiffness: 50, damping: 20 }),
        }}
      >

        {/* Left Content (Title, Text, Buttons) - Floating Layer 1 */}
        <motion.div
          className="flex-1 max-w-2xl pt-10 md:pt-0 z-40"
          style={{ z: 50 }} // Push forward in 3D
        >
          {/* 'N' Series Logo Header */}
          <motion.div
            className="flex items-center gap-4 mb-4 animate-fade-in"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#E50914] font-bold text-3xl tracking-tighter drop-shadow-glow">N</span>
            <span className="text-gray-300 tracking-[0.2em] text-sm font-medium">SERIES</span>
          </motion.div>

          {/* Massive 3D Title */}
          <motion.h1
            className="font-heading text-6xl md:text-8xl lg:text-9xl mb-6 text-white leading-[0.9] tracking-tighter drop-shadow-2xl"
            initial={{ opacity: 0, z: -100 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ duration: 1, type: "spring" }}
            style={{
              textShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 0px rgba(255,255,255,0.1)",
              transformStyle: "preserve-3d"
            }}
          >
            DHANUSH J
          </motion.h1>

          <div className="h-40"></div> {/* Spacer to maintain layout balance without text */}
        </motion.div>

        {/* Right Content - 3D Cinematic Profile - Layer 2 */}
        <motion.div
          className="hidden md:block absolute right-0 bottom-0 top-0 w-1/2 z-0 fade-in-right preserve-3d"
          style={{
            x: useTransform(x, [-1000, 1000], [20, -20]), // Inverse movement for depth
            z: 0
          }}
        >
          <div className="relative w-full h-full flex items-end justify-end">
            {/* Floating 3D Elements / Tech Orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 flex items-center justify-center z-20 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              animate={floatingAnimation}
              style={{ z: 100 }}
            >
              <i className="fab fa-react text-blue-400 text-3xl"></i>
            </motion.div>

            <motion.div
              className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-red-500/20 backdrop-blur-md border border-red-400/30 flex items-center justify-center z-20 shadow-[0_0_30px_rgba(239,68,68,0.3)]"
              animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
              style={{ z: 80 }}
            >
              <i className="fas fa-shield-alt text-red-500 text-2xl"></i>
            </motion.div>

            <motion.div
              className="absolute bottom-1/3 left-1/3 w-10 h-10 rounded-full bg-yellow-500/20 backdrop-blur-md border border-yellow-400/30 flex items-center justify-center z-20 shadow-[0_0_30px_rgba(234,179,8,0.3)]"
              animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
              style={{ z: 60 }}
            >
              <i className="fab fa-aws text-yellow-500 text-xl"></i>
            </motion.div>

            {/* Gradient Masks */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10 pointer-events-none"></div>

            <motion.img
              src="/profile-picture.png"
              alt="Dhanush J"
              className="h-[85vh] object-cover object-top mask-image-linear-gradient"
              style={{
                filter: "drop-shadow(0 0 30px rgba(0,0,0,0.8)) sepia(20%) contrast(1.1)",
                maskImage: "linear-gradient(to right, transparent, black 15%)",
                z: 10 // Profile sits behind floating elements
              }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              whileHover={{ scale: 1.02 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
