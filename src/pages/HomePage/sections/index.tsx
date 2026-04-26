import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, LineChart, Briefcase, Star, Shield, Target, Lightbulb } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { useTranslation } from 'react-i18next'
import Button from '@/components/ui/Button'
import { testimonials } from '@/data/testimonials.data'

/* ─── AboutSnippet ─────────────────────────────────────────────────────────── */
export function AboutSnippet() {
  const { t } = useTranslation('home')

  const items = t('about.items', { returnObjects: true }) as string[]

  return (
    <section className="section-padding bg-base-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          {/* Image */}
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
              <p className="text-xs font-body uppercase tracking-wider text-white/80">
                {t('about.experience', { count: 5 })}
              </p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <div>
            <SectionTitle
              eyebrow={t('about.eyebrow')}
              title={t('about.title')}
              subtitle={t('about.subtitle')}
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 space-y-3"
            >
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <p className="text-base-content/70 font-body text-sm">{item}</p>
                </div>
              ))}
            </motion.div>

            <motion.div className="mt-8">
              <Button
                to="/a-propos"
                label={t('about.cta')}
                variant="secondary"
                className="ml-4 px-6 py-2 rounded-md font-body font-medium uppercase tracking-wider text-sm hidden md:inline-flex"
                icon={<ArrowRight size={15} className="ml-2" />}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── ServicesGrid ─────────────────────────────────────────────────────────── */
export function ServicesGrid() {
  const { t } = useTranslation('home')

  const services = t('services.items', { returnObjects: true }) as any[]

  const icons = [BookOpen, LineChart, Briefcase]
  const colors = ['bg-navy-800', 'bg-crimson-500', 'bg-gold-500']
  const links = ['/formations', '/etudes', '/cep']

  return (
    <section className="section-padding bg-base-200">
      <div className="container-custom">
        <SectionTitle
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          centered
        />

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {services.map((s, i) => {
            const Icon = icons[i]

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group bg-base-100 border border-base-300 rounded-md p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                <div className={`w-12 h-12 ${colors[i]} rounded-md flex items-center justify-center mb-6`}>
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="font-heading text-xl font-bold text-base-content mb-3">
                  {s.title}
                </h3>

                <p className="text-base-content/60 font-body text-sm flex-1">
                  {s.description}
                </p>

                <Link
                  to={links[i]}
                  className="mt-6 text-primary text-xs font-body font-semibold uppercase tracking-wider flex items-center gap-1.5"
                >
                  {t('services.discover')} <ArrowRight size={13} />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── WhyChooseUs ─────────────────────────────────────────────────────────── */
export function WhyChooseUs() {
  const { t } = useTranslation('home')
  const whys = t('why.items', { returnObjects: true }) as any[]

  const icons = [Star, Shield, Target, Lightbulb]

  return (
    <section className="section-padding bg-base-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          <div>
            <SectionTitle
              eyebrow={t('why.eyebrow')}
              title={t('why.title')}
            />

            <div className="mt-10 space-y-7">
              {whys.map((w, i) => {
                const Icon = icons[i]

                return (
                  <motion.div key={i} className="flex gap-5">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold text-base-content">
                        {w.title}
                      </h4>
                      <p className="text-base-content/60 text-sm">
                        {w.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              className="rounded-md"
            />

            <blockquote className="absolute bottom-6 left-6 text-white">
              "{t('why.quote')}"
            </blockquote>

            <p className="absolute bottom-2 left-6 text-accent text-xs">
              {t('why.author')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ─────────────────────────────────────────────────────────── */
export function HomeTestimonials() {
  const { t, i18n } = useTranslation('home')
  const featured = testimonials.slice(0, 3)
  const lang = i18n.language as 'fr' | 'en' | 'ar'

  return (
    <section className="section-padding bg-base-200">
  <div className="container-custom">

    <SectionTitle
      eyebrow={t('testimonials.eyebrow')}
      title={t('testimonials.title')}
      centered
    />

    <div className="grid md:grid-cols-3 gap-6 mt-12">
      {featured.map((tst) => (
        <motion.div key={tst.id} className="bg-base-100 p-7 rounded-md">
          
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, k) => (
              <Star key={k} size={12} className="fill-accent text-accent" />
            ))}
          </div>

          <p className="italic mb-6">
            "{tst.quote[lang]?.slice(0, 160)}..."
          </p>

          <div className="flex gap-3">
            <div className="w-9 h-9 bg-primary/10 flex items-center justify-center">
              {tst.company.slice(0, 2)}
            </div>

            <div>
              <p>{tst.company}</p>
              <p className="text-xs">
                {tst.sector[lang]}
              </p>
            </div>
          </div>

        </motion.div>
      ))}
    </div>

    {/* <div className="text-center mt-10">
      <Link to="/nos-clients" className='flex flex-row items-center justify-center gap-1'>
        {t('testimonials.cta')} <ArrowRight size={14} />
      </Link>
    </div> */}

    <div className='flex flex-col justify-center'>
      <Button to="/nos-clients" label={t('testimonials.cta')} variant="secondary" className='mx-auto mt-5 md:mt-10 border border-white/40' />
    </div>
  </div>
</section>
  )
}

export default AboutSnippet