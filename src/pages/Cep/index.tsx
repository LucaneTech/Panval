import PageHero from '@/components/layout/PageHero'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { motion } from 'framer-motion'
import { Briefcase, ChevronRight, Clock, Compass, Target, Users } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export default function CEP() {
  const { t } = useTranslation('cep')

  const breadcrumbs = t('hero.breadcrumbs', { returnObjects: true }) as string[]

  const steps = t('steps.items', { returnObjects: true }) as Array<any>
  const stepIcons = [Target, Compass, Briefcase, Clock]

  const services = t('services.items', { returnObjects: true }) as Array<any>

  return (
    <>
      <Helmet>
        <title>{t('hero.title')} — Panval Consilium International</title>
        <meta name="description" content={t('hero.subtitle')} />
      </Helmet>

      {/* Page Hero */}
     
       <PageHero
              title={t('hero.title')}
              subtitle={t('hero.subtitle')}
              image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
              breadcrumbs={breadcrumbs.map(label => ({ label }))}
            />

      {/* Introduction */}
      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-accent" />
                <span className="text-accent text-xs font-body font-semibold uppercase tracking-[0.2em]">
                  {t('intro.eyebrow')}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-base-content mb-6">
                {t('intro.title')}
              </h2>
              <div className="space-y-4 text-base-content/70 font-body">
                {(t('intro.points', { returnObjects: true }) as string[]).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-base-200 p-6 rounded-md border-l-4 border-accent">
                <Users className="text-accent mb-3" size={28} />
                <h3 className="font-heading font-bold text-base-content mb-2">{t('servicesFirst.titleIndividual' )}</h3>
                <p className="text-sm text-base-content/60">
                  {t('servicesFirst.individualDesc')}
                </p>
              </div>
              <div className="bg-base-200 p-6 rounded-md border-l-4 border-primary">
                <Briefcase className="text-primary mb-3" size={28} />
                <h3 className="font-heading font-bold text-base-content mb-2">{t('servicesFirst.titleCompany' )}</h3>
                <p className="text-sm text-base-content/60">
                  {t('servicesFirst.companyDesc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Déroulé du parcours */}
      <section className="section-padding bg-base-200">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-xs font-body font-semibold uppercase tracking-[0.2em]">
                {t('steps.eyebrow')}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-base-content">
              {t('steps.title')}
            </h2>
            <p className="text-base-content/60 mt-4">
              {t('steps.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = stepIcons[i] ?? Target
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-base-100 rounded-md p-6 text-center border border-base-300 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="text-accent font-mono text-sm font-bold mb-2">{step.num}</div>
                  <h3 className="font-heading font-bold text-base-content text-lg mb-2">{step.title}</h3>
                  <p className="text-xs text-accent mb-3">{step.duration}</p>
                  <p className="text-base-content/60 text-sm">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services CEP */}
      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
                alt={t('services.imageAlt', { defaultValue: 'Accompagnement professionnel personnalisé' })}
                className="rounded-md shadow-lg w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-accent" />
                <span className="text-accent text-xs font-body font-semibold uppercase tracking-[0.2em]">
                  {t('services.eyebrow')}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-base-content mb-8">
                {t('services.title')}
              </h2>
              <div className="space-y-4">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-md hover:bg-base-200 transition-colors"
                  >
                    <ChevronRight className="text-accent flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-heading font-semibold text-base-content mb-1">
                        {service.title}
                      </h4>
                      <p className="text-base-content/60 text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bénéfices / Tableau comparatif */}
     <section className="section-padding bg-base-200">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-base-content">
              {t('benefits.title')}
            </h2>
            <p className="text-base-content/60 mt-4">
              {t('benefits.subtitle')}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-base-100 rounded-md overflow-hidden">
              <thead>
                <tr className="bg-primary">
                  <th className="text-left p-4 text-white font-bold">{t('benefits.table.headers.benefit')}</th>
                  <th className="text-left p-4 text-white font-bold">{t('benefits.table.headers.individual')}</th>
                  <th className="text-left p-4 text-white font-bold">{t('benefits.table.headers.company')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-base-300">
                  <td className="p-4 font-semibold text-base-content">{t('benefits.rows.clarity.title')}</td>
                  <td className="p-4 text-base-content/70">{t('benefits.rows.clarity.individual')}</td>
                  <td className="p-4 text-base-content/70">{t('benefits.rows.clarity.company')}</td>
              </tr>
                <tr className="border-b border-base-300 bg-base-200/50">
                  <td className="p-4 font-semibold text-base-content">{t('benefits.rows.employability.title')}</td>
                  <td className="p-4 text-base-content/70">{t('benefits.rows.employability.individual')}</td>
                  <td className="p-4 text-base-content/70">{t('benefits.rows.employability.company')}</td>
                </tr>
                <tr className="border-b border-base-300">
                  <td className="p-4 font-semibold text-base-content">{t('benefits.rows.engagement.title')}</td>
                  <td className="p-4 text-base-content/70">{t('benefits.rows.engagement.individual')}</td>
                  <td className="p-4 text-base-content/70">{t('benefits.rows.engagement.company')}</td>
                </tr>
                <tr className="bg-base-200/50">
                  <td className="p-4 font-semibold text-base-content">{t('benefits.rows.anticipation.title')}</td>
                  <td className="p-4 text-base-content/70">{t('benefits.rows.anticipation.individual')}</td>
                  <td className="p-4 text-base-content/70">{t('benefits.rows.anticipation.company')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section Témoignage */}
      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-primary/5 rounded-md p-8 md:p-12 text-center max-w-4xl mx-auto border border-primary/10"
          >
            <div className="absolute top-6 left-6 text-primary/20">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4zm-8 8h-4v-4h4v4zm8 0h-4v-4h4v4z"/>
              </svg>
            </div>
            <p className="text-lg md:text-xl text-base-content/80 italic mb-6 relative z-10">
              {t('testimonial.text')}
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-accent" />
              <p className="font-heading font-bold text-base-content">
                {t('testimonial.author')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
    

       <CtaBanner
             
            />
    </>
  )
}