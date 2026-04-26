import { motion } from 'framer-motion'

import { ArrowRight, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useTranslation } from 'react-i18next'

export default function HeroSection() {
  const { t } = useTranslation('home')
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden py-8 sm:py-12 md:py-16"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(13,32,53,0.97) 0%, rgba(26,58,90,0.93) 60%, rgba(192,57,43,0.15) 100%), url(https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-accent/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border border-white/5"
        />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-accent/60" />
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-white/30" />
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-accent/40" />
      </div>

      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="w-10 h-px bg-accent" />
            <span className="text-accent text-xs font-body font-semibold uppercase tracking-[0.25em]">
              {t('hero.eyebrow')}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
          >
            {t('hero.title')}

          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/65 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-2xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >


            <Button to="/formations" label={t('cta.trainings')} variant="primary" icon={<ArrowRight size={15} className="ml-2" />} />
            <Button to="/contact" label={t('cta.contact')} variant="outline" />
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-8 mt-16 p-8 border-t border-white/10"
          >
            {[
              { value: '2 250+', key: 'organizations' },
              { value: '250+', key: 'organisations' },
              { value: '3', key: 'pillars' },
              { value: '5 ans', key: 'experience' }
            ].map(stat => (
              <div key={stat.key}>
                <p className="font-heading text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-white/50 text-xs font-body uppercase tracking-wider">
                  {t(`hero.stats.${stat.key}`)}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={24} className="text-white/30" />
      </motion.div>
    </section>
  )
}
