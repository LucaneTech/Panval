import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Search, Target, Users, MessageSquare, Activity, AlertTriangle, Layers, Eye, Cpu, GitBranch, FileText, CheckSquare, PenTool, LayoutDashboard, Building, Database, BarChart2, Compass } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { useTranslation } from 'react-i18next'

const iconMap: Record<string, React.ElementType> = {
  BarChart3, TrendingUp, Search, Target, Users, MessageSquare, Activity, AlertTriangle,
  Layers, Eye, Telescope: TrendingUp, Cpu, GitBranch, FileText, CheckSquare, PenTool,
  LayoutDashboard, Building, Database, BarChart2, Compass, ClipboardCheck: CheckSquare, MessageCircle: MessageSquare,
}

export default function EtudesPage() {
  const { t } = useTranslation('etudes')
  const breadcrumbs = t('hero.breadcrumbs', { returnObjects: true }) as string[]
  
  // Récupération des services depuis les traductions
  const servicesItems = t('services.items', { returnObjects: true }) as Record<string, { title: string; description: string; icon?: string }>
  const services = Object.entries(servicesItems || {}).map(([id, service]) => ({
    id,
    title: service.title,
    description: service.description,
    icon: service.icon || getIconFromTitle(service.title)
  }))
  
  // Récupération des méthodologies depuis les traductions
  const methodologiesItems = t('methodologies.items', { returnObjects: true }) as Record<string, { title: string; description: string; icon: string }>
  const methodologies = Object.entries(methodologiesItems || {}).map(([_, method]) => ({
    title: method.title,
    description: method.description,
    icon: method.icon
  }))
  
  // Récupération des résultats depuis les traductions
  const resultsItems = t('results.items', { returnObjects: true }) as Array<{ value: string; label: string; desc: string }>
  
  // Fonction helper pour déduire l'icône à partir du titre si non spécifiée
  function getIconFromTitle(title: string): string {
    if (title.includes('marché') || title.includes('market')) return 'BarChart3'
    if (title.includes('faisabilité') || title.includes('feasibility')) return 'TrendingUp'
    if (title.includes('Diagnostic') || title.includes('Diagnosis')) return 'Search'
    if (title.includes('positionnement') || title.includes('positioning')) return 'Target'
    if (title.includes('concurrent') || title.includes('competitive')) return 'Users'
    if (title.includes('comportement') || title.includes('behavior')) return 'MessageSquare'
    if (title.includes('performance')) return 'Activity'
    if (title.includes('risque') || title.includes('risk')) return 'AlertTriangle'
    if (title.includes('impact')) return 'Layers'
    if (title.includes('Veille') || title.includes('monitoring')) return 'Eye'
    if (title.includes('prospective') || title.includes('prospective')) return 'Telescope'
    if (title.includes('maturité') || title.includes('maturity')) return 'Cpu'
    if (title.includes('chaîne de valeur') || title.includes('value chain')) return 'GitBranch'
    if (title.includes('Enquête') || title.includes('Survey')) return 'FileText'
    if (title.includes('pré-décision') || title.includes('pre-decision')) return 'CheckSquare'
    if (title.includes('conceptuelle') || title.includes('concept')) return 'PenTool'
    if (title.includes('Tableau de bord') || title.includes('dashboard')) return 'LayoutDashboard'
    if (title.includes('institutionnelle') || title.includes('institutional')) return 'Building'
    if (title.includes('capitalisation') || title.includes('capitalization')) return 'Database'
    return 'Search'
  }

  return (
    <>
      <Helmet>
        <title>{t('hero.title')} — Panval Consilium International</title>
        <meta name="description" content={t('hero.subtitle')} />
      </Helmet>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
        breadcrumbs={breadcrumbs.map(label => ({ label }))}
      />

      {/* Services grid */}
      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <SectionTitle
            eyebrow={t('services.eyebrow')}
            title={t('services.title')}
            subtitle={t('services.subtitle')}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] ?? Search
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 8) * 0.06 }}
                  className="group bg-base-100 border border-base-300 rounded-md p-5 hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 bg-primary/8 border border-gray-400/20 shadow-lg group-hover:bg-primary rounded-md flex items-center justify-center mb-4 transition-colors">
                    <Icon size={17} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-accent font-bold text-sm mb-2">{s.title}</p>
                  <p className="text-xs text-base-content/55 font-body leading-relaxed">{s.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <SectionTitle
            eyebrow={t('methodologies.eyebrow')}
            title={t('methodologies.title')}
            subtitle={t('methodologies.subtitle')}
            light
            centered
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {methodologies.map((m, i) => {
              const Icon = iconMap[m.icon] ?? Compass
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="bg-white/5 border border-white/10 rounded-md p-7 text-center hover:bg-white/8 transition-colors"
                >
                  <div className="w-14 h-14 bg-accent/15 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h4 className="font-heading font-bold text-white text-lg mb-3">{m.title}</h4>
                  <p className="text-white/60 font-body text-sm leading-relaxed">{m.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-base-200">
        <div className="container-custom">
          <SectionTitle eyebrow={t('results.eyebrow')} title={t('results.title')} centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {(resultsItems || []).map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-base-100 border border-base-300 rounded-md p-6 text-center"
              >
                <p className="font-heading text-4xl font-bold text-primary mb-1">{r.value}</p>
                <p className="text-xs font-body font-semibold uppercase tracking-wider text-accent mb-2">{r.label}</p>
                <p className="text-xs text-base-content/55 font-body">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}