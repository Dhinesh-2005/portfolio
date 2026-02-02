import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { profileData } from '../data/mockData';

const HeroSection = () => {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient - subtle red glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-red-800/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-red-500 text-sm md:text-base font-medium mb-4 tracking-wider uppercase"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
            >
              <span className="text-red-600">{profileData.name.split(' ')[0]}</span>{' '}
              <span className="text-gray-100">{profileData.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-2"
            >
              {profileData.role}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-500 mb-6"
            >
              {profileData.college}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
            >
              {profileData.summary}
            </motion.p>
            
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                className="bg-red-700 hover:bg-red-800 text-white font-medium px-8 transition-all duration-300"
                onClick={() => window.open(profileData.resumeUrl, '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-700/50 text-gray-300 hover:bg-red-700/10 hover:text-white hover:border-red-600 px-8 transition-all duration-300"
                onClick={handleContactClick}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-red-700/10 hover:border-red-600/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-red-700/10 hover:border-red-600/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={profileData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-red-700/10 hover:border-red-600/50 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute rounded-full border-2 border-dashed border-red-700/30
              w-[320px] h-[320px] md:w-[340px] md:h-[340px]
              top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />

              
              {/* Image container */}
              <div className="relative w-[280px] h-[280px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-red-700/20 shadow-2xl shadow-red-900/20">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-700/20 to-transparent" />
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 bg-[#141414] border border-red-700/30 rounded-lg px-4 py-2 shadow-lg"
              >
                <span className="text-red-500 font-semibold">IT Student</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
