import { motion } from 'framer-motion'

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-surface-light dark:bg-surface-dark transition-colors duration-500" />

      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-30 dark:opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
        }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] rounded-full opacity-25 dark:opacity-15 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
        }}
        animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-1/4 left-1/3 w-[550px] h-[550px] rounded-full opacity-20 dark:opacity-10 blur-[110px]"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
        }}
        animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
