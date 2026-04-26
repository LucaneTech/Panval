import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Users, BookOpen, Clock, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import PageHero from '@/components/layout/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { formationGroups } from '@/data/formations.data'

function ModuleAccordion({ modules }: { modules: typeof formationGroups[0]['modules'] }) {
  const [open, setOpen] = useState<string | null>(null)
  const { t } = useTranslation('formations')
  
  return (
    <div className="space-y-2 mt-6">
      {modules.map(mod => (
        <div key={mod.id} className="border border-base-300 rounded-md overflow-hidden">
          <button
            onClick={() => setOpen(open === mod.id ? null : mod.id)}
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-base-100 hover:bg-base-200 transition-colors"
          >
            <span className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">{mod.id}</span>
              <span className="font-body font-medium text-sm text-base-content">{t(mod.title)}</span>
            </span>
            <motion.div animate={{ rotate: open === mod.id ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={16} className="text-base-content/40 shrink-0" />
            </motion.div>
          </button>
          <AnimatePresence>
            {open === mod.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 pt-3 bg-base-200 border-t border-base-300">
                  <ul className="space-y-1.5 mb-4">
                    {mod.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-body text-base-content/65">
                        <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                        {t(pt)}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-start gap-2 p-3 bg-primary/5 border border-primary/15 rounded-md">
                    <span className="text-primary text-xs font-semibold font-body uppercase tracking-wider shrink-0">{t('programs.benefitsLabel')}</span>
                    <span className="text-xs text-base-content/60 font-body">{t(mod.benefits)}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default function FormationsPage() {
  const { t } = useTranslation('formations')
  const breadcrumbs = t('hero.breadcrumbs', { returnObjects: true }) as string[]
  const [activeGroup, setActiveGroup] = useState<'A' | 'B' | 'C' | 'D'>('A')
  const current = formationGroups.find(g => g.id === activeGroup)
  
  // Fallback au cas où current serait undefined
  if (!current) return null

  const formatsFromLocale = t('programs.formats.items', { returnObjects: true }) as Array<{
    key?: string
    label?: string
    desc?: string
  }>

  const iconMap: Record<string, React.ElementType> = {
    executive: BookOpen,
    seminar: Users,
    workshop: Clock,
    coaching: ArrowRight,
  }

  const formats = (formatsFromLocale && formatsFromLocale.length)
    ? formatsFromLocale.map(f => ({
        icon: iconMap[f.key || 'executive'] || BookOpen,
        label: f.label || '',
        desc: f.desc || '',
      }))
    : [
        { icon: BookOpen, label: 'Formations exécutives', desc: 'Sessions courtes & ciblées' },
        { icon: Users, label: 'Séminaires stratégiques', desc: '2 à 3 jours immersifs' },
        { icon: Clock, label: 'Ateliers institutionnels', desc: 'Groupes, sur mesure' },
        { icon: ArrowRight, label: 'Coaching dirigeants', desc: 'Individuel & collectif' },
      ]

  return (
    <>
      <Helmet>
        <title>{t('hero.title')} — Panval Consilium International</title>
        <meta name="description" content={t('hero.subtitle')} />
      </Helmet>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80"
        breadcrumbs={breadcrumbs.map(label => ({ label }))}
      />

      {/* Group tabs */}
      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <SectionTitle
            eyebrow={t('programs.eyebrow')}
            title={t('programs.title')}
            subtitle={t('programs.subtitle')}
          />

          {/* Tab selector */}
          <div className="flex flex-wrap gap-3 mt-10">
            {formationGroups.map(g => (
              <button
                key={g.id}
                onClick={() => setActiveGroup(g.id as 'A' | 'B' | 'C' | 'D')}
                className={`px-5 py-2.5 rounded-md text-xs font-body font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeGroup === g.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-base-200 text-base-content/60 hover:bg-base-300'
                }`}
              >
                {t(g.label)} — {t(g.subtitle).split(',')[0]}
              </button>
            ))}
          </div>

          {/* Active group content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-10 grid md:grid-cols-5 gap-10"
            >
              {/* Left: info */}
              <div className="md:col-span-2">
                <div className="rounded-md overflow-hidden aspect-video mb-5">
                  <img 
                    src={current.image} 
                    alt={t(current.subtitle)} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-base-content mb-2">
                  {t(current.subtitle)}
                </h3>
                <div className="h-0.5 w-10 bg-accent mb-3" />
                <p className="text-base-content/60 font-body text-sm leading-relaxed mb-5">
                  {t(current.description)}
                </p>
                <div className="space-y-1">
                  <p className="text-xs font-body font-semibold uppercase tracking-wider text-base-content/40 mb-2">
                    {t('programs.publicLabel')}
                  </p>
                  {current.audience.map((a, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-base-content/60 font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" /> 
                      {t(a)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: modules */}
              <div className="md:col-span-3">
                <p className="text-xs font-body font-semibold uppercase tracking-wider text-base-content/40 mb-1">
                  {current.modules.length} {t('programs.modulesAvailable')}
                </p>
                <ModuleAccordion modules={current.modules} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Formats */}
      <section className="section-padding bg-base-200">
        <div className="container-custom">
          <SectionTitle 
            eyebrow={t('programs.formatsEyebrow')} 
            title={t('programs.formatsTitle')} 
            centered 
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {formats.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-base-100 border border-base-300 rounded-md p-6 text-center hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mx-auto mb-4">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h4 className="font-heading font-bold text-sm text-base-content mb-1">{f.label}</h4>
                <p className="text-xs text-base-content/50 font-body">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}