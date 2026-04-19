import type { TeamMember, TimelineEvent, Value } from '@/types'

export const teamMembers: TeamMember[] = [
  {
    id: 'tpc',
    name: 'TCHIAMA Paijos Clauva',
    role: 'Administrateur Général',
    bio: "Fondateur et visionnaire de Panval Consilium International, TCHIAMA Paijos Clauva œuvre depuis plus de cinq ans pour bâtir un cabinet de référence africaine. Sa conviction : la performance durable repose sur la qualité de l'information, la pertinence de la stratégie et la maîtrise de l'action.",
    image: '',
    initials: 'TPC',
  },
  {
    id: 'js',
    name: 'Jules SANGOMA',
    role: 'Directeur des Opérations',
    bio: "Expert en stratégie et développement organisationnel, Jules SANGOMA coordonne l'ensemble des opérations et veille à la qualité des interventions. Son engagement : transformer les défis de nos clients en opportunités de croissance mesurable.",
    image: '',
    initials: 'JS',
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
