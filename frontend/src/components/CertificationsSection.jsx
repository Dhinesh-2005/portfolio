import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/mockData';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-teal-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications and courses I've completed
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              className="group p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-teal-400/30 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-full bg-teal-400/10 flex items-center justify-center mb-4 group-hover:bg-teal-400/20 transition-colors">
                <Award className="w-8 h-8 text-teal-400" />
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold mb-2 group-hover:text-teal-400 transition-colors">
                {cert.name}
              </h3>
              <p className="text-gray-400 text-sm mb-2">{cert.platform}</p>
              <span className="text-teal-400/60 text-xs">{cert.date}</span>

              {/* Hover Link Icon */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-teal-400 mx-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
