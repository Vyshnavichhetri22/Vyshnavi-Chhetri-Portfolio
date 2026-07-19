import { motion } from 'framer-motion'
import { HiAcademicCap, HiBriefcase, HiFlag } from 'react-icons/hi'
import SectionHeading from '../ui/SectionHeading'
import { ABOUT_CONTENT } from '../../utils/data'
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '../../utils/animations'

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          subtitle="A dedicated software engineer intern with a passion for crafting elegant digital experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="glass-card p-8 md:p-10"
          >
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
              {ABOUT_CONTENT.intro}
            </p>
            {/* <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
              As a third-year BIT student and Software Engineer Intern at Yuga
              Yatra Retail, I combine academic knowledge with real-world
              experience to deliver thoughtful, user-focused solutions.
            </p> */}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="glass-card p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl aurora-gradient shrink-0">
                  <HiAcademicCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Education Timeline
                  </h3>
                  <div className="space-y-6">
                    {ABOUT_CONTENT.education.map((item, index) => (
                      <div key={index} className="relative pl-6 border-l-2 border-indigo-500/30">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full aurora-gradient" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                          {item.year}
                        </span>
                        <h4 className="font-semibold text-slate-900 dark:text-white mt-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400">
                          {item.institution}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl aurora-gradient shrink-0">
                <HiBriefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Current Internship
                </h3>
                <p className="font-semibold text-indigo-600 dark:text-indigo-400">
                  {ABOUT_CONTENT.internship.title}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {ABOUT_CONTENT.internship.company} · {ABOUT_CONTENT.internship.period}
                </p>
                <p className="text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                  {ABOUT_CONTENT.internship.description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl aurora-gradient shrink-0">
                <HiFlag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Career Goal
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {ABOUT_CONTENT.careerGoal}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
