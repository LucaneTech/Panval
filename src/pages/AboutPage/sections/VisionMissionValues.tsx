import { motion } from 'framer-motion'
import { Star, Shield, Lightbulb, Target, Award, Lock, Users } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { companyValues } from '@/data/team.data'
import { useTranslation } from 'react-i18next'

const iconMap: Record<string, React.ElementType> = {
  Star,
  Shield,
  Lightbulb,
  Target,
  Award,
  Lock,
  Handshake: Users,
}

export default function VisionMissionValues() {
  const { i18n } = useTranslation()

  const lang = (i18n.language || 'fr') as 'fr' | 'en' | 'ar'
  const values = companyValues[lang]

  return (
    <section className="section-padding bg-base-200">
      <div className="container-custom">

        <SectionTitle
          eyebrow={
            lang === 'fr'
              ? 'Nos valeurs'
              : lang === 'en'
              ? 'Our Values'
              : 'قيمنا'
          }
          title={
            lang === 'fr'
              ? 'Ce qui nous guide au quotidien'
              : lang === 'en'
              ? 'What guides us every day'
              : 'ما يوجهنا يومياً'
          }
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

          {values.map((v, i) => {
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

                  <span className="font-mono text-2xl text-gray-500 font-bold group-hover:text-yellow-400 transition-colors">
                    {v.number}
                  </span>
                </div>

                <h4 className="font-heading font-semibold text-yellow-400 text-base mb-2">
                  {v.title}
                </h4>

                <p className="text-base-content/55 font-body text-xs leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}