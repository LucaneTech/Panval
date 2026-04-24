import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionTitle from '@/components/ui/SectionTitle'
import { teamMembers } from '@/data/team.data'
import { Quote, ChevronRight, X } from 'lucide-react'

export default function TeamGrid() {
  const [selectedInsight, setSelectedInsight] = useState<typeof teamMembers[0] | null>(null)

  return (
    <>
      <section className="section-padding bg-base-200">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Notre équipe dirigeante"
            title="L'expertise au service de votre réussite"
            subtitle="Des professionnels multidisciplinaires engagés pour votre performance durable"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-base-100 border border-base-300 rounded-md overflow-hidden group hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
              >
                {/* Avatar area - Enhanced */}
                <div className="h-56 bg-gradient-to-br from-primary/90 to-navy-900 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative patterns */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-24 h-24 rounded-full border border-white/20" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full border border-white/10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/5" />
                  </div>
                  {/* Avatar circle */}
                  <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border-2 border-accent/50 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <span className="font-heading text-3xl font-bold text-white">{member.initials}</span>
                  </div>
                  {/* Role badge floating */}
                  <div className="absolute top-2 left-2  bg-accent text-white text-[10px] font-body uppercase tracking-wider py-1 px-3 rounded-full shadow-md whitespace-nowrap">
                    {member.role.split(' ')[0].trim()}...
                  </div>
                </div>
                
                {/* Info area */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-heading font-bold text-base-content text-xl text-center">{member.name}</h3>
                  <p className="text-accent text-xs font-body uppercase tracking-wider mt-1 mb-4 text-center">
                    {member.role}
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-base-300 to-transparent mb-4" />
                  <p className="text-base-content/60 font-body text-sm leading-relaxed flex-1">
                    {member.bio}
                  </p>
                  
                  {/* Insight Button - New feature per client requirement §07 */}
                  {member.insight && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedInsight(member)}
                      className="mt-5 w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-md bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-all duration-200 group/btn"
                    >
                      <div className="flex items-center gap-2">
                        <Quote size={12} className="text-accent" />
                        <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">
                          Lire son Insight
                        </span>
                      </div>
                      <ChevronRight size={14} className="text-primary group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Team stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-base-100 rounded-full border border-base-300">
              <span className="text-xs font-body text-base-content/50 uppercase tracking-wider">
                {teamMembers.length} dirigeants · Expertise pluridisciplinaire · Engagement confirmé
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insight Modal - New component per client requirement §07 */}
      {selectedInsight && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedInsight(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            className="bg-base-100 rounded-md max-w-lg w-full shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="relative h-24 bg-gradient-to-r from-primary to-navy-900 flex items-center justify-center">
              <button
                onClick={() => setSelectedInsight(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              <div className="w-14 h-14 rounded-full bg-accent/20 border-2 border-accent/50 flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-white">{selectedInsight.initials}</span>
              </div>
            </div>
            
            {/* Modal content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Quote size={14} className="text-accent" />
                <span className="text-xs font-body text-accent uppercase tracking-wider">Insight</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-base-content mb-2">
                {selectedInsight.insight?.title}
              </h3>
              <div className="h-px bg-base-300 my-4" />
              <p className="text-base-content/70 font-body text-sm leading-relaxed mb-4">
                {selectedInsight.insight?.excerpt}
              </p>
              <div className="pt-3 border-t border-base-300">
                <p className="text-xs font-body text-base-content/40">
                  — {selectedInsight.name}, {selectedInsight.role}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}