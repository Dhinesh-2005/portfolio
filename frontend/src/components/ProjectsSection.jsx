import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { projectsData } from '../data/mockData';
import { Badge } from './ui/badge';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
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
            My <span className="text-red-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-red-700 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and learning journey
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-xl overflow-hidden bg-[#141414] border border-white/10 hover:border-red-700/40 transition-all duration-300 shadow-lg shadow-black/20"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                
                {/* Overlay Icons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-black/60 backdrop-blur-sm text-white hover:bg-red-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-black/60 backdrop-blur-sm text-white hover:bg-red-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Folder className="w-5 h-5 text-red-500" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Role Badge */}
                <div className="mb-4">
                  <span className="text-xs text-gray-500">My Role:</span>
                  <Badge variant="secondary" className="ml-2 bg-red-700/15 text-red-400 border-red-700/30 hover:bg-red-700/25">
                    {project.role}
                  </Badge>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
