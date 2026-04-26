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
import { useTranslation } from 'react-i18next'

export default function ClientsPage() {
  const { t, i18n } = useTranslation('clients')
  const [filter, setFilter] = useState<TestimonialCategory | 'all'>('all')
  
  const breadcrumbs = t('hero.breadcrumbs', { returnObjects: true }) as string[]
  
  // Récupération des données statistiques depuis les traductions
  const statsData = t('stats.items', { returnObjects: true }) as Array<{
    value: number
    suffix: string
    label: string
    sub: string
    color: string
  }>
  
  // Récupération des objectifs depuis les traductions
  const objectives = t('objectives.items', { returnObjects: true }) as Array<{
    service: string
    goal: string
    target: string
    progress: number
  }>
  
  // Récupération des KPI depuis les traductions
  const kpis = t('kpis.items', { returnObjects: true }) as Array<{
    value: string
    label: string
  }>
  
  // Filtrage des témoignages
  const filtered = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === filter)
  
  // Langue courante pour les témoignages
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]

  return (
    <>
      <Helmet>
        <title>{t('hero.title')} — Panval Consilium International</title>
        <meta name="description" content={t('hero.subtitle')} />
      </Helmet>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
        breadcrumbs={breadcrumbs.map(label => ({ label }))}
      />

      {/* Stats */}
      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <SectionTitle 
            eyebrow={t('stats.eyebrow')} 
            title={t('stats.title')} 
            centered 
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {(statsData || []).map((s, i) => (
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
          <SectionTitle 
            eyebrow={t('testimonials.eyebrow')} 
            title={t('testimonials.title')} 
            centered 
          />
          
          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mt-8 mb-10">
            {[
              { key: 'all' as const, label: t('testimonials.filters.all') },
              { key: 'entreprise' as const, label: t('testimonials.filters.entreprise') },
              { key: 'partenaire' as const, label: t('testimonials.filters.partenaire') },
            ].map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2 rounded-md text-xs font-body font-semibold uppercase tracking-wider transition-all ${
                  filter === f.key 
                    ? 'bg-primary text-white' 
                    : 'bg-base-200 border border-base-300 text-base-content/60 hover:bg-base-300'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, i) => {
              // Récupération de la citation dans la bonne langue
              const quote = typeof item.quote === 'object' 
                ? (item.quote[currentLang as keyof typeof item.quote] || item.quote.fr)
                : item.quote
              
              // Récupération du secteur dans la bonne langue
              const sector = typeof item.sector === 'object'
                ? (item.sector[currentLang as keyof typeof item.sector] || item.sector.fr)
                : item.sector
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i % 6) * 0.07 }}
                  className="bg-base-200 border border-base-300 rounded-md p-6 hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} size={11} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-base-content/65 font-body text-sm leading-relaxed italic flex-1 mb-5">
                    "{quote}"
                  </p>
                  <div className="pt-4 border-t border-base-300 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-heading font-bold text-primary shrink-0">
                      {item.company.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm text-base-content">{item.company}</p>
                      <p className="text-xs text-base-content/40 font-body">
                        {sector} · {(item.category === 'partenaire' 
                          ? t('testimonials.filters.partenaire') 
                          : t('testimonials.filters.entreprise'))}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Objectives 2026 */}
      <section className="section-padding bg-base-200">
        <div className="container-custom">
          <SectionTitle 
            eyebrow={t('perspectives.eyebrow')} 
            title={t('perspectives.title')} 
            centered 
          />
          <div className="overflow-x-auto mt-10">
            <table className="table w-full text-sm font-body">
              <thead>
                <tr className="border-b border-base-300">
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-base-content/40 font-semibold">
                    {t('objectives.tableHeaders.service')}
                  </th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-base-content/40 font-semibold">
                    {t('objectives.tableHeaders.goal')}
                  </th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-base-content/40 font-semibold">
                    {t('objectives.tableHeaders.target')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {(objectives || []).map((o, i) => (
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
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-md">
                        {o.goal}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-base-content/60 text-xs">{o.target}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {(kpis || []).map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-base-100 border border-base-300 rounded-md p-5 text-center"
              >
                <p className="font-heading text-2xl font-bold text-primary mb-1">{kpi.value}</p>
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