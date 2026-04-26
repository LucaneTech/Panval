import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { stats } from '@/data/stats.data'
import { useTranslation } from 'react-i18next'

export default function StatsStrip() {
  const { i18n } = useTranslation()
  const lang = (i18n.language || 'fr').split('-')[0] as 'fr' | 'en' | 'ar'

  return (
    <section className="bg-primary py-14">
      <div className="container-custom">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              {/* VALUE */}
              <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* LABEL */}
              <p className="text-accent text-xs font-body font-semibold uppercase tracking-widest mb-1">
                {stat.label[lang]}
              </p>

              {/* DESCRIPTION */}
              <p className="text-white/50 text-xs font-body">
                {stat.description[lang]}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}