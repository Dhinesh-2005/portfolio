import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/mockData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
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
            Work <span className="text-red-600">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700 mx-auto rounded-full shadow-sm shadow-red-600/50 mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            My professional journey and industry experiences
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-red-600/50 via-red-600/25 to-transparent" />

          <div className="space-y-10 md:space-y-14">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 border-2 border-[#0a0a0b] ring-4 ring-red-600/20 shadow-sm shadow-red-600 z-20 flex-shrink-0" />

                {/* Content Card Container */}
                <div className={`w-full ml-11 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-10 lg:pr-14' : 'md:pl-10 lg:pl-14'
                }`}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.015, transition: { duration: 0.22, ease: 'easeOut' } }}
                    className="p-6 sm:p-7 rounded-2xl bg-[#141414] border border-white/[0.08] hover:border-red-600/40 transition-all duration-300 shadow-xl shadow-black/30 hover:shadow-2xl hover:shadow-red-950/25 group"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-3.5 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 group-hover:scale-105 transition-all duration-300">
                        <Briefcase className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-red-500 font-semibold text-sm">{exp.company}</p>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-gray-400 text-xs font-medium mb-4">
                      <Calendar className="w-3.5 h-3.5 text-red-400" />
                      <span>{exp.duration}</span>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2.5 text-gray-300 text-xs sm:text-sm leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

