import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { PROJECTS } from '../../utils/data'
import { fadeInUp, staggerContainer, cardHover } from '../../utils/animations'

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          subtitle="Real-world applications showcasing my full stack development skills and problem-solving approach."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeInUp}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group"
            >
              <motion.div
                variants={cardHover}
                className="glass-card overflow-hidden h-full flex flex-col"
              >
                <div className="relative overflow-hidden aspect-video">
                  {/* Replace project.image with actual screenshots in src/assets/projects/ */}
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.features.slice(0, 4).map((feature) => (
                      <span
                        key={feature}
                        className="text-xs text-slate-500 dark:text-slate-500"
                      >
                        {feature}
                        {project.features.indexOf(feature) < 3 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    <Button
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                      icon={FaGithub}
                    >
                      GitHub
                    </Button>
                    {project.liveDemo && (
                      <Button
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        size="sm"
                        icon={FaExternalLinkAlt}
                      >
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
