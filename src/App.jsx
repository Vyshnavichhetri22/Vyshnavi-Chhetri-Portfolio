import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from './hooks/useTheme'
import { LoadingScreenWrapper } from './components/layout/LoadingScreen'
import AuroraBackground from './components/layout/AuroraBackground'
import Particles from './components/layout/Particles'
import ScrollProgress from './components/layout/ScrollProgress'
import AnimatedCursor from './components/layout/AnimatedCursor'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import { pageTransition } from './utils/animations'

function AppContent() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <AuroraBackground />
      <Particles />
      <ScrollProgress />
      {/* <AnimatedCursor /> */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <AnimatePresence mode="wait">
        <motion.main
          key="home"
          {...pageTransition}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <LoadingScreenWrapper>
        <AppContent />
      </LoadingScreenWrapper>
    </Router>
  )
}
