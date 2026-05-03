import { motion } from 'framer-motion'
import { partners } from '@/data/testimonials.data'
import { useTranslation } from 'react-i18next'

export default function PartnerLogos() {
  const { t } = useTranslation('home')

  return (
    <section className="section-padding bg-base-200">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-yellow-500 font-body font-semibold uppercase tracking-[0.2em] text-base-content/40 mb-10"
        >
          {t('partners.eyebrow')}
        </motion.p>
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((p, i) => (
            p.logo ? (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <img src={p.logo} alt={p.name} className="h-24 w-auto" />
              </motion.div>
            )
            :( <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 rounded-md border border-base-300 bg-base-100 text-sm font-body font-semibold text-base-content/60 hover:border-primary hover:text-primary transition-all duration-200 cursor-default flex flex-row justify-center items-center"
            >
              {p.name}
            </motion.div>)
        ))}
        </div>
      </div>
    </section>
  )
}
