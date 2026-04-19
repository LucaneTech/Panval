import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'

const steps = [
  { num: '01', title: 'Réflexion profonde', desc: 'Analyse stratégique rigoureuse. Compréhension fine des enjeux humains et institutionnels.', color: 'bg-navy-800' },
  { num: '02', title: 'Action structurée', desc: 'Outils pratiques, concrets et applicables. Solutions adaptées aux réalités locales et internationales.', color: 'bg-crimson-500' },
  { num: '03', title: 'Transformation durable', desc: "Accompagnement dans la durée. Suivi, évaluation et ajustements continus.", color: 'bg-gold-500' },
]

export default function Methodology() {
  return (
    <section className="section-padding bg-base-100">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Notre méthodologie"
          title="Un cadre commun pour nos 3 secteurs"
          subtitle="Notre approche repose sur un triptyque structurant qui garantit la cohérence et l'efficacité de chacune de nos interventions."
          centered
        />
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
              <div className={`w-14 h-14 ${s.color} rounded-md flex items-center justify-center mx-auto mb-5`}>
                <span className="font-mono text-xl font-bold text-white">{s.num}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-3 w-6 h-px bg-base-300 z-10" />
              )}
              <h4 className="font-heading font-bold text-base-content text-xl mb-3">{s.title}</h4>
              <div className="h-0.5 w-8 bg-accent mx-auto mb-4" />
              <p className="text-base-content/60 font-body text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
