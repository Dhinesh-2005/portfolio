import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowUp, Download } from 'lucide-react';
import { profileData } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: profileData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: profileData.social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: profileData.social.instagram, label: 'Instagram' }
  ];

  return (
    <footer className="relative py-14 border-t border-white/[0.08] overflow-hidden">
      {/* Subtle top red ambient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-[1px] bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="text-2xl sm:text-3xl font-extrabold text-white mb-5 tracking-tight group"
            whileHover={{ scale: 1.04 }}
            aria-label="Back to top"
          >
            <span className="text-red-600 group-hover:text-red-500 transition-colors">D</span>hinesh
          </motion.a>

          {/* Resume Button */}
          <motion.a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-red-600/40 bg-red-600/10 text-red-400 hover:bg-red-600 hover:text-white text-xs font-semibold transition-all duration-300 shadow-sm shadow-red-950/40"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex gap-3 mb-7">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.94 }}
                className="p-3 rounded-xl bg-[#141414] border border-white/[0.08] text-gray-400 hover:text-white hover:border-red-600/50 hover:bg-red-600/10 transition-all shadow-md"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs sm:text-sm font-normal">
            © {currentYear} Dhinesh P. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Scroll to Top Button with Threshold */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.7, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 15 }}
            transition={{ duration: 0.25 }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 p-3.5 rounded-xl bg-gradient-to-r from-red-700 to-red-600 text-white shadow-xl shadow-red-950/60 hover:from-red-600 hover:to-red-500 border border-red-500/40 z-40 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;

