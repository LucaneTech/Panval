import type { NavItem } from '@/types'

export const navItems: NavItem[] = [
  { label: 'Accueil', labelKey: 'nav.home', path: '/' },
  { label: 'À propos', labelKey: 'nav.about', path: '/a-propos' },

  { label: 'Formations', labelKey: 'nav.formations', path: '/formations' },

  {
    label: 'Support',
    labelKey: 'nav.support.title',
    children: [
      {
        label: 'Accompagnement Stratégique',
        labelKey: 'nav.support.strategy',
        path: '/accompagnement-strategique'
      },
      {
        label: 'CEP',
        labelKey: 'nav.support.cep', 
        path: '/conseil-evolution-professionnelle'
      }
    ]
  },

  { label: 'Études', labelKey: 'nav.etudes', path: '/etudes' },
  { label: 'Nos clients', labelKey: 'nav.clients', path: '/nos-clients' },
  { label: 'Contact', labelKey: 'nav.contact', path: '/contact' },
]