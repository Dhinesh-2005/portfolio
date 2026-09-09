import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, profileData } from '../data/mockData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Calculate scroll progress percentage (0 to 1)
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / totalScroll)));
      }

      // Active section spy
      const sections = navLinks.map((link) => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Subtle Top Scroll Progress Indicator */}
      <div
        style={{ transform: `scaleX(${scrollProgress})` }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-red-800 via-red-600 to-red-500 origin-left z-[10001] pointer-events-none transition-transform duration-100 ease-out"
        aria-hidden="true"
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0b]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-xl md:text-2xl font-bold tracking-tight text-white hover:opacity-95 transition-opacity"
              aria-label="Dhinesh Portfolio"
            >
              <span className="text-red-600">D</span>hinesh
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full group ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-red-600/20 border border-red-500/40 rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    ) : (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] bg-red-500/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-center rounded-full" />
                    )}
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Right Action: Desktop Resume Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <motion.a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-red-600/50 bg-red-600/10 text-red-400 hover:bg-red-600 hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-red-900/30"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </motion.a>

              {/* Mobile Hamburger Button */}
              <motion.button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.94 }}
                className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-red-600/40 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600/40 cursor-pointer"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav-menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-[#0a0a0b]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl px-6 py-5"
          >
            <div className="space-y-1.5">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035, duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-red-600/15 text-red-400 border border-red-600/30'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-red-500" />}
                  </motion.a>
                );
              })}

              <div className="pt-3 border-t border-white/10 mt-3">
                <motion.a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white text-sm font-semibold transition-all shadow-lg shadow-red-950/40"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


