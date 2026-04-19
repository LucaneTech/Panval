import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface Breadcrumb {
  label: string
  path?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  image?: string
  breadcrumbs?: Breadcrumb[]
}

export default function PageHero({ title, subtitle, image, breadcrumbs = [] }: PageHeroProps) {
  return (
    <section
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      style={{
        backgroundImage: image
          ? `linear-gradient(135deg, rgba(13,32,53,0.97) 0%, rgba(26,58,90,0.93) 60%, rgba(192,57,43,0.15) 100%), url(${image})`
          : 'linear-gradient(135deg, #0d2035 0%, #1a3a5a 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>

      <div className="container-custom relative">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 text-xs text-white/50 font-body mb-6"
          >
            <Link to="/" className="hover:text-white/80 transition-colors">Accueil</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} className="text-white/30" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-white/80 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
        >
          {title}
        </motion.h1>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 h-1 w-16 bg-accent rounded-full"
          style={{ transformOrigin: 'left' }}
        />

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-5 text-lg text-white/65 max-w-2xl leading-relaxed font-body"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
