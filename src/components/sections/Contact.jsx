import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { HiPaperAirplane } from 'react-icons/hi'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { SITE_CONFIG } from '../../utils/constants'
import { fadeInLeft, fadeInRight } from '../../utils/animations'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus("sending")

    const data = new FormData()

    data.append("access_key", "4b9f6fe2-115f-4caa-b5e1-300364ab0be1")
    data.append("name", formData.name)
    data.append("email", formData.email)
    data.append("subject", formData.subject)
    data.append("message", formData.message)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    })

    const result = await response.json()

    if (result.success) {
      setStatus("sent")

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setTimeout(() => setStatus("idle"), 3000)
    } else {
      setStatus("idle")
      alert("Failed to send message.")
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
    },
    ...(SITE_CONFIG.phone
      ? [
        {
          icon: FaPhone,
          label: 'Phone',
          value: SITE_CONFIG.phone,
          href: `tel:${SITE_CONFIG.phone}`,
        },
      ]
      : []),
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: SITE_CONFIG.location,
      href: null,
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: SITE_CONFIG.linkedin,
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'View my repositories',
      href: SITE_CONFIG.github,
    },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Contact"
          title="Get In Touch"
          subtitle="Have an internship opportunity, project discussion, or just want to say hi? My inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className="glass-card p-5 flex items-center gap-4"
              >
                <div className="p-3 rounded-xl aurora-gradient shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card p-8 md:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={HiPaperAirplane}
              className="w-full sm:w-auto"
            >
              {status === 'sending'
                ? 'Sending...'
                : status === 'sent'
                  ? 'Message Sent!'
                  : 'Send Message'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
