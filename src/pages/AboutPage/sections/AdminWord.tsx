import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function AdminWord() {
  const { t } = useTranslation('about')
  const paragraphs = t('admin.paragraphs', { returnObjects: true }) as string[]

  return (
    <section className="section-padding bg-base-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Portrait side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-md overflow-hidden aspect-[3/4] max-h-[520px] bg-base-200">
              <img
                src="images/directeur.jpeg"
                alt={t('admin.portraitAlt')}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-heading font-bold text-white text-base">
                  {t('admin.name')}
                </p>
                <p className="text-accent text-xs font-body uppercase tracking-widest mt-0.5">
                  {t('admin.role')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Message side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-xs font-body font-semibold uppercase tracking-[0.2em]">
                {t('admin.eyebrow')}
              </span>
            </div>

            <Quote size={36} className="text-accent/30 mb-4" />

            <div className="space-y-4 text-base-content/65 font-body text-sm leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-base-300">
              <p className="font-heading font-semibold text-base-content text-lg">
                {t('admin.signature.name')}
              </p>
              <p className="text-xs text-base-content/40 font-body uppercase tracking-wider mt-0.5">
                {t('admin.signature.role')}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}