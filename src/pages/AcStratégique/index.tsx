import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { User, Building2, CheckCircle } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { useTranslation } from 'react-i18next'
import { useCepData } from '@/hooks/useCepData'

export default function AccompagnementStrategique() {
  const { t } = useTranslation('acstrategique')
  const { services, steps } = useCepData()
  const [activeTab, setActiveTab] = useState<'dirigeant' | 'organisation'>('dirigeant')
  
  const filtered = services.filter(s => s.category === activeTab)

  const breadcrumbs = t('hero.breadcrumbs', { returnObjects: true }) as string[]
  const introCards = t('introCards', { returnObjects: true }) as Array<{ label: string; desc: string }>
  const tabsLabels = t('benefits.tabs', { returnObjects: true }) as string[]

  return (
    <>
      <Helmet>
        <title>{t('hero.title')} — Panval Consilium International</title>
        <meta name="description" content={t('hero.subtitle')} />
      </Helmet>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        image="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1400&q=80"
        breadcrumbs={breadcrumbs.map(label => ({ label }))}
      />

      {/* Intro */}
      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <SectionTitle
                eyebrow={t('intro.eyebrow')}
                title={t('intro.title')}
                subtitle={t('intro.subtitle')}
              />
              <div className="mt-8 grid grid-cols-2 gap-4">
                {introCards.map((b, i) => (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-3 p-4 bg-base-200 rounded-md border border-base-300"
                  >
                    {i === 0 && <User size={16} className="text-accent mt-0.5 shrink-0" />}
                    {i === 1 && <Building2 size={16} className="text-accent mt-0.5 shrink-0" />}
                    {i >= 2 && <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />}
                    <div>
                      <p className="text-xs font-body font-semibold text-base-content">{b.label}</p>
                      <p className="text-xs text-base-content/50 font-body">{b.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-md overflow-hidden aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
                alt="Accompagnement stratégique"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services tabs */}
      <section className="section-padding bg-base-200">
        <div className="container-custom">
          <SectionTitle eyebrow={t('benefits.eyebrow')} title={t('benefits.title')} centered />
          <div className="flex gap-3 justify-center mt-8 mb-10">
            {[
              { key: 'dirigeant' as const, label: tabsLabels[0] ?? 'Pour les dirigeants', icon: User },
              { key: 'organisation' as const, label: tabsLabels[1] ?? 'Pour les organisations', icon: Building2 },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-md text-sm font-body font-medium uppercase tracking-wider transition-all ${activeTab === tab.key ? 'bg-primary text-white shadow-md' : 'bg-base-100 border border-base-300 text-base-content/60 hover:bg-base-300'
                  }`}
              >
                <tab.icon size={15} /> {tab.label}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="bg-base-100 border border-base-300 rounded-md p-5 hover:shadow-md hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-body font-semibold text-sm text-base-content mb-1 leading-snug">{s.title}</h4>
                    <p className="text-xs text-base-content/55 font-body leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stepper */}
      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <SectionTitle eyebrow={t('stepper.eyebrow')} title={t('stepper.title')} centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-base-200 border border-base-300 rounded-md p-6"
              >
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-2.5 w-5 h-px bg-base-300" />
                )}
                <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center mb-4">
                  <span className="font-mono font-bold text-sm text-white">{String(step.step).padStart(2, '0')}</span>
                </div>
                <h4 className="font-heading font-bold text-base-content mb-1">{step.title}</h4>
                <p className="text-xs text-accent font-body font-semibold mb-3">{step.duration}</p>
                <p className="text-xs text-base-content/60 font-body leading-relaxed">{step.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}