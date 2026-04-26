import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { CtaBanner } from '@/components/sections/CtaBanner'
import PartnerLogos from '@/components/sections/PartnerLogos'
import { testimonials } from '@/data/testimonials.data'
import type { TestimonialCategory } from '@/types'

const statsData = [
  { value: 120, suffix: '', label: 'Entreprises locales', sub: 'Publiques & privées', color: 'text-primary' },
  { value: 90, suffix: '', label: 'Organisations nationales', sub: 'Institutions', color: 'text-crimson-500' },
  { value: 40, suffix: '', label: 'Organisations internat.', sub: 'Partenaires mondiaux', color: 'text-gold-500' },
  { value: 1850, suffix: '+', label: 'Particuliers formés', sub: 'Dirigeants & cadres', color: 'text-primary' },
]

const objectives = [
  { service: 'Formation', goal: '150 nouvelles organisations', target: 'Entreprises locales, nationales et internationales, particuliers', progress: 0 },
  { service: 'Études & Diagnostics', goal: '120 missions stratégiques', target: 'Organisations publiques et privées', progress: 0 },
  { service: 'Conciergerie & Accompagnement', goal: '80 dirigeants et organisations', target: 'Dirigeants, cadres et institutions', progress: 0 },
]

export default function ClientsPage() {
  const [filter, setFilter] = useState<TestimonialCategory | 'all'>('all')
  const filtered = filter === 'all' ? testimonials : testimonials.filter(t => t.category === filter)

  return (
    <>
      <Helmet>
        <title>Nos clients — Panval Consilium International</title>
        <meta name="description" content="2 250 personnes et organisations accompagnées depuis 2021. Témoignages, partenaires et objectifs 2026." />
      </Helmet>
      <PageHero
        title="Nos Clients & Partenaires"
        subtitle="Ils nous font confiance depuis 2021. Plus de 2 250 personnes et organisations accompagnées vers l'excellence."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
        breadcrumbs={[{ label: 'Nos clients' }]}
      />

      {/* Stats */}
      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <SectionTitle eyebrow="Réalisations 2021–2025" title="Notre impact en chiffres" centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {statsData.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-base-200 border border-base-300 rounded-md p-7 text-center"
              >
                <div className={`font-heading text-5xl font-bold ${s.color} mb-1`}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="font-body font-semibold text-sm text-base-content mb-0.5">{s.label}</p>
                <p className="text-xs text-base-content/40 font-body">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner logos */}
      <PartnerLogos />

      {/* Testimonials */}
      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <SectionTitle eyebrow="Témoignages" title="Ce qu'ils disent de nous" centered />
          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mt-8 mb-10">
            {[
              { key: 'all' as const, label: 'Tous' },
              { key: 'entreprise' as const, label: 'Entreprises privées' },
              { key: 'partenaire' as const, label: 'Sponsors & Partenaires' },
            ].map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2 rounded-md text-xs font-body font-semibold uppercase tracking-wider transition-all ${
                  filter === f.key ? 'bg-primary text-white' : 'bg-base-200 border border-base-300 text-base-content/60 hover:bg-base-300'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 6) * 0.07 }}
                className="bg-base-200 border border-base-300 rounded-md p-6 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, k) => <Star key={k} size={11} className="fill-accent text-accent" />)}
                </div>
                <p className="text-base-content/65 font-body text-sm leading-relaxed italic flex-1 mb-5">
                  "{t.quote.fr}"
                </p>
                <div className="pt-4 border-t border-base-300 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-heading font-bold text-primary shrink-0">
                    {t.company.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-body font-semibold text-sm text-base-content">{t.company}</p>
                    <p className="text-xs text-base-content/40 font-body">{t.sector.fr} · {t.category === 'partenaire' ? 'Partenaire' : 'Client'}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives 2026 */}
      <section className="section-padding bg-base-200">
        <div className="container-custom">
          <SectionTitle eyebrow="Perspectives" title="Objectifs & estimations pour 2026" centered />
          <div className="overflow-x-auto mt-10">
            <table className="table w-full text-sm font-body">
              <thead>
                <tr className="border-b border-base-300">
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-base-content/40 font-semibold">Service</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-base-content/40 font-semibold">Objectif 2026</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-base-content/40 font-semibold">Cibles</th>
                </tr>
              </thead>
              <tbody>
                {objectives.map((o, i) => (
                  <motion.tr
                    key={o.service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-b border-base-300 hover:bg-base-100 transition-colors"
                  >
                    <td className="py-4 px-4 font-semibold text-base-content">{o.service}</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-md">{o.goal}</span>
                    </td>
                    <td className="py-4 px-4 text-base-content/60 text-xs">{o.target}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { val: '500+', label: 'Bénéficiaires totaux depuis 2021' },
              { val: 'Référence', label: 'Africaine & internationale' },
              { val: '100%', label: 'Services personnalisés' },
            ].map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-base-100 border border-base-300 rounded-md p-5 text-center"
              >
                <p className="font-heading text-2xl font-bold text-primary mb-1">{kpi.val}</p>
                <p className="text-xs text-base-content/50 font-body">{kpi.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
