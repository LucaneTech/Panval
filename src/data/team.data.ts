import type { TeamMember, TimelineEvent, Value } from '@/types'

export const teamMembers: TeamMember[] = [
  {
    id: 'tpc',
    name: 'TCHIAMA Paijos Clauva',
    role: 'Directeur Général — Panval Consilium International',
    bio: "Directeur Général de Panval Consilium International, TCHIAMA Paijos Clauva œuvre depuis plus de cinq ans pour bâtir un cabinet de référence africaine. Sa conviction : la performance durable repose sur la qualité de l'information, la pertinence de la stratégie et la maîtrise de l'action.",
    image: '',
    initials: 'TPC',
    insight: {
      title: "Pourquoi la transdisciplinarité est l'avenir du conseil en Afrique",
      excerpt: "La complexité des défis africains ne peut être résolue par une approche mono-disciplinaire. L'avenir appartient à ceux qui savent croiser les regards, les méthodes et les expertises pour construire des solutions véritablement adaptées aux réalités locales.",
    },
  },
  {
    id: 'mat',
    name: 'MANANGA Abraham Toussaint',
    role: 'Directeur du Développement Stratégique et des Affaires Juridiques',
    bio: "Expert en droit des affaires et en stratégie organisationnelle, MANANGA Abraham Toussaint pilote le développement stratégique du cabinet et les questions juridiques complexes. Sa mission : transformer la complexité réglementaire en avantage compétitif pour les clients.",
    image: '',
    initials: 'MAT',
    insight: {
      title: "Transformer la complexité juridique en avantage compétitif",
      excerpt: "Dans un environnement réglementaire en constante évolution, la maîtrise des enjeux juridiques n'est plus une contrainte mais un levier stratégique. Notre approche proactive permet aux organisations d'anticiper et de transformer les contraintes en opportunités.",
    },
  },
  {
    id: 'fpk',
    name: 'FERNANDES Peters Ketsia Manuella',
    role: 'Directrice des Opérations et des Projets',
    bio: "Spécialiste en gestion de projets et en optimisation opérationnelle, Fernandes Peters Ketsia Manuella assure la coordination et l'efficacité des interventions du cabinet. Son approche : allier rigueur méthodologique et agilité pour garantir des résultats mesurables et durables.",
    image: '',
    initials: 'FPK',
    insight: {
      title: "L'agilité opérationnelle comme levier de croissance durable",
      excerpt: "La performance durable ne se décrète pas, elle se construit au quotidien par des processus agiles et une équipe alignée. Notre mission est d'accompagner les organisations vers une excellence opérationnelle qui libère le potentiel de croissance.",
    },
  },
]

export const timelineEvents: TimelineEvent[] = [
  { year: '2021', title: 'Lancement des activités', description: "Démarrage des premières formations à Brazzaville, République du Congo. Structuration des 3 piliers de services." },
  { year: '2022', title: 'Expansion sectorielle', description: "Déploiement des études de marché et diagnostics stratégiques. Premiers grands comptes : secteur financier et télécoms." },
  { year: '2023', title: 'Reconnaissance internationale', description: "Accompagnement des organisations internationales. Partenariats avec MTN, Airtel et grandes institutions." },
  { year: '2024', title: 'Croissance & impact', description: "Plus de 1 500 personnes formées. Lancement du service de conciergerie institutionnelle." },
  { year: '2025', title: 'Consolidation',  description: "2 250 personnes formées. 250+ organisations accompagnées. Positionnement comme cabinet de référence africaine." },
  { year: '2026', title: 'Ambitions 2026', description: "150 nouvelles organisations en formation. 120 missions d'études. 80 dirigeants accompagnés en conciergerie." },
]

export const companyValues: Value[] = [
  { id: 'v1', number: '01', title: 'Excellence', description: "Priorité à la qualité, la rigueur et la pertinence dans toutes nos interventions.", icon: 'Star' },
  { id: 'v2', number: '02', title: 'Intégrité', description: "Transparence, éthique et responsabilité dans nos relations et actions.", icon: 'Shield' },
  { id: 'v3', number: '03', title: 'Innovation', description: "Solutions modernes et adaptées aux besoins spécifiques de chaque client.", icon: 'Lightbulb' },
  { id: 'v4', number: '04', title: 'Orientation résultats', description: "Actions guidées par l'impact concret et mesurable.", icon: 'Target' },
  { id: 'v5', number: '05', title: 'Professionnalisme', description: "Respect des normes, des délais et des engagements pris.", icon: 'Award' },
  { id: 'v6', number: '06', title: 'Confidentialité', description: "Protection des informations stratégiques et sensibles.", icon: 'Lock' },
  { id: 'v7', number: '07', title: 'Partenariat', description: "Relations durables basées sur la confiance, l'écoute et la co-création de valeur.", icon: 'Handshake' },
]
