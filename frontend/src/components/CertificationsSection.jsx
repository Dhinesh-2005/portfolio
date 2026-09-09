import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certificationsData } from '../data/mockData';

const formatPlatform = (platform) => {
  if (Array.isArray(platform)) {
    return platform.map((p) => p.replace(/,/g, '').trim()).filter(Boolean).join(' • ');
  }
  return platform;
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
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
            <span className="text-red-600">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700 mx-auto rounded-full shadow-sm shadow-red-600/50 mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Professional certifications and courses I've completed
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, scale: 1.015, transition: { duration: 0.22, ease: 'easeOut' } }}
              className="group p-6 rounded-2xl bg-[#141414] border border-white/[0.08] hover:border-red-600/40 transition-all duration-300 text-center shadow-xl shadow-black/30 hover:shadow-2xl hover:shadow-red-950/25 flex flex-col justify-between h-full"
            >
              {/* Top part: Icon + Content */}
              <div>
                {/* Icon */}
                <div className="w-14 h-14 mx-auto rounded-2xl bg-red-600/10 border border-red-600/20 flex items-center justify-center mb-4 group-hover:bg-red-600/20 group-hover:scale-110 transition-all duration-300">
                  <Award className="w-7 h-7 text-red-500 group-hover:text-red-400 transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">
                  {formatPlatform(cert.platform)}
                </p>
              </div>

              {/* Date Badge */}
              <div className="pt-2 border-t border-white/[0.06] mt-auto">
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-semibold">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

