import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Lightbulb, RefreshCw, Clock, Brain } from 'lucide-react';
import { skillsData } from '../data/mockData';

const iconMap = {
  MessageSquare,
  Users,
  Lightbulb,
  RefreshCw,
  Clock,
  Brain
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-teal-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A combination of technical expertise and soft skills that enable me to deliver quality work
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-400 rounded-full" />
              Technical Skills
            </h3>
            <div className="space-y-5">
              {skillsData.technical.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-teal-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-400 rounded-full" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skillsData.soft.map((skill, index) => {
                const IconComponent = iconMap[skill.icon];
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-teal-400/30 transition-all duration-300 text-center group"
                  >
                    <div className="w-12 h-12 mx-auto rounded-lg bg-teal-400/10 flex items-center justify-center mb-3 group-hover:bg-teal-400/20 transition-colors">
                      {IconComponent && <IconComponent className="w-6 h-6 text-teal-400" />}
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
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
