import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/mockData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Work <span className="text-red-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-red-700 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey and internship experiences
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-red-900/30" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-red-700 border-4 border-[#0a0a0b] z-10" />

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 rounded-xl bg-[#141414] border border-white/10 hover:border-red-700/40 transition-all duration-300 shadow-lg shadow-black/20"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-red-700/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                      <p className="text-red-500 font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2 text-gray-300 text-sm">
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
    </section>
  );
};

export default ExperienceSection;
