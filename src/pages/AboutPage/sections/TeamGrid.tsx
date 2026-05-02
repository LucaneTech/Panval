import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '@/components/ui/SectionTitle'
import { teamMembers } from '@/data/team.data'
import { Quote, ChevronRight, X } from 'lucide-react'

type Lang = 'fr' | 'en' | 'ar'

export default function TeamGrid() {
  const { i18n, t } = useTranslation('about')
  const [selectedInsight, setSelectedInsight] = useState<any | null>(null)

  const lang = (i18n.language || 'fr') as Lang
  const members = teamMembers[lang]

  return (
    <>
      <section className="section-padding bg-base-200">
        <div className="container-custom">

          {/* Section Title */}
          <SectionTitle
            eyebrow={t('team.eyebrow')}
            title={t('team.title')}
            subtitle={t('team.subtitle')}
            centered
          />

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {members.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-base-100 border border-base-300 rounded-md overflow-hidden group hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
              >

                {/* Avatar */}
                <div className="h-48 bg-gradient-to-br from-primary/90 to-navy-900 flex items-center justify-center relative overflow-hidden">

                  <div>
                    <img src={member.image} alt={member.name} className="w-full h-full object-contain" />
                  </div>
                

                  {/* Role badge */}
                  <div className="absolute top-2 left-2 bg-accent text-white text-[10px] font-body uppercase tracking-wider py-1 px-3 rounded-full">
                    {member.role.split(' ')[0]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">

                  <h3 className="font-heading font-bold text-xl text-center text-base-content">
                    {member.name}
                  </h3>

                  <p className="text-accent text-xs font-body uppercase tracking-wider mt-1 mb-4 text-center">
                    {member.role}
                  </p>

                  <div className="h-px bg-gradient-to-r from-transparent via-base-300 to-transparent mb-4" />

                  <p className="text-base-content/60 font-body text-sm leading-relaxed flex-1">
                    {member.bio}
                  </p>

                  {/* Insight button */}
                  {member.insight && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedInsight(member)}
                      className="mt-5 w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <Quote size={12} className="text-accent" />
                        <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">
                          {t('team.insightButton')}
                        </span>
                      </div>
                      <ChevronRight size={14} className="text-primary" />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>

      {/* Insight Modal */}
      {selectedInsight && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedInsight(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="bg-base-100 rounded-md max-w-lg w-full shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Header */}
            <div className="relative h-24 bg-gradient-to-r from-primary to-navy-900 flex items-center justify-center">
              <button
                onClick={() => setSelectedInsight(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="w-14 h-14 rounded-full bg-accent/20 border-2 border-accent/50 flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-white">
                  {selectedInsight.initials}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Quote size={14} className="text-accent" />
                <span className="text-xs font-body text-accent uppercase tracking-wider">
                  Insight
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-base-content mb-2">
                {selectedInsight.insight?.title}
              </h3>

              <div className="h-px bg-base-300 my-4" />

              <p className="text-base-content/70 font-body text-sm leading-relaxed mb-4">
                {selectedInsight.insight?.excerpt}
              </p>

              <div className="pt-3 border-t border-base-300">
                <p className="text-xs text-base-content/40">
                  — {selectedInsight.name}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}