import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { useTranslation } from 'react-i18next'

export default function Methodology() {
  const { t } = useTranslation('about')

  const steps = t('methodology.steps', { returnObjects: true }) as Array<{
    num: string
    title: string
    desc: string
  }>

  return (
    <section className="section-padding bg-base-100">
      <div className="container-custom">

        {/* Header */}
        <SectionTitle
          eyebrow={t('methodology.eyebrow')}
          title={t('methodology.title')}
          subtitle={t('methodology.subtitle')}
          centered
        />

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative bg-base-200 border border-base-300 rounded-md p-8 text-center hover:shadow-md transition-shadow"
            >
              {/* Number */}
              <div className="w-14 h-14 bg-primary rounded-md flex items-center justify-center mx-auto mb-5">
                <span className="font-mono text-xl font-bold text-white">
                  {s.num}
                </span>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-3 w-6 h-px bg-base-300 z-10" />
              )}

              {/* Title */}
              <h4 className="font-heading font-bold text-base-content text-xl mb-3">
                {s.title}
              </h4>

              <div className="h-0.5 w-8 bg-accent mx-auto mb-4" />

              {/* Description */}
              <p className="text-base-content/60 font-body text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}