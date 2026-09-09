import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Lightbulb, RefreshCw, Clock, Brain } from 'lucide-react';
import { skillsData } from '../data/mockData';

const getIcon = (iconName) => {
  const icons = {
    MessageSquare: MessageSquare,
    Users: Users,
    Lightbulb: Lightbulb,
    RefreshCw: RefreshCw,
    Clock: Clock,
    Brain: Brain
  };
  return icons[iconName] || MessageSquare;
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none" />

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
            My <span className="text-red-600">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700 mx-auto rounded-full shadow-sm shadow-red-600/50 mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A combination of technical expertise and soft skills that enable me to deliver quality work
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#141414] border border-white/[0.08] shadow-xl shadow-black/30"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-full shadow-sm shadow-red-600 animate-pulse" />
              Technical Skills
            </h3>
            <div className="space-y-4 sm:space-y-5">
              {skillsData.technical.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-red-600/10 border border-red-600/30 text-red-400 font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-black/40 border border-white/5 rounded-full overflow-hidden p-[1px]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.08, duration: 0.9, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-red-800 via-red-600 to-red-500 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-full shadow-sm shadow-red-600 animate-pulse" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {skillsData.soft.map((skill, index) => {
                const IconComponent = getIcon(skill.icon);
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.94, y: 15 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2, ease: 'easeOut' } }}
                    className="p-5 rounded-2xl bg-[#141414] border border-white/[0.08] hover:border-red-600/40 hover:shadow-xl hover:shadow-red-950/25 transition-all duration-300 text-center group flex flex-col items-center justify-center min-h-[120px]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center mb-3 group-hover:bg-red-600/20 group-hover:scale-110 transition-all duration-300">
                      {IconComponent && <IconComponent className="w-6 h-6 text-red-500 transition-colors group-hover:text-red-400" />}
                    </div>
                    <span className="text-gray-300 text-xs sm:text-sm font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

