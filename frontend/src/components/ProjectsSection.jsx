import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { projectsData } from '../data/mockData';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
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
            My <span className="text-red-600">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700 mx-auto rounded-full shadow-sm shadow-red-600/50 mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Here are some of the projects I've worked on, showcasing my skills and learning journey
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, scale: 1.015, transition: { duration: 0.22, ease: 'easeOut' } }}
              className="group relative rounded-2xl overflow-hidden bg-[#141414] border border-white/[0.08] hover:border-red-600/40 transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-red-950/25 flex flex-col justify-between h-full"
            >
              {/* Top part: Image + Details */}
              <div>
                {/* Project Image Container */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-[#1a1a1c]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />

                  {/* Desktop Quick Hover Link Icons */}
                  <div className="absolute top-3 right-3 hidden sm:flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg bg-black/70 backdrop-blur-sm text-white hover:bg-red-600 transition-colors border border-white/10"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg bg-black/70 backdrop-blur-sm text-white hover:bg-red-600 transition-colors border border-white/10"
                      aria-label={`${project.title} Live Preview`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-2.5">
                    <Folder className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Role Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-gray-500 font-medium">Role:</span>
                    <span className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-600/10 border border-red-600/30 text-red-400">
                      {project.role}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-white/[0.04] text-gray-300 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer: Always accessible on mobile and desktop */}
              <div className="px-5 sm:px-6 pb-5 pt-0 border-t border-white/[0.06] mt-auto flex items-center justify-between gap-3">
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors py-2 group/link"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="absolute bottom-1 left-0 right-0 h-[1.5px] bg-red-400 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-200 ease-out origin-left rounded-full" />
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors py-2 group/link"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                  <span className="absolute bottom-1 left-0 right-0 h-[1.5px] bg-gray-300 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-200 ease-out origin-left rounded-full" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

