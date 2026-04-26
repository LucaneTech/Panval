import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Search, Target, Users, MessageSquare, Activity, AlertTriangle, Layers, Eye, Cpu, GitBranch, FileText, CheckSquare, PenTool, LayoutDashboard, Building, Database, BarChart2, Compass } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { etudeServices, etudeMethodologies } from '@/data/etudes.data'

const iconMap: Record<string, React.ElementType> = {
  BarChart3, TrendingUp, Search, Target, Users, MessageSquare, Activity, AlertTriangle,
  Layers, Eye, Telescope: TrendingUp, Cpu, GitBranch, FileText, CheckSquare, PenTool,
  LayoutDashboard, Building, Database, BarChart2, Compass, ClipboardCheck: CheckSquare, MessageCircle: MessageSquare,
}

export default function EtudesPage() {
  return (
    <>
      <Helmet>
        <title>Études & Diagnostics — Panval Consilium International</title>
        <meta name="description" content="20 prestations d'études de marché, diagnostics stratégiques et analyses institutionnelles pour éclairer vos décisions." />
      </Helmet>
      <PageHero
        title="Études & Diagnostics Stratégiques"
        subtitle="Éclairer la décision stratégique par une intelligence managériale fondée sur l'analyse, les données et la compréhension des contextes africains et internationaux."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
        breadcrumbs={[{ label: 'Études & Diagnostics' }]}
      />

      {/* Services grid */}
      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Nos prestations"
            title="20 services d'analyse et d'appui stratégique"
            subtitle="Une offre complète pour éclairer, diagnostiquer et orienter toutes vos décisions stratégiques."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
            {etudeServices.map((s, i) => {
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
                  <div className="w-10 h-10 bg-primary/8 border border-gray-400/20 shadow-lg group-hover:bg-primary rounded-md flex items-center  justify-center mb-4 transition-colors">
                    <Icon size={17} className="text-primary  group-hover:text-white transition-colors" />
                  </div>
                  <p className=" text-accent font-bold text-sm  mb-2">{s.title}</p>
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
            eyebrow="Méthodologies"
            title="Notre approche rigoureuse"
            subtitle="Nous combinons des méthodes éprouvées pour garantir des analyses fiables et des recommandations actionnables."
            light
            centered
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {etudeMethodologies.map((m, i) => {
              const Icon = iconMap[m.icon] ?? Search
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
          <SectionTitle eyebrow="Résultats attendus" title="Ce que nos analyses vous apportent" centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {[
              { val: '100%', label: 'Données fiables', desc: 'Recommandations fondées sur des analyses rigoureuses' },
              { val: '360°', label: 'Vision complète', desc: 'Panorama stratégique, opérationnel et humain' },
              { val: '20+', label: 'Types d\'analyses', desc: 'Du diagnostic organisationnel à la veille stratégique' },
              { val: '48h', label: 'Réactivité', desc: 'Premières conclusions rapides pour les décisions urgentes' },
            ].map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-base-100 border border-base-300 rounded-md p-6 text-center"
              >
                <p className="font-heading text-4xl font-bold text-primary mb-1">{r.val}</p>
                <p className="text-xs font-body font-semibold uppercase tracking-wider text-accent mb-2">{r.label}</p>
                <p className="text-xs text-base-content/55 font-body">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
       
      />
    </>
  )
}
