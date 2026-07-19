import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative p-2.5 rounded-xl glass hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.4 }}
      >
        {isDark ? (
          <HiMoon className="w-5 h-5 text-indigo-300" />
        ) : (
          <HiSun className="w-5 h-5 text-amber-500" />
        )}
      </motion.div>
    </motion.button>
  )
}
