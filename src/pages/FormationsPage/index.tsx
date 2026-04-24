import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Users, BookOpen, Clock, ArrowRight } from 'lucide-react'

import PageHero from '@/components/layout/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { formationGroups } from '@/data/formations.data'

function ModuleAccordion({ modules }: { modules: typeof formationGroups[0]['modules'] }) {
  const [open, setOpen] = useState<string | null>(null)
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
              <span className="font-body font-medium text-sm text-base-content">{mod.title}</span>
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
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-start gap-2 p-3 bg-primary/5 border border-primary/15 rounded-md">
                    <span className="text-primary text-xs font-semibold font-body uppercase tracking-wider shrink-0">Bénéfices :</span>
                    <span className="text-xs text-base-content/60 font-body">{mod.benefits}</span>
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
  const [activeGroup, setActiveGroup] = useState<'A' | 'B' | 'C' | 'D'>('A')
  const current = formationGroups.find(g => g.id === activeGroup)!

  const formats = [
    { icon: BookOpen, label: 'Formations exécutives', desc: 'Sessions courtes & ciblées' },
    { icon: Users, label: 'Séminaires stratégiques', desc: '2 à 3 jours immersifs' },
    { icon: Clock, label: 'Ateliers institutionnels', desc: 'Groupes, sur mesure' },
    { icon: ArrowRight, label: 'Coaching dirigeants', desc: 'Individuel & collectif' },
  ]

  return (
    <>
      <Helmet>
        <title>Formations — Panval Consilium International</title>
        <meta name="description" content="4 groupes de formations stratégiques pour dirigeants, cadres et équipes. Leadership, stratégie, transformation, communication." />
      </Helmet>
      <PageHero
        title="Formations Stratégiques"
        subtitle="Accompagner les dirigeants, cadres et équipes, structurer les compétences clés et faire progresser durablement les organisations."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80"
        breadcrumbs={[{ label: 'Formations' }]}
      />

      {/* Group tabs */}
      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Nos programmes"
            title="4 groupes de formations structurées"
            subtitle="Chaque groupe adresse un axe stratégique précis, avec des modules concrets et des bénéfices mesurables."
          />

          {/* Tab selector */}
          <div className="flex flex-wrap gap-3 mt-10">
            {formationGroups.map(g => (
              <button
                key={g.id}
                onClick={() => setActiveGroup(g.id)}
                className={`px-5 py-2.5 rounded-md text-xs font-body font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeGroup === g.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-base-200 text-base-content/60 hover:bg-base-300'
                }`}
              >
                {g.label} — {g.subtitle.split(',')[0]}
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
                  <img src={current.image} alt={current.subtitle} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading text-xl font-bold text-base-content mb-2">{current.subtitle}</h3>
                <div className="h-0.5 w-10 bg-accent mb-3" />
                <p className="text-base-content/60 font-body text-sm leading-relaxed mb-5">{current.description}</p>
                <div className="space-y-1">
                  <p className="text-xs font-body font-semibold uppercase tracking-wider text-base-content/40 mb-2">Public cible</p>
                  {current.audience.map(a => (
                    <div key={a} className="flex items-center gap-2 text-xs text-base-content/60 font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: modules */}
              <div className="md:col-span-3">
                <p className="text-xs font-body font-semibold uppercase tracking-wider text-base-content/40 mb-1">
                  {current.modules.length} modules disponibles
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
          <SectionTitle eyebrow="Modalités" title="Formats d'intervention" centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {formats.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-base-100 border border-base-300 rounded-md p-6 text-center hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-md  flex items-center justify-center mx-auto mb-4">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h4 className="font-heading font-bold text-sm text-base-content mb-1">{f.label}</h4>
                <p className="text-xs text-base-content/50 font-body">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Besoin d'une formation sur mesure ?"
        subtitle="Contactez-nous pour un devis personnalisé adapté à vos équipes et vos enjeux."
        primaryLabel="Demander un devis"
        secondaryLabel="Voir les études"
        secondaryTo="/etudes"
      />
    </>
  )
}
