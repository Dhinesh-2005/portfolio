import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../data/mockData';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 relative">
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
            <span className="text-red-600">Education</span>
          </h2>
          <div className="w-20 h-1 bg-red-700 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-[15px] top-10 bottom-0 w-0.5 bg-red-900/30" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-red-700/20 flex items-center justify-center border-2 border-red-700">
                <GraduationCap className="w-4 h-4 text-red-500" />
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="ml-6 p-6 rounded-xl bg-[#141414] border border-white/10 hover:border-red-700/40 transition-all duration-300 shadow-lg shadow-black/20"
              >
                {/* Duration Badge */}
                <div className="flex items-center gap-2 text-red-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.duration}</span>
                </div>

                {/* Degree */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.institution}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
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
