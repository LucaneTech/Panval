import { motion } from 'framer-motion'
import { Target, Eye, Compass, Award } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { useTranslation } from 'react-i18next'

/* ─── MissionVisionSection ─────────────────────────────────────────────────── */
export function MissionVisionSection() {
  const { t } = useTranslation('home')

  const missionItems = t('missionVision.mission.items', { returnObjects: true }) as string[]
  const visionItems = t('missionVision.vision.items', { returnObjects: true }) as string[]

  return (
    <section className="section-padding bg-base-200">
      <div className="container-custom">
        <SectionTitle
          eyebrow={t('missionVision.eyebrow')}
          title={t('missionVision.title')}
          subtitle={t('missionVision.subtitle')}
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-base-100 border border-base-300 rounded-md overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
            
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target size={22} className="text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-base-content">
                  {t('missionVision.mission.title')}
                </h3>
              </div>
              
              <p className="text-base-content/70 font-body text-base leading-relaxed mb-6">
                {t('missionVision.mission.intro')}
              </p>
              
              <ul className="space-y-3 mb-6">
                {missionItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-base-content/60 font-body text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-base-300">
                <p className="text-primary/80 font-body text-sm italic">
                  « {t('missionVision.mission.quote')} »
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative bg-base-100 border border-base-300 rounded-md overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-gold-500" />
            
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye size={22} className="text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-base-content">
                  {t('missionVision.vision.title')}
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-base-content/70 font-body text-base leading-relaxed">
                  <span className="font-semibold text-primary">
                    {t('missionVision.vision.intro')}
                  </span>
                </p>
                
                <ul className="space-y-3">
                  {visionItems.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <Award size={14} className="text-accent shrink-0" />
                      <span className="text-base-content/60 font-body text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-md border-l-3 border-accent">
                  <p className="text-base-content/80 font-body text-sm leading-relaxed">
                    <strong className="text-primary">
                      {t('missionVision.vision.objective')}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-base-100 rounded-full border border-base-300">
            <Compass size={14} className="text-accent" />
            <span className="text-xs font-body text-base-content/50 uppercase tracking-wider">
              {t('missionVision.footer')}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionVisionSection