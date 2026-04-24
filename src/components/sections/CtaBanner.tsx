import { motion } from 'framer-motion'

import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

interface CtaBannerProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export function CtaBanner({
  title = 'Prêt à transformer votre organisation ?',
  subtitle = 'Diagnostic stratégique premium — 100€ | 118 USD | 65 000 FCFA. Offrez-vous une analyse experte de votre organisation.',
  primaryLabel = 'Demander un diagnostic',
  primaryTo = '/contact',
  secondaryLabel = 'Nos services',
  secondaryTo = '/formations',
}: CtaBannerProps) {
  return (
    <section className="bg-primary py-20">
      <div className="container-custom text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >

          <Button label={primaryLabel} to={primaryTo} icon={<ArrowRight size={15} />} />
           <Button label={secondaryLabel} to={secondaryTo} variant="outline" icon={<ArrowRight size={15} />} />

          
        </motion.div>
      </div>
    </section>
  )
}
