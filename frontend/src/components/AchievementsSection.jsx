import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star } from 'lucide-react';
import { achievementsData } from '../data/mockData';

const getIcon = (iconName) => {
  const icons = {
    Trophy: Trophy,
    Medal: Medal,
    Star: Star
  };
  return icons[iconName] || Trophy;
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            <span className="text-red-600">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-red-700 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Recognition and accomplishments along my journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {achievementsData.map((achievement, index) => {
            const IconComponent = getIcon(achievement.icon);
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-6 rounded-xl bg-[#141414] border border-white/10 hover:border-red-700/40 transition-all duration-300 text-center overflow-hidden shadow-lg shadow-black/20"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-700/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="relative w-16 h-16 mx-auto rounded-full bg-red-700/10 flex items-center justify-center mb-4 group-hover:bg-red-700/20 transition-colors">
                  {IconComponent && <IconComponent className="w-8 h-8 text-red-500" />}
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="relative text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
