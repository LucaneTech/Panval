import type { EtudeService, EtudeMethodology } from '@/types'

export const etudeServices: EtudeService[] = [
  { id: 'e1', title: 'Études de marché sectorielles et multisectorielles', description: "Analyse approfondie d'un ou plusieurs secteurs afin d'identifier les tendances, opportunités, risques et dynamiques du marché.", icon: 'BarChart3' },
  { id: 'e2', title: 'Analyses de faisabilité économique et stratégique', description: "Évaluation de la viabilité financière, organisationnelle et stratégique d'un projet avant sa mise en œuvre.", icon: 'TrendingUp' },
  { id: 'e3', title: 'Diagnostics organisationnels et institutionnels', description: "Analyse globale du fonctionnement interne pour identifier forces, faiblesses et axes d'amélioration.", icon: 'Search' },
  { id: 'e4', title: 'Audits managériaux et de gouvernance', description: "Évaluation des pratiques de leadership, de gouvernance et de prise de décision.", icon: 'ClipboardCheck' },
  { id: 'e5', title: 'Études de positionnement stratégique', description: "Détermination de la position optimale d'une organisation sur son marché ou dans son environnement institutionnel.", icon: 'Target' },
  { id: 'e6', title: 'Analyses concurrentielles et benchmarking', description: "Comparaison avec les acteurs de référence pour identifier les écarts et bonnes pratiques.", icon: 'Users' },
  { id: 'e7', title: 'Études de comportements des usagers, clients et parties prenantes', description: "Analyse des attentes, perceptions et comportements pour améliorer l'offre et la stratégie.", icon: 'MessageSquare' },
  { id: 'e8', title: 'Diagnostics de performance organisationnelle', description: "Évaluation de l'efficacité globale à travers des indicateurs de performance clairs et mesurables.", icon: 'Activity' },
  { id: 'e9', title: 'Analyses des risques stratégiques, opérationnels et humains', description: "Identification et hiérarchisation des risques pouvant impacter les résultats.", icon: 'AlertTriangle' },
  { id: 'e10', title: "Études d'impact des politiques, projets et programmes", description: "Mesure des effets réels et potentiels sur les bénéficiaires et l'organisation.", icon: 'Layers' },
  { id: 'e11', title: 'Veille stratégique, économique et réglementaire', description: "Suivi continu des évolutions du contexte afin d'anticiper les changements.", icon: 'Eye' },
  { id: 'e12', title: "Études prospectives et scénarios d'évolution", description: "Projection des tendances futures pour appuyer la planification stratégique.", icon: 'Telescope' },
  { id: 'e13', title: 'Diagnostics de maturité organisationnelle et digitale', description: "Évaluation du niveau de structuration et de transformation digitale.", icon: 'Cpu' },
  { id: 'e14', title: 'Analyses de chaînes de valeur et de processus', description: "Identification des leviers d'optimisation des activités et des coûts.", icon: 'GitBranch' },
  { id: 'e15', title: 'Enquêtes qualitatives et quantitatives', description: "Collecte et analyse de données fiables pour appuyer les décisions.", icon: 'FileText' },
  { id: 'e16', title: 'Évaluations stratégiques pré-décisionnelles', description: "Appui analytique avant toute décision majeure ou investissement.", icon: 'CheckSquare' },
  { id: 'e17', title: 'Notes conceptuelles et recommandations stratégiques', description: "Formalisation de propositions claires pour projets, réformes ou transformations.", icon: 'PenTool' },
  { id: 'e18', title: "Tableaux de bord d'aide à la décision", description: "Outils synthétiques pour suivre la performance et orienter l'action.", icon: 'LayoutDashboard' },
  { id: 'e19', title: 'Études institutionnelles pour réformes et transformations', description: "Appui analytique aux processus de réforme et de modernisation.", icon: 'Building' },
  { id: 'e20', title: 'Suivi, évaluation et capitalisation des données stratégiques', description: "Mesure continue des résultats et valorisation des enseignements stratégiques.", icon: 'Database' },
]

export const etudeMethodologies: EtudeMethodology[] = [
  {
    title: 'Approche Qualitative',
    description: 'Entretiens approfondis, focus groups, observation directe et analyse de contenu pour une compréhension fine des dynamiques humaines.',
    icon: 'MessageCircle',
  },
  {
    title: 'Approche Quantitative',
    description: "Sondages structurés, analyses statistiques, modélisation et benchmarking sectoriel pour une vision objective et chiffrée.",
    icon: 'BarChart2',
  },
  {
    title: 'Approche Mixte 360°',
    description: "Combinaison des deux approches pour une vision complète, rigoureuse et nuancée des enjeux analysés.",
    icon: 'Compass',
  },
]
