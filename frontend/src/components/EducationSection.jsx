import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../data/mockData';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
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
            <span className="text-red-600">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700 mx-auto rounded-full shadow-sm shadow-red-600/50 mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            My academic background and qualifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-8 sm:pl-10 pb-10 sm:pb-12 last:pb-0"
            >
              {/* Timeline Connector Line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-red-600/50 via-red-600/25 to-transparent" />
              )}

              {/* Timeline Dot Node */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center shadow-md shadow-red-950/40 group-hover:bg-red-600/20 transition-colors duration-300">
                <GraduationCap className="w-5 h-5 text-red-500" />
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ x: 4, y: -2, scale: 1.01, transition: { duration: 0.22, ease: 'easeOut' } }}
                className="ml-6 sm:ml-8 p-6 sm:p-7 rounded-2xl bg-[#141414] border border-white/[0.08] hover:border-red-600/40 transition-all duration-300 shadow-xl shadow-black/30 hover:shadow-2xl hover:shadow-red-950/25 group"
              >
                {/* Duration Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-red-400 text-xs font-semibold mb-3">
                  <Calendar className="w-3.5 h-3.5 text-red-400" />
                  <span>{edu.duration}</span>
                </div>

                {/* Degree */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm font-medium mb-3.5">
                  <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

