import type { CepService, CepStep } from '@/types'

// Services d'Accompagnement Stratégique Global (Catalogue pages 29-31 - version sans conciergerie)
export const cepServices: CepService[] = [
  // Services pour dirigeants
  { id: 'c1', title: 'Accompagnement exécutif personnalisé', description: "Soutien individualisé des dirigeants dans la gestion de leurs priorités professionnelles et institutionnelles.", category: 'dirigeant' },
  { id: 'c2', title: 'Gestion intelligente des priorités et agendas stratégiques', description: "Organisation optimale du temps et des engagements à forte valeur ajoutée.", category: 'dirigeant' },
  { id: 'c3', title: 'Assistance à la prise de décision stratégique', description: "Appui analytique et méthodologique pour sécuriser les décisions sensibles.", category: 'dirigeant' },
  { id: 'c4', title: 'Accompagnement en période de transition ou de crise', description: "Soutien stratégique lors de changements organisationnels, restructurations ou situations complexes.", category: 'dirigeant' },
  { id: 'c5', title: 'Coordination stratégique des activités transversales', description: "Fluidification des interactions entre directions, partenaires et parties prenantes.", category: 'dirigeant' },
  { id: 'c6', title: 'Gestion confidentielle des dossiers sensibles', description: "Traitement sécurisé et professionnel des informations stratégiques.", category: 'dirigeant' },
  { id: 'c7', title: 'Interface stratégique avec partenaires et institutions', description: "Facilitation des relations professionnelles et institutionnelles clés.", category: 'dirigeant' },
  { id: 'c8', title: 'Gestion du stress décisionnel et de la charge mentale', description: "Accompagnement visant à renforcer la lucidité, la sérénité et la stabilité des dirigeants.", category: 'dirigeant' },
  { id: 'c9', title: 'Accompagnement à la performance personnelle du dirigeant', description: "Soutien visant l'équilibre, l'efficacité et la durabilité du leadership.", category: 'dirigeant' },
  { id: 'c10', title: "Appui à la gouvernance et à l'exemplarité managériale", description: "Renforcement des pratiques responsables et de l'autorité légitime.", category: 'dirigeant' },
  
  // Services pour organisations
  { id: 'c11', title: 'Accompagnement des cadres supérieurs et équipes dirigeantes', description: "Soutien collectif pour améliorer la coordination, la cohésion et la performance.", category: 'organisation' },
  { id: 'c12', title: "Optimisation du fonctionnement quotidien de l'organisation", description: "Réduction des frictions opérationnelles pour accroître l'efficacité globale.", category: 'organisation' },
  { id: 'c13', title: 'Appui logistique stratégique aux missions et projets', description: "Organisation et coordination des ressources nécessaires aux missions critiques.", category: 'organisation' },
  { id: 'c14', title: 'Support organisationnel de haut niveau', description: "Renforcement de l'efficacité interne par une assistance structurée et discrète.", category: 'organisation' },
  { id: 'c15', title: 'Suivi stratégique et reporting exécutif', description: "Production de synthèses claires pour un pilotage efficace et orienté résultats.", category: 'organisation' },
  { id: 'c16', title: 'Appui à la gouvernance managériale', description: "Renforcement des pratiques responsables et de l'autorité légitime au sein de l'organisation.", category: 'organisation' },
]

// Étapes d'accompagnement stratégique (conformes au catalogue)
export const cepSteps: CepStep[] = [
  { step: 1, title: 'Cadrage stratégique initial', duration: '1h30', content: "Analyse de la situation du dirigeant ou de l'organisation, identification des besoins prioritaires et définition des objectifs d'accompagnement." },
  { step: 2, title: 'Diagnostic approfondi', duration: '2 à 4 sessions', content: "Analyse des forces, faiblesses, opportunités et menaces. Cartographie des priorités stratégiques et des leviers de performance." },
  { step: 3, title: 'Construction du plan d\'action', duration: '1 à 2 sessions', content: "Formalisation du plan d'action concret, priorisation des interventions et définition des indicateurs de succès mesurables." },
  { step: 4, title: 'Accompagnement & Suivi personnalisé', duration: '3 à 6 mois', content: "Accompagnement pas à pas, suivi personnalisé, ajustements continus et évaluation régulière de la progression vers les objectifs fixés." },
]