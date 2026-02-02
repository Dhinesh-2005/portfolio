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
    <section id="about" className="py-20 md:py-32 relative">
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
            About <span className="text-teal-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {aboutData.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-gray-300 leading-relaxed text-base md:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-teal-400/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-400/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
