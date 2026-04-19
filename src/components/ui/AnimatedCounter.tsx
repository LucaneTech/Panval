import { useCounterAnimation } from '@/hooks/useCounterAnimation'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  className?: string
}

export default function AnimatedCounter({ value, suffix = '', className = '' }: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })
  const count = useCounterAnimation(value, 2000, isVisible)

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {count.toLocaleString('fr-FR')}{suffix}
    </span>
  )
}
