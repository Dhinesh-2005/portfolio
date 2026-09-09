import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { profileData } from '../data/mockData';

const HeroSection = () => {
  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-28 pb-16"
    >
      {/* Background ambient red glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-red-700/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Greeting Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-600/30 text-red-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Hello, I'm
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400 drop-shadow-sm">
                {profileData.name.split(' ')[0]}
              </span>{' '}
              <span className="text-white">{profileData.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            {/* Role Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl sm:text-2xl text-gray-200 font-semibold mb-2"
            >
              {profileData.role}
            </motion.h2>

            {/* College */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray-400 font-medium text-sm sm:text-base mb-6"
            >
              {profileData.college}
            </motion.p>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0 font-normal"
            >
              {profileData.summary}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-red-950/40 hover:shadow-red-800/40 transition-shadow duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </motion.a>
              <motion.button
                type="button"
                onClick={handleContactClick}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="inline-flex items-center justify-center gap-2 bg-[#141414]/90 border border-red-600/40 hover:border-red-500 hover:bg-red-600/10 text-gray-200 hover:text-white font-medium px-8 py-3.5 rounded-xl transition-colors duration-300 shadow-md shadow-black/30 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-red-400" />
                <span>Contact Me</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-3.5 justify-center lg:justify-start"
            >
              <motion.a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="p-3 rounded-xl bg-[#141414] border border-white/10 text-gray-400 hover:text-white hover:border-red-600/50 hover:bg-red-600/10 hover:shadow-md hover:shadow-red-950/50 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="p-3 rounded-xl bg-[#141414] border border-white/10 text-gray-400 hover:text-white hover:border-red-600/50 hover:bg-red-600/10 hover:shadow-md hover:shadow-red-950/50 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={profileData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="p-3 rounded-xl bg-[#141414] border border-white/10 text-gray-400 hover:text-white hover:border-red-600/50 hover:bg-red-600/10 hover:shadow-md hover:shadow-red-950/50 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image with Ambient Aura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Outer Ambient Breathing Glow */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-red-600/25 via-red-700/10 to-transparent blur-xl transition-all duration-700 group-hover:scale-105 group-hover:from-red-600/35" />

              {/* Decorative Accent Ring */}
              <div className="relative p-1.5 rounded-full bg-gradient-to-b from-red-600/50 via-red-900/30 to-white/10 shadow-2xl shadow-red-950/60">
                {/* Image Container */}
                <div className="relative w-[270px] h-[270px] sm:w-[310px] sm:h-[310px] md:w-[330px] md:h-[330px] rounded-full overflow-hidden bg-[#141414]">
                  <img
                    src={profileData.profileImage}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle edge shadow inside circle */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/30 pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -right-2 sm:bottom-0 sm:right-0 bg-[#121214]/95 backdrop-blur-md border border-red-600/40 rounded-xl px-4 py-2 shadow-xl shadow-black/60 flex items-center gap-2.5"
              >
                <div className="relative flex items-center justify-center w-2.5 h-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-100">IT Student</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

