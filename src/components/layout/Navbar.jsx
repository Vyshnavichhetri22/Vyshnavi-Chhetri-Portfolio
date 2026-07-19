import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiDownload } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import ThemeToggle from '../ui/ThemeToggle'
import Button from '../ui/Button'
import { NAV_LINKS, SITE_CONFIG } from '../../utils/constants'
import { useScrollSpy } from '../../hooks/useScrollSpy'

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const activeSection = useScrollSpy(NAV_LINKS.map((l) => l.id))

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'glass shadow-lg shadow-indigo-500/5 py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <nav className="container-custom flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <motion.button
            onClick={() => scrollToSection('home')}
            className="font-display text-xl font-bold "
            whileHover={{ scale: 1.02 }}
          >
            VC
          </motion.button>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeSection === link.id
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/15 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle isDark={theme === 'dark'} onToggle={toggleTheme} />
            <Button
              href={SITE_CONFIG.resumePath}
              download
              variant="primary"
              size="sm"
              icon={HiDownload}
            >
              Resume
            </Button>
            <motion.a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </motion.a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle isDark={theme === 'dark'} onToggle={toggleTheme} />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2.5 rounded-xl glass"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <HiX className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              ) : (
                <HiMenu className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] glass shadow-2xl p-6 pt-24 flex flex-col gap-2"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${activeSection === link.id
                    ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                <Button
                  href={SITE_CONFIG.resumePath}
                  download
                  variant="primary"
                  size="md"
                  icon={HiDownload}
                  className="w-full"
                >
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
