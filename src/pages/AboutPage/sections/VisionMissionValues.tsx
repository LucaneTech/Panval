import { motion } from 'framer-motion'
import { Star, Shield, Lightbulb, Target, Award, Lock, Users } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { companyValues } from '@/data/team.data'

const iconMap: Record<string, React.ElementType> = {
  Star, Shield, Lightbulb, Target, Award, Lock, Handshake: Users,
}

export default function VisionMissionValues() {
  return (
    <>
      {/* Vision & Mission */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-md p-8"
            >
              <div className="w-10 h-10 rounded-md bg-accent/20 flex items-center justify-center mb-5">
                <Target size={20} className="text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">Notre Vision</h3>
              <div className="h-0.5 w-10 bg-accent mb-5" />
              <p className="text-white/65 font-body leading-relaxed">
                Être un cabinet de référence internationale reconnu pour l'excellence de ses formations, la fiabilité de ses études de marché et l'innovation de ses services de conciergerie, afin de contribuer durablement à la performance et à la compétitivité de ses clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="bg-white/5 border border-white/10 rounded-md p-8"
            >
              <div className="w-10 h-10 rounded-md bg-accent/20 flex items-center justify-center mb-5">
                <Star size={20} className="text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">Notre Mission</h3>
              <div className="h-0.5 w-10 bg-accent mb-5" />
              <ul className="space-y-3 text-white/65 font-body text-sm">
                {[
                  'Des formations stratégiques et professionnelles pour développer le leadership et les compétences clés',
                  'Des études de marché et diagnostics fiables pour éclairer les décisions stratégiques',
                  'Des services de conciergerie sur mesure pour optimiser le fonctionnement quotidien',
                ].map((m, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-base-200">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Nos valeurs"
            title="Ce qui nous guide au quotidien"
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {companyValues.map((v, i) => {
              const Icon = iconMap[v.icon] ?? Star
              return (
                <motion.div
                  key={v.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-base-100 border border-base-300 rounded-md p-6 hover:shadow-md hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 group-hover:bg-primary transition-colors flex items-center justify-center">
                      <Icon size={18} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-base-content/10 group-hover:text-accent/30 transition-colors">{v.number}</span>
                  </div>
                  <h4 className="font-heading font-bold text-base-content text-base mb-2">{v.title}</h4>
                  <p className="text-base-content/55 font-body text-xs leading-relaxed">{v.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
