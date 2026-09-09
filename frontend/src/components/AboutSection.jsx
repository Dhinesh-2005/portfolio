import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Code, Target } from 'lucide-react';
import { aboutData } from '../data/mockData';

const AboutSection = () => {
  const features = [
    {
      icon: User,
      title: 'Who I Am',
      description: 'A passionate IT student dedicated to learning and growing in the tech industry.'
    },
    {
      icon: Code,
      title: 'What I Do',
      description: 'I build web applications, test software, and explore emerging technologies.'
    },
    {
      icon: BookOpen,
      title: 'My Learning',
      description: 'Constantly updating my skills through courses, projects, and hands-on practice.'
    },
    {
      icon: Target,
      title: 'My Goals',
      description: 'To become a skilled software developer contributing to innovative solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
            About <span className="text-red-600">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700 mx-auto rounded-full shadow-sm shadow-red-600/50" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5"
          >
            {aboutData.paragraphs.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                className="p-5 rounded-2xl bg-[#141414]/60 border border-white/[0.06] backdrop-blur-sm hover:border-red-600/20 transition-colors"
              >
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-normal">
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, scale: 1.015, transition: { duration: 0.22, ease: 'easeOut' } }}
                className="p-5 sm:p-6 rounded-2xl bg-[#141414] border border-white/[0.08] hover:border-red-600/40 hover:shadow-2xl hover:shadow-red-950/25 transition-all duration-300 group flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center mb-4 group-hover:bg-red-600/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-red-500 transition-colors group-hover:text-red-400" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

