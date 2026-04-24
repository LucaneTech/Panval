import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function AdminWord() {
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                alt="TCHIAMA Paijos Clauva — Administrateur Général"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-heading font-bold text-white text-base">TCHIAMA Paijos Clauva</p>
                <p className="text-accent text-xs font-body uppercase tracking-widest mt-0.5">Administrateur Général</p>
              </div>
            </div>
            {/* Accent blocks */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-md -z-10" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-md -z-10" />
          </motion.div>

          {/* Message side - Full text from catalogue */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-xs font-body font-semibold uppercase tracking-[0.2em]">
                Mot de l'Administrateur Général
              </span>
            </div>
            
            <Quote size={36} className="text-accent/30 mb-4" />
            
            <div className="space-y-4 text-base-content/65 font-body text-sm leading-relaxed">
              {/* Paragraph 1 */}
              <p>
                Dans un monde marqué par l'incertitude, la complexité et une concurrence accrue, la réussite des entreprises et des institutions ne repose plus uniquement sur les moyens financiers ou techniques, mais sur <strong className="text-base-content">la qualité de l'information, la pertinence de la stratégie et la maîtrise de l'action.</strong>
              </p>
              
              {/* Paragraph 2 */}
              <p>
                C'est dans cette conviction qu'est né <strong className="text-base-content">Panval Consilium International</strong> : un cabinet pensé pour accompagner les décideurs dans la compréhension de leur environnement, l'anticipation des risques et la prise de décisions stratégiques éclairées.
              </p>
              
              {/* Paragraph 3 */}
              <p>
                Notre ambition est claire : <strong className="text-base-content">apporter de la clarté là où règne la confusion, de la méthode là où dominent l'improvisation, et de la rigueur stratégique là où les enjeux sont élevés.</strong> Nous croyons profondément que l'intelligence économique, le conseil stratégique et le développement des compétences constituent aujourd'hui des leviers essentiels de performance, de souveraineté et de durabilité.
              </p>
              
              {/* Paragraph 4 */}
              <p>
                À travers nos trois trépieds : le conseil stratégique et l'intelligence économique, la formation stratégique, et l'accompagnement global des entreprises et institutions, nous nous engageons à être <strong className="text-base-content">un partenaire de confiance</strong>, capable d'allier vision, expertise et action concrète.
              </p>
              
              {/* Paragraph 5 */}
              <p>
                Panval Consilium International se veut plus qu'un prestataire : <strong className="text-base-content">un allié stratégique au service de la décision, de la compétence et de l'impact durable.</strong>
              </p>
              
              {/* Paragraph 6 */}
              <p>
                Je remercie l'ensemble de nos partenaires, clients et collaborateurs pour la confiance accordée, et réaffirme notre engagement à œuvrer avec excellence, intégrité et responsabilité, au service du développement des organisations et des territoires.
              </p>
            </div>
            
            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-base-300">
              <p className="font-heading font-semibold text-base-content text-lg">TCHIAMA Paijos Clauva</p>
              <p className="text-xs text-base-content/40 font-body uppercase tracking-wider mt-0.5">
                Administrateur Général — Panval Consilium International
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}