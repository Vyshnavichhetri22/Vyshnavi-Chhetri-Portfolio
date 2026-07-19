import { motion } from 'framer-motion'
import {
  SiJavascript,
  SiPhp,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si'
import { FaJava, FaDatabase, FaCss3Alt } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import { HiCode, HiDesktopComputer, HiServer, HiDatabase, HiCog, HiLightBulb } from 'react-icons/hi'
import SectionHeading from '../ui/SectionHeading'
import { SKILL_CATEGORIES } from '../../utils/data'
import { staggerContainer, fadeInUp, cardHover } from '../../utils/animations'

const SKILL_ICONS = {
  Java: FaJava,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  SQL: FaDatabase,
  HTML: SiHtml5,
  CSS: FaCss3Alt,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,
  React: SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': VscVscode,
  Postman: SiPostman,
  XAMPP: HiServer,
  DBMS: HiDatabase,
  'Operating System': HiDesktopComputer,
  'Object Oriented Programming': HiCode,
  'Data Structures & Algorithms': HiLightBulb,
}

const CATEGORY_ICONS = {
  code: HiCode,
  frontend: HiDesktopComputer,
  backend: HiServer,
  database: HiDatabase,
  tools: HiCog,
  concepts: HiLightBulb,
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          subtitle="Technologies and concepts I work with to build modern, scalable applications."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category) => {
            const CategoryIcon = CATEGORY_ICONS[category.icon] || HiCode

            return (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="glass-card p-6 md:p-8 group"
              >
                <motion.div variants={cardHover} className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl aurora-gradient">
                      <CategoryIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, index) => {
                      const Icon = SKILL_ICONS[skill]
                      return (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.08, y: -2 }}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100/80 dark:bg-white/5 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/5 transition-shadow hover:shadow-md hover:shadow-indigo-500/10"
                        >
                          {Icon && <Icon className="w-4 h-4 text-indigo-500" />}
                          {skill}
                        </motion.span>
                      )
                    })}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
