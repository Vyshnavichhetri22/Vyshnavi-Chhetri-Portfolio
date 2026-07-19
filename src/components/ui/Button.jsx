import { motion } from 'framer-motion'

const variants = {
  primary: 'aurora-gradient text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40',
  secondary:
    'glass text-slate-800 dark:text-slate-100 hover:bg-white/80 dark:hover:bg-white/10',
  outline:
    'border-2 border-indigo-500/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10',
  ghost: 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  download,
  onClick,
  className = '',
  icon: Icon,
  ...props
}) {
  const classes = `
    inline-flex items-center justify-center gap-2 font-medium rounded-xl
    transition-all duration-300 ease-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
    dark:focus-visible:ring-offset-slate-900
    ${variants[variant]} ${sizes[size]} ${className}
  `

  const MotionComponent = href ? motion.a : motion.button

  return (
    <MotionComponent
      href={href}
      target={target}
      rel={rel}
      download={download}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </MotionComponent>
  )
}
