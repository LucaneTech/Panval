import type { NavItem } from '@/types'

export const navItems: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/a-propos' },
  
  { label: 'Formations', path: '/formations' },
  { 
    label: 'Accompagnement',
    children: [
      { label: 'Accompagnement Stratégique', path: '/accompagnement-strategique' },
      { label: 'Conseil en Évolution Professionnelle (CEP)', path: '/conseil-evolution-professionnelle' },
    ]
  },
  { label: 'Études', path: '/etudes' },
  { label: 'Nos clients', path: '/nos-clients' },
  { label: 'Contact', path: '/contact' },
]
