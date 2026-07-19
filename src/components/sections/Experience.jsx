import { motion } from 'framer-motion'
import { HiLocationMarker, HiCalendar } from 'react-icons/hi'
import SectionHeading from '../ui/SectionHeading'
import { EXPERIENCE } from '../../utils/data'
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '../../utils/animations'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          subtitle="My current role and the experience shaping my growth as a software engineer."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              className="relative"
            >
              <div className="glass-card p-8 md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold aurora-gradient text-white shrink-0">
                    Current
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <HiLocationMarker className="w-4 h-4" />
                    {exp.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <HiCalendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full aurora-gradient mt-2 shrink-0" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
