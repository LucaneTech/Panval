import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, LineChart, Briefcase, Star, Shield, Target, Lightbulb } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'

/* ─── AboutSnippet ─────────────────────────────────────────────────────────── */
export function AboutSnippet() {
  return (
    <section className="section-padding bg-base-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-md overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80"
                alt="Panval Consilium International"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-5 -right-5 rounded-md bg-accent text-white p-5 shadow-xl"
            >
              <p className="font-heading text-3xl font-bold">5+</p>
              <p className="text-xs font-body uppercase tracking-wider text-white/80">Ans d'excellence</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div>
            <SectionTitle
              eyebrow="Qui sommes-nous"
              title="Un allié stratégique au service de votre réussite"
              subtitle="Panval Consilium International est un cabinet de conseil et de services stratégiques spécialisé dans l'accompagnement des entreprises publiques et privées, des organisations et des particuliers."
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 space-y-3"
            >
              {[
                'Formations professionnelles et stratégiques sur mesure',
                'Études de marché et diagnostics institutionnels rigoureux','accompagnement stratégique', 'Conseil en évolution professionnelle (CEP)',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <p className="text-base-content/70 font-body text-sm">{item}</p>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
            

              <Button to="/a-propos" label="En savoir plus" variant="secondary" className="ml-4 px-6 py-2 rounded-md font-body font-medium uppercase tracking-wider text-sm hidden md:inline-flex"  icon={<ArrowRight size={15} className="ml-2" />}/>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── ServicesGrid ──────────────────────────────────────────────────────────── */
const services = [
  {
    icon: BookOpen,
    title: 'Formations Stratégiques',
    description: '4 groupes de formation couvrant la stratégie, le leadership, la transformation organisationnelle et la communication institutionnelle.',
    link: '/formations',
    color: 'bg-navy-800',
  },
  {
    icon: LineChart,
    title: 'Études & Diagnostics',
    description: '20 prestations d\'analyse : études de marché, diagnostics organisationnels, audits de gouvernance, veille stratégique et évaluations d\'impact.',
    link: '/etudes',
    color: 'bg-crimson-500',
  },
{
  icon: Briefcase,
  title: 'Conseil & Accompagnement Stratégique',
  description: 'Accompagnement des dirigeants dans la prise de décision, le pilotage stratégique, la transformation organisationnelle et l’amélioration durable des performances.',
  link: '/cep',
  color: 'bg-gold-500',
}
]

export function ServicesGrid() {
  return (
    <section className="section-padding bg-base-200">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Nos services"
          title="Trois piliers pour votre excellence"
          subtitle="Des solutions intégrées, personnalisées et orientées résultats pour accompagner chaque étape de votre développement."
          centered
        />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-base-100 border border-base-300 rounded-md p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className={`w-12 h-12 ${s.color} rounded-md shadow-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <s.icon size={22} className="text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-base-content mb-3">{s.title}</h3>
              <p className="text-base-content/60 font-body text-sm leading-relaxed flex-1">{s.description}</p>
              <Link
                to={s.link}
                className="mt-6 text-primary text-xs font-body font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
              >
                Découvrir <ArrowRight size={13} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── WhyChooseUs ───────────────────────────────────────────────────────────── */
const whys = [
  { icon: Star, title: 'Excellence opérationnelle', desc: 'Chaque intervention est conduite avec rigueur, méthode et un sens aigu des résultats.' },
  { icon: Shield, title: 'Confidentialité totale', desc: 'Protection absolue de vos informations stratégiques et sensibles.' },
  { icon: Target, title: 'Sur mesure', desc: 'Nos solutions sont adaptées à vos réalités spécifiques, pas des modèles génériques.' },
  { icon: Lightbulb, title: 'Vision africaine & internationale', desc: 'Une expertise ancrée dans les contextes locaux, portée par des standards internationaux.' },
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-base-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <SectionTitle
              eyebrow="Pourquoi nous choisir"
              title="La rigueur stratégique au service de votre impact"
            />
            <div className="mt-10 space-y-7">
              {whys.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <w.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-base-content text-base mb-1">{w.title}</h4>
                    <p className="text-base-content/60 font-body text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-md overflow-hidden aspect-[3/4] max-h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80"
              alt="Excellence stratégique"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <blockquote className="font-heading text-white text-lg font-semibold italic leading-snug">
                "Apporter de la clarté là où règne la confusion, de la méthode là où domine l'improvisation."
              </blockquote>
              <p className="text-accent text-xs font-body uppercase tracking-wider mt-2">TCHIAMA Paijos Clauva, DG</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── HomeTestimonials ──────────────────────────────────────────────────────── */
import { testimonials } from '@/data/testimonials.data'
import Button from '@/components/ui/Button'

export function HomeTestimonials() {
  const featured = testimonials.slice(0, 3)
  return (
    <section className="section-padding bg-base-200">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Témoignages"
          title="Ce que disent nos clients"
          centered
        />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {featured.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-base-100 border border-base-300 rounded-md p-7 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, k) => <Star key={k} size={12} className="fill-accent text-accent" />)}
              </div>
              <p className="text-base-content/70 font-body text-sm leading-relaxed italic mb-6">"{t.quote.slice(0, 160)}..."</p>
              <div className="flex items-center gap-3 pt-4 border-t border-base-300">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-heading font-bold text-primary">
                  {t.company.slice(0, 2)}
                </div>
                <div>
                  <p className="font-body font-semibold text-sm text-base-content">{t.company}</p>
                  <p className="text-xs text-base-content/40 font-body">{t.sector}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/nos-clients" className="btn btn-outline btn-primary rounded-md font-body font-medium uppercase tracking-wider text-sm px-8">
            Voir tous les témoignages <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSnippet
