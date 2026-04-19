import type { Stat } from '@/types'

export const stats: Stat[] = [
  {
    id: 'formations',
    value: 2250,
    suffix: '+',
    label: 'Personnes formées',
    description: 'Depuis 2021',
  },
  {
    id: 'organisations',
    value: 250,
    suffix: '+',
    label: 'Organisations accompagnées',
    description: 'Secteurs public & privé',
  },
  {
    id: 'services',
    value: 3,
    suffix: '',
    label: 'Piliers de services',
    description: 'Formations · Études · CEP',
  },
  {
    id: 'satisfaction',
    value: 98,
    suffix: '%',
    label: 'Taux de satisfaction',
    description: 'Clients fidèles',
  },
]
