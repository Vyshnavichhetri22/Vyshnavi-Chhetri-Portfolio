import { motion } from 'framer-motion'
import { HiDownload, HiArrowRight, HiMail, HiEye } from 'react-icons/hi'
import Button from '../ui/Button'
import { useTypingAnimation } from '../../hooks/useTypingAnimation'
import { TYPING_ROLES, SITE_CONFIG } from '../../utils/constants'
import { fadeInLeft, fadeInRight } from '../../utils/animations'
import profileImage from '../../assets/profile.png'
import resumePath from "../../assets/resume.pdf";

export default function Hero() {
  const typedText = useTypingAnimation(TYPING_ROLES)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-28 md:pt-32 overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-indigo-500 dark:text-indigo-400 font-medium text-lg mb-2"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-4"
            >
              {SITE_CONFIG.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-10 sm:h-12 mb-6"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold dark:text-indigo-400">
                {typedText}
                <span className="animate-pulse text-indigo-500">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              I am a third-year Bachelor of Information Technology student
              passionate about building modern web applications and continuously
              improving my programming and problem-solving skills. Currently, I
              am working as a Software Engineer Intern at Yuga Yatra Retail
              (OPC) Private Ltd.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                href={SITE_CONFIG.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                icon={HiEye}
              >
                View Resume
              </Button>

              <Button
                href={SITE_CONFIG.resumePath}
                download
                variant="primary"
                size="lg"
                icon={HiDownload}
              >
                Download Resume
              </Button>

              <Button
                onClick={() => scrollTo('projects')}
                variant="secondary"
                size="lg"
                icon={HiArrowRight}
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollTo('contact')}
                variant="outline"
                size="lg"
                icon={HiMail}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] aspect-square">
              <motion.div
                className="absolute inset-0 rounded-full aurora-gradient opacity-20 blur-3xl"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-indigo-500/30 blur-2xl"
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-purple-500/25 blur-2xl"
                animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/2 -right-12 w-24 h-24 rounded-full bg-blue-500/20 blur-xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Replace src with your actual profile photo: src/assets/profile.jpg */}
              <motion.img
                src={profileImage}
                alt="Vyshnavi Chhetri - Profile"
                className="absolute top-[8%] left-[8%] w-[84%] h-[84%] object-cover rounded-3xl opacity-40 blur-md scale-95"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.img
                src={profileImage}
                alt=""
                aria-hidden="true"
                className="absolute top-[4%] left-[4%] w-[92%] h-[92%] object-cover rounded-3xl opacity-25 blur-lg scale-98"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden glass-card p-1.5"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.03 }}
              >
                <motion.img
                  src={profileImage}
                  alt="Vyshnavi Chhetri"
                  className="w-full h-full object-cover rounded-[1.25rem]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
