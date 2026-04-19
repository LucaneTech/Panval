import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            'text-xs font-body font-semibold uppercase tracking-[0.2em] mb-3',
            light ? 'text-accent' : 'text-accent'
          )}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          'font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
          light ? 'text-white' : 'text-base-content'
        )}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={cn('mt-4 h-1 w-14 bg-accent rounded-full', centered && 'mx-auto')}
        style={{ transformOrigin: centered ? 'center' : 'left' }}
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={cn(
            'mt-4 text-lg leading-relaxed max-w-2xl',
            light ? 'text-white/75' : 'text-base-content/65',
            centered && 'mx-auto'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
