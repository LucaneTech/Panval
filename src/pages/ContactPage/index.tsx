import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import { useContactForm } from '@/hooks/useContactForm'
import { CONTACT_EMAIL, CONTACT_PHONE_1, CONTACT_PHONE_2, CONTACT_ADDRESS } from '@/utils/constants'

export default function ContactPage() {
  const { form, onSubmit, status, setStatus } = useContactForm()
  const { register, handleSubmit, formState: { errors }, watch } = form
  const selectedServices = watch('services') ?? []

  return (
    <>
      <Helmet>
        <title>Contact — Panval Consilium International</title>
        <meta name="description" content="Contactez Panval Consilium International. Diagnostic offert de 2h. Brazzaville, République du Congo." />
      </Helmet>
      <PageHero
        title="Parlons de votre projet"
        subtitle="Un diagnostic offert de 2h, sans engagement. Notre équipe vous répond dans les 24h."
        image="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1400&q=80"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <SectionTitle eyebrow="Formulaire" title="Envoyez-nous votre demande" />

              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-success/10 border border-success/30 rounded-sm flex items-start gap-3">
                  <CheckCircle size={18} className="text-success mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-sm text-success">Message envoyé avec succès !</p>
                    <p className="text-xs text-base-content/60 font-body mt-0.5">Notre équipe vous contactera dans les 24h ouvrées.</p>
                    <button onClick={() => setStatus('idle')} className="text-xs text-primary underline mt-2">Envoyer une autre demande</button>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 p-4 bg-error/10 border border-error/30 rounded-sm flex items-start gap-3">
                  <AlertCircle size={18} className="text-error mt-0.5 shrink-0" />
                  <p className="text-sm text-error font-body">Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par téléphone.</p>
                </motion.div>
              )}

              {status !== 'success' && (
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-1.5">Nom complet *</label>
                      <input {...register('fullName')} placeholder="Jean Dupont" className={`input input-bordered w-full rounded-sm text-sm font-body ${errors.fullName ? 'input-error' : ''}`} />
                      {errors.fullName && <p className="text-xs text-error mt-1 font-body">{errors.fullName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-1.5">Entreprise *</label>
                      <input {...register('company')} placeholder="Ma Société" className={`input input-bordered w-full rounded-sm text-sm font-body ${errors.company ? 'input-error' : ''}`} />
                      {errors.company && <p className="text-xs text-error mt-1 font-body">{errors.company.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-1.5">Fonction *</label>
                      <input {...register('role')} placeholder="Directeur Général" className={`input input-bordered w-full rounded-sm text-sm font-body ${errors.role ? 'input-error' : ''}`} />
                      {errors.role && <p className="text-xs text-error mt-1 font-body">{errors.role.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-1.5">Téléphone *</label>
                      <input {...register('phone')} placeholder="+242 06 000 00 00" className={`input input-bordered w-full rounded-sm text-sm font-body ${errors.phone ? 'input-error' : ''}`} />
                      {errors.phone && <p className="text-xs text-error mt-1 font-body">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-1.5">Email *</label>
                    <input {...register('email')} type="email" placeholder="votre@email.com" className={`input input-bordered w-full rounded-sm text-sm font-body ${errors.email ? 'input-error' : ''}`} />
                    {errors.email && <p className="text-xs text-error mt-1 font-body">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-1.5">Objet de la demande *</label>
                    <select {...register('subject')} className={`select select-bordered w-full rounded-sm text-sm font-body ${errors.subject ? 'select-error' : ''}`}>
                      <option value="">Sélectionnez un objet</option>
                      <option value="diagnostic">Diagnostic offert (2h)</option>
                      <option value="rdv">Prise de rendez-vous</option>
                      <option value="devis">Demande de devis</option>
                      <option value="autre">Autre</option>
                    </select>
                    {errors.subject && <p className="text-xs text-error mt-1 font-body">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-2">Service(s) concerné(s) *</label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { val: 'formation', label: 'Formations' },
                        { val: 'etudes', label: 'Études & Diagnostics' },
                        { val: 'cep', label: 'Conciergerie (CEP)' },
                      ].map(s => (
                        <label key={s.val} className={`flex items-center gap-2 px-4 py-2.5 rounded-sm border cursor-pointer text-sm font-body transition-all ${selectedServices.includes(s.val as 'formation' | 'etudes' | 'cep') ? 'border-primary bg-primary/10 text-primary font-medium' : 'border-base-300 text-base-content/60 hover:border-base-content/30'}`}>
                          <input type="checkbox" value={s.val} {...register('services')} className="hidden" />
                          {s.label}
                        </label>
                      ))}
                    </div>
                    {errors.services && <p className="text-xs text-error mt-1 font-body">{errors.services.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-body font-semibold uppercase tracking-wider text-base-content/50 mb-1.5">Message *</label>
                    <textarea {...register('message')} rows={5} placeholder="Décrivez votre besoin, votre contexte ou vos questions..." className={`textarea textarea-bordered w-full rounded-sm text-sm font-body resize-none ${errors.message ? 'textarea-error' : ''}`} />
                    {errors.message && <p className="text-xs text-error mt-1 font-body">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn btn-primary w-full rounded-sm font-body font-medium uppercase tracking-wider text-sm"
                  >
                    {status === 'loading' ? (
                      <><Loader2 size={16} className="animate-spin mr-2" /> Envoi en cours…</>
                    ) : 'Envoyer ma demande'}
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
                className="bg-primary rounded-sm p-7 text-white"
              >
                <p className="text-accent text-xs font-body font-semibold uppercase tracking-widest mb-3">Offre de bienvenue</p>
                <h3 className="font-heading text-2xl font-bold mb-3">Diagnostic offert — 2h</h3>
                <p className="text-white/65 font-body text-sm leading-relaxed">
                  Une session de 2h offerte, sans engagement, pour analyser votre situation et identifier les leviers d'action prioritaires.
                </p>
              </motion.div>

              {/* Contact info */}
              <div className="bg-base-200 border border-base-300 rounded-sm p-7 space-y-5">
                <h4 className="font-heading font-bold text-base-content">Nos coordonnées</h4>
                {[
                  { icon: MapPin, content: CONTACT_ADDRESS },
                  { icon: Phone, content: `${CONTACT_PHONE_1}\n${CONTACT_PHONE_2}` },
                  { icon: Mail, content: CONTACT_EMAIL },
                  { icon: Globe, content: 'www.panvalgroupe.com' },
                  { icon: Clock, content: 'Lundi — Vendredi · 8h00 — 18h00' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon size={15} className="text-accent mt-0.5 shrink-0" />
                    <p className="text-sm text-base-content/65 font-body whitespace-pre-line">{item.content}</p>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-sm overflow-hidden border border-base-300 h-48 bg-base-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={28} className="text-primary/30 mx-auto mb-2" />
                  <p className="text-xs text-base-content/40 font-body">Les Jardins de MPILA</p>
                  <p className="text-xs text-base-content/30 font-body">Brazzaville, Congo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
