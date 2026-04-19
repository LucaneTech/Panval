import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { teamMembers } from '@/data/team.data'

export default function TeamGrid() {
  return (
    <section className="section-padding bg-base-200">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Notre équipe"
          title="Les visages derrière l'excellence"
          centered
        />
        <div className="grid sm:grid-cols-2 gap-8 mt-12 max-w-2xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-base-100 border border-base-300 rounded-sm overflow-hidden group hover:shadow-lg transition-shadow"
            >
              {/* Avatar area */}
              <div className="h-52 bg-gradient-to-br from-primary to-navy-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-24 h-24 rounded-full border border-white/20" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full border border-white/10" />
                </div>
                <div className="w-24 h-24 rounded-full bg-accent/20 border-2 border-accent/40 flex items-center justify-center">
                  <span className="font-heading text-3xl font-bold text-white">{member.initials}</span>
                </div>
              </div>
              {/* Info */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-base-content text-lg">{member.name}</h3>
                <p className="text-accent text-xs font-body uppercase tracking-widest mt-0.5 mb-3">{member.role}</p>
                <div className="h-px bg-base-300 mb-4" />
                <p className="text-base-content/60 font-body text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
