import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { useTranslation } from 'react-i18next'

const clients = [
  'MTN Congo', 'Airtel Congo', 'Présidence de la République',
  'Primature', 'BAD', 'FMI', 'Banque mondiale', 'BEAC',
]

export default function HeroSection() {
  const { t } = useTranslation('home')

  const title = t('hero.title')
  const titleAccent = t('hero.titleAccent')
  const description = t('hero.description')
  const descriptionBold = t('hero.descriptionBold')

  const triptychData = t('hero.triptych', { returnObjects: true }) as Record<string, string>

  const triptych = [
    { keyword: triptychData.savoir, link: '/etudes' },
    { keyword: triptychData.penser, link: '/a-propos' },
    { keyword: triptychData.faire, link: '/conseil-evolution-professionnelle' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-8 sm:py-10 md:py-16">

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        src="hero.mp4"
      />

       {/* <img
          alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://imgs.search.brave.com/TlqKPdhGB3wff-YXFxfh405mWPGkxJYRHw5oxIWGbKc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/NS8wNC8xNi8zNy9t/ZWV0aW5nLTIyODQ1/MDFfNjQwLmpwZw"
      /> */}
    

      {/* 🎨 OVERLAY (exact même gradient qu'avant) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(13,32,53,0.97) 0%, rgba(26,58,90,0.93) 60%, rgba(192,57,43,0.15) 100%)',
        }}
      />

      {/* ── Particules décoratives ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
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

      {/* ── Contenu principal ── */}
      <div className=" relative mx-auto z-20 pt-24">
        <div className=" px-6 md:px-10 max-w-7xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-px bg-accent" />
            <span className="text-accent text-xs font-body font-semibold uppercase tracking-[0.25em]">
              {t('hero.eyebrow')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6"
          >
            {title.split(titleAccent)[0]}
            <span className="text-accent">{titleAccent}</span>
            {title.split(titleAccent)[1]}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="text-white/65 text-base md:text-lg font-body leading-relaxed mb-5 max-w-3xl"
          >
            {description.split(descriptionBold)[0]}
            <strong className="text-white/90 font-semibold">
              {descriptionBold}
            </strong>
            {description.split(descriptionBold)[1]}
          </motion.p>

          {/* Clients */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {clients.map((name) => (
              <span
                key={name}
                className="text-[10px] font-body font-semibold uppercase tracking-wider text-white/45 border border-white/12 px-2.5 py-1 rounded-sm"
              >
                {name}
              </span>
            ))}
            <span className="text-[10px] font-body text-white/30 px-2 py-1 italic">
              {t('hero.clientsLabel')}
            </span>
          </motion.div>

          {/* Triptych */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="flex items-center gap-0 mb-10"
          >
            {triptych.map((item, i) => (
              <span key={item.keyword} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={item.link}
                    className="group relative font-heading text-2xl md:text-3xl font-bold text-white/80 hover:text-accent transition-colors duration-250"
                  >
                    {item.keyword}
                    <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-accent transition-all duration-300" />
                  </Link>
                </motion.div>

                {i < triptych.length - 1 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.65 + i * 0.1 }}
                    className="mx-3 text-accent/50 font-heading text-2xl md:text-3xl font-light select-none"
                  >
                    /
                  </motion.span>
                )}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.82 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              to="/formations"
              label={t('cta.trainings')}
              variant="primary"
              icon={<ArrowRight size={15} className="ml-2" />}
            />
            <Button
              to="/contact"
              label={t('cta.contact')}
              variant="outline"
            />
          </motion.div>

          {/* Stats */}
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
              { value: '5 ans', key: 'experience' },
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

      {/* Scroll */}
      {/* <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown size={24} className="text-white/30" />
      </motion.div> */}
    </section>
  )
}