import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export default function AnimatedCursor() {
    const isFinePointer = useMediaQuery('(pointer: fine)')
    const [isHovering, setIsHovering] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        if (!isFinePointer) return

        document.body.classList.add('custom-cursor')

        const moveCursor = (e) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleMouseOver = (e) => {
            const target = e.target
            const isInteractive =
                target.closest('a, button, [role="button"], input, textarea, select, label') !== null
            setIsHovering(isInteractive)
        }

        window.addEventListener('mousemove', moveCursor)
        document.addEventListener('mouseover', handleMouseOver)

        return () => {
            document.body.classList.remove('custom-cursor')
            window.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mouseover', handleMouseOver)
        }
    }, [isFinePointer, cursorX, cursorY])

    if (!isFinePointer) return null

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-indigo-400/60 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{ scale: isHovering ? 1.8 : 1 }}
                transition={{ duration: 0.2 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-indigo-400 pointer-events-none z-[9999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </>
    )
}
