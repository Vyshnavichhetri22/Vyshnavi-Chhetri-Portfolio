import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
        ? 'text-right items-end'
        : 'text-center items-center'

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`flex flex-col gap-3 mb-12 md:mb-16 ${alignClass} ${className}`}
    >
      {label && (
        <span className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 rounded-full aurora-gradient mt-1" />
    </motion.div>
  )
}
