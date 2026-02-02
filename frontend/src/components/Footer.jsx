import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart, ArrowUp, Download } from 'lucide-react';
import { profileData } from '../data/mockData';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: profileData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: profileData.social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: profileData.social.instagram, label: 'Instagram' }
  ];

  return (
    <footer className="relative py-12 border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="text-2xl font-bold text-white mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-red-600">D</span>hinesh
          </motion.a>

          {/* Resume Button */}
          <Button
            variant="outline"
            size="sm"
            className="mb-6 border-red-700/50 text-red-500 hover:bg-red-700/10 hover:border-red-600"
            onClick={() => window.open(profileData.resumeUrl, '_blank')}
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-red-700/50 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center flex items-center gap-1">
            © 2026 
            All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="fixed bottom-8 right-8 p-3 rounded-lg bg-red-700 text-white shadow-lg shadow-red-900/30 hover:bg-red-800 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
