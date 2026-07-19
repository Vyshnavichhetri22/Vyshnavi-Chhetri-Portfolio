import { useScrollProgress } from '../../hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left aurora-gradient"
      style={{ transform: `scaleX(${progress / 100})` }}
    />
  )
}
