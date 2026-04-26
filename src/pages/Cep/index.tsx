import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ChevronRight, Briefcase, Users, Target, Compass, Clock } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import { CtaBanner } from '@/components/sections/CtaBanner'

export default function CEP() {
  const steps = [
    { 
      num: '01', 
      title: 'Cadrage', 
      duration: '1h30',
      desc: 'Analyse approfondie de la situation et des besoins spécifiques du bénéficiaire.',
      icon: Target
    },
    { 
      num: '02', 
      title: 'Exploration', 
      duration: '2-4 sessions',
      desc: 'Diagnostic complet des compétences, valeurs, motivations et freins potentiels.',
      icon: Compass
    },
    { 
      num: '03', 
      title: 'Construction', 
      duration: '1-2 sessions',
      desc: 'Formalisation d\'un plan d\'action concret et personnalisé.',
      icon: Briefcase
    },
    { 
      num: '04', 
      title: 'Suivi', 
      duration: '3-6 mois',
      desc: 'Accompagnement pas à pas, ajustements et évaluation des résultats.',
      icon: Clock
    },
  ]

  const services = [
    {
      title: 'Bilans de compétences',
      description: 'Analyse approfondie des aptitudes professionnelles et personnelles pour révéler les potentiels cachés.',
    },
    {
      title: 'Évaluations de potentiel',
      description: 'Identification des talents à fort potentiel pour anticiper les évolutions et successions.',
    },
    {
      title: 'Ateliers collectifs',
      description: 'Sessions collaboratives de networking et développement professionnel.',
    },
    {
      title: 'Accompagnement mobilité',
      description: 'Soutien personnalisé pour les transitions internes et externes.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Conseil en Évolution Professionnelle (CEP) — Panval Consilium International</title>
        <meta 
          name="description" 
          content="Accompagnement personnalisé pour piloter votre évolution professionnelle. Bilan de compétences, mobilité interne, développement de carrière." 
        />
      </Helmet>

      {/* Page Hero */}
     
       <PageHero
              title="Réveiller les ambitions, révéler les potentiels"
              subtitle="Une approche bienveillante, neutre et résolument tournée vers l'action"
              image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
              breadcrumbs={[{ label: 'Conseil en Évolution Professionnelle' }]}
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
                  Pourquoi le CEP
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-base-content mb-6">
                Construire et sécuriser
                <br />
                <span className="text-accent">l'avenir professionnel</span>
              </h2>
              <div className="space-y-4 text-base-content/70 font-body">
                <p>
                  Le Conseil en Évolution Professionnelle (CEP) est un dispositif 
                  d'accompagnement personnalisé qui permet à chaque collaborateur 
                  de piloter activement son parcours professionnel, en alignement 
                  avec ses aspirations personnelles et les besoins de l'organisation.
                </p>
                <p>
                  Notre approche, à la fois bienveillante et exigeante, aide les 
                  talents à réussir leurs transitions, à développer leur employabilité 
                  et à trouver un sens durable à leur carrière.
                </p>
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
                <h3 className="font-heading font-bold text-base-content mb-2">Pour l'Individu</h3>
                <p className="text-sm text-base-content/60">
                  Construire et sécuriser son avenir professionnel, réussir ses transitions, 
                  aligner ses aspirations personnelles.
                </p>
              </div>
              <div className="bg-base-200 p-6 rounded-md border-l-4 border-primary">
                <Briefcase className="text-primary mb-3" size={28} />
                <h3 className="font-heading font-bold text-base-content mb-2">Pour l'Entreprise</h3>
                <p className="text-sm text-base-content/60">
                  Fidéliser les talents, réduire le turnover, anticiper les successions 
                  et les mobilités internes.
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
                Notre méthodologie
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-base-content">
              Déroulé type d'un parcours CEP
            </h2>
            <p className="text-base-content/60 mt-4">
              Un accompagnement structuré en 4 étapes, adapté à chaque profil et objectif
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-base-100 rounded-md p-6 text-center border border-base-300 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-primary" size={24} />
                </div>
                <div className="text-accent font-mono text-sm font-bold mb-2">{step.num}</div>
                <h3 className="font-heading font-bold text-base-content text-lg mb-2">{step.title}</h3>
                <p className="text-xs text-accent mb-3">{step.duration}</p>
                <p className="text-base-content/60 text-sm">{step.desc}</p>
              </motion.div>
            ))}
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
                alt="Accompagnement professionnel personnalisé"
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
                  Nos Services
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-base-content mb-8">
                Une offre complète
                <br />
                <span className="text-accent">pour tous les besoins</span>
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
              Les bénéfices du CEP
            </h2>
            <p className="text-base-content/60 mt-4">
              Un accompagnement qui transforme les parcours professionnels
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-base-100 rounded-md overflow-hidden">
              <thead>
                <tr className="bg-primary">
                  <th className="text-left p-4 text-white font-bold">Bénéfice</th>
                  <th className="text-left p-4 text-white font-bold">Pour l'individu</th>
                  <th className="text-left p-4 text-white font-bold">Pour l'entreprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-base-300">
                  <td className="p-4 font-semibold text-base-content">Clarté de carrière</td>
                  <td className="p-4 text-base-content/70">Vision claire de son parcours et de ses objectifs</td>
                  <td className="p-4 text-base-content/70">Meilleure adéquation compétences/postes</td>
                </tr>
                <tr className="border-b border-base-300 bg-base-200/50">
                  <td className="p-4 font-semibold text-base-content">Employabilité</td>
                  <td className="p-4 text-base-content/70">Développement continu des compétences</td>
                  <td className="p-4 text-base-content/70">Réduction du turnover et des coûts de recrutement</td>
                </tr>
                <tr className="border-b border-base-300">
                  <td className="p-4 font-semibold text-base-content">Engagement</td>
                  <td className="p-4 text-base-content/70">Motivation et implication renforcées</td>
                  <td className="p-4 text-base-content/70">Fidélisation des talents et productivité accrue</td>
                </tr>
                <tr className="bg-base-200/50">
                  <td className="p-4 font-semibold text-base-content">Anticipation</td>
                  <td className="p-4 text-base-content/70">Préparation proactive aux évolutions du marché</td>
                  <td className="p-4 text-base-content/70">Gestion prévisionnelle des compétences et succession</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Témoignage */}
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
              « Le parcours CEP a été un déclencheur pour plusieurs de nos cadres. 
              Certains ont trouvé une nouvelle mobilité interne, d'autres ont 
              redéfini leur projet professionnel avec une clarté qu'ils n'avaient jamais eue. »
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-accent" />
              <p className="font-heading font-bold text-base-content">
                DRH — Banque internationale
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
    

       <CtaBanner
              title=" Prêt à faire évoluer vos talents ?"
              subtitle="Bénéficiez d'un diagnostic premium pour évaluer vos besoins en accompagnement CEP"
              primaryLabel="Demander un devis"
              secondaryLabel="Voir les études"
              secondaryTo="/etudes"
            />
    </>
  )
}