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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-transparent to-transparent" />
      
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
              className="text-teal-400 text-sm md:text-base font-medium mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              {profileData.name}
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
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-8"
                onClick={() => window.open(profileData.resumeUrl, '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8"
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
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-teal-400/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-teal-400/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={profileData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-teal-400/50 transition-all duration-300"
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
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-teal-400/30"
                style={{ width: '320px', height: '320px', top: '-10px', left: '-10px' }}
              />
              
              {/* Image container */}
              <div className="relative w-[280px] h-[280px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-teal-400/20 shadow-2xl shadow-teal-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-transparent" />
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-[#1a1a1b] border border-teal-400/30 rounded-lg px-4 py-2 shadow-lg"
              >
                <span className="text-teal-400 font-semibold">IT Student</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
