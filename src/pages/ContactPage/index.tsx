import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import { useContactForm } from '@/hooks/useContactForm'
import { CONTACT_EMAIL, CONTACT_PHONE_1, CONTACT_PHONE_2, CONTACT_ADDRESS, SITE_URL } from '@/utils/constants'
import { useTranslation } from 'react-i18next'

export default function ContactPage() {
  const { form, onSubmit, status, setStatus } = useContactForm()
  const { register, handleSubmit, formState: { errors }, watch } = form
  const selectedServices = watch('services') ?? []
  const { t } = useTranslation('contact')
  const breadcrumbs = t('hero.breadcrumbs', { returnObjects: true }) as string[]

  return (
    <>
      <Helmet>
        <title>{t('hero.title')} — Panval Consilium International</title>
        <meta name="description" content={t('hero.subtitle')} />
      </Helmet>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        image="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1400&q=80"
        breadcrumbs={breadcrumbs.map(label => ({ label }))}
      />

      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <SectionTitle eyebrow={t('form.eyebrow')} title={t('form.title')} />

              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-success/10 border border-success/30 rounded-md flex items-start gap-3">
                  <CheckCircle size={18} className="text-success mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-sm text-success">{t('form.status.successTitle')}</p>
                    <p className="text-xs text-base-content/60 font-body mt-0.5">{t('form.status.successDesc')}</p>
                    <button onClick={() => setStatus('idle')} className="text-xs text-primary underline mt-2">{t('form.buttons.sendAnother')}</button>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 p-4 bg-error/10 border border-error/30 rounded-md flex items-start gap-3">
                  <AlertCircle size={18} className="text-error mt-0.5 shrink-0" />
                  <p className="text-sm text-error font-body">{t('form.status.error')}</p>
                </motion.div>
              )}

              {status !== 'success' && (
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-1.5">{t('form.labels.fullName')}</label>
                      <input {...register('fullName')} placeholder={t('form.placeholders.fullName')} className={`input input-bordered w-full rounded-md text-sm font-body ${errors.fullName ? 'input-error' : ''}`} />
                      {errors.fullName && <p className="text-xs text-error mt-1 font-body">{errors.fullName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-1.5">{t('form.labels.company')}</label>
                      <input {...register('company')} placeholder={t('form.placeholders.company')} className={`input input-bordered w-full rounded-md text-sm font-body ${errors.company ? 'input-error' : ''}`} />
                      {errors.company && <p className="text-xs text-error mt-1 font-body">{errors.company.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-1.5">{t('form.labels.role')}</label>
                      <input {...register('role')} placeholder={t('form.placeholders.role')} className={`input input-bordered w-full rounded-md text-sm font-body ${errors.role ? 'input-error' : ''}`} />
                      {errors.role && <p className="text-xs text-error mt-1 font-body">{errors.role.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-1.5">{t('form.labels.phone')}</label>
                      <input {...register('phone')} placeholder={t('form.placeholders.phone')} className={`input input-bordered w-full rounded-md text-sm font-body ${errors.phone ? 'input-error' : ''}`} />
                      {errors.phone && <p className="text-xs text-error mt-1 font-body">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-1.5">{t('form.labels.email')}</label>
                    <input {...register('email')} type="email" placeholder={t('form.placeholders.email')} className={`input input-bordered w-full rounded-md text-sm font-body ${errors.email ? 'input-error' : ''}`} />
                    {errors.email && <p className="text-xs text-error mt-1 font-body">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-1.5">{t('form.labels.subject')}</label>
                    <select {...register('subject')} className={`select select-bordered w-full rounded-md text-sm font-body ${errors.subject ? 'select-error' : ''}`}>
                      <option value="">{t('form.subjectOptions.empty')}</option>
                      <option value="diagnostic">{t('form.subjectOptions.diagnostic')}</option>
                      <option value="rdv">{t('form.subjectOptions.rdv')}</option>
                      <option value="devis">{t('form.subjectOptions.devis')}</option>
                      <option value="autre">{t('form.subjectOptions.autre')}</option>
                    </select>
                    {errors.subject && <p className="text-xs text-error mt-1 font-body">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-2">{t('form.labels.services')}</label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { val: 'formation', label: t('form.serviceLabels.formation') },
                        { val: 'etudes', label: t('form.serviceLabels.etudes') },
                        { val: 'cep', label: t('form.serviceLabels.cep') },
                      ].map(s => (
                        <label key={s.val} className={`flex items-center gap-2 px-4 py-2.5 rounded-md border cursor-pointer text-sm font-body transition-all ${selectedServices.includes(s.val as 'formation' | 'etudes' | 'cep') ? 'border-primary bg-primary/10 text-primary font-medium' : 'border-base-300 text-base-content/60 hover:border-base-content/30'}`}>
                          <input type="checkbox" value={s.val} {...register('services')} className="hidden" />
                          {s.label}
                        </label>
                      ))}
                    </div>
                    {errors.services && <p className="text-xs text-error mt-1 font-body">{errors.services.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-1.5">{t('form.labels.message')}</label>
                    <textarea {...register('message')} rows={5} placeholder={t('form.placeholders.message')} className={`textarea textarea-bordered w-full rounded-md text-sm font-body resize-none ${errors.message ? 'textarea-error' : ''}`} />
                    {errors.message && <p className="text-xs text-error mt-1 font-body">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn btn-primary w-full rounded-md font-body font-medium uppercase tracking-wider text-sm"
                  >
                    {status === 'loading' ? (
                      <><Loader2 size={16} className="animate-spin mr-2" /> {t('form.buttons.sending')}</>
                    ) : t('form.buttons.send')}
                  </button>
                </form>
              )}
            </div>

            {/* Info — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Highlight card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary rounded-md p-7 text-white"
              >
                <p className="text-accent text-xs font-body font-semibold uppercase tracking-widest mb-3">
                  {t('diagnostic.badge')}
                </p>
                <h3 className="font-heading text-2xl font-bold mb-3">
                  {t('diagnostic.title')}
                </h3>
                <p className="text-white/65 font-body text-sm leading-relaxed">
                  {t('diagnostic.description')}
                </p>
                <div className="mt-4 flex items-center gap-2 flex-wrap">
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">
                    {t('diagnostic.prices.eur')}
                  </span>
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">
                    {t('diagnostic.prices.usd')}
                  </span>
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">
                    {t('diagnostic.prices.fcfa')}
                  </span>
                </div>
              </motion.div>

              {/* Contact info */}
              <div className="bg-base-200 border border-base-300 rounded-md p-7 space-y-5">
                <h4 className="font-heading font-bold text-base-content">{t('contactInfo.title')}</h4>
                {[
                  { icon: MapPin, content: CONTACT_ADDRESS },
                  { icon: Phone, content: `${CONTACT_PHONE_1}\n${CONTACT_PHONE_2}` },
                  { icon: Mail, content: CONTACT_EMAIL },
                  { icon: Globe, content: SITE_URL.replace(/^https?:\/\//, '') },
                  { icon: Clock, content: t('contactInfo.workingHours') },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon size={15} className="text-accent mt-0.5 shrink-0" />
                    <p className="text-sm text-base-content/65 font-body whitespace-pre-line">{item.content}</p>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-md overflow-hidden border border-base-300 h-48 bg-base-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={28} className="text-primary/30 mx-auto mb-2" />
                  <p className="text-xs text-base-content/40 font-body">Zone Industrielle</p>
                  <p className="text-xs text-base-content/30 font-body">Pointe-Noire, Congo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
