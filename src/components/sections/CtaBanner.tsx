import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { useTranslation } from 'react-i18next'
import { ctaBannerData } from '@/data/ctaBanner.data'

 



export function CtaBanner() {
  const { i18n } = useTranslation()
  const lang = (i18n.language || 'fr') as keyof typeof ctaBannerData

  const content = ctaBannerData[lang] || ctaBannerData.fr

  return (
    <section className="bg-primary py-20">
      <div className="container-custom text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {content.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto"
        >
          {content.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            label={content.primaryLabel}
            to={content.primaryTo}
            icon={<ArrowRight size={15} />}
          />

          <Button
            label={content.secondaryLabel}
            to={content.secondaryTo}
            variant="outline"
            icon={<ArrowRight size={15} />}
          />
        </motion.div>

      </div>
    </section>
  )
}