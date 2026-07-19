import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 400)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 120)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-surface-dark"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-8"
      >
        <div className="relative">
          <motion.div
            className="w-20 h-20 rounded-2xl aurora-gradient flex items-center justify-center text-2xl font-bold text-white font-display"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            VC
          </motion.div>
          <motion.div
            className="absolute -inset-2 rounded-3xl aurora-gradient opacity-30 blur-xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        <div className="text-center">
          <p className="text-white/80 text-sm font-medium tracking-widest uppercase mb-3">
            Loading Portfolio
          </p>
          <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full aurora-gradient rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-white/40 text-xs mt-2">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function LoadingScreenWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      {!isLoading && children}
    </>
  )
}
