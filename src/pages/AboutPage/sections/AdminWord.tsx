import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function AdminWord() {
  return (
    <section className="section-padding bg-base-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Portrait */}
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
            {/* Accent block */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-md -z-10" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-md -z-10" />
          </motion.div>

          {/* Message */}
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-base-content mb-6 leading-tight">
              La rigueur stratégique comme engagement
            </h2>
            <Quote size={36} className="text-accent/30 mb-4" />
            <div className="space-y-4 text-base-content/65 font-body text-sm leading-relaxed">
              <p>
                Dans un monde marqué par l'incertitude, la complexité et une concurrence accrue, la réussite des entreprises et des institutions ne repose plus uniquement sur les moyens financiers ou techniques, mais sur la <strong className="text-base-content">qualité de l'information, la pertinence de la stratégie et la maîtrise de l'action.</strong>
              </p>
              <p>
                C'est dans cette conviction qu'est né Panval Consilium International : un cabinet pensé pour accompagner les décideurs dans la compréhension de leur environnement, l'anticipation des risques et la prise de décisions stratégiques éclairées.
              </p>
              <p>
                Notre ambition est claire : apporter de la clarté là où règne la confusion, de la méthode là où dominent l'improvisation, et de la rigueur stratégique là où les enjeux sont élevés.
              </p>
              <p>
                Panval Consilium International se veut plus qu'un prestataire : <strong className="text-base-content">un allié stratégique au service de la décision, de la compétence et de l'impact durable.</strong>
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-base-300">
              <p className="font-heading font-semibold text-base-content">TCHIAMA Paijos Clauva</p>
              <p className="text-xs text-base-content/40 font-body uppercase tracking-wider mt-0.5">Administrateur Général — Panval Consilium International</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
