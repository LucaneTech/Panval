export type Lang = 'fr' | 'en' | 'ar'

export interface StatItem {
  id: string
  value: number
  suffix?: string
  label: Record<Lang, string>
  description: Record<Lang, string>
}

export const stats: StatItem[] = [
  {
    id: 's1',
    value: 2250,
    suffix: '+',
    label: {
      fr: 'Organisations formées',
      en: 'Organizations trained',
      ar: 'المنظمات التي تم تكوينها'
    },
    description: {
      fr: 'Entreprises et institutions accompagnées',
      en: 'Companies and institutions supported',
      ar: 'شركات ومؤسسات تمت مرافقتها'
    }
  },

  {
    id: 's2',
    value: 250,
    suffix: '+',
    label: {
      fr: 'Organisations accompagnées',
      en: 'Organizations supported',
      ar: 'المنظمات المدعومة'
    },
    description: {
      fr: 'Clients satisfaits de nos services',
      en: 'Satisfied clients using our services',
      ar: 'عملاء راضون عن خدماتنا'
    }
  },

  {
    id: 's3',
    value: 3,
    suffix: '',
    label: {
      fr: 'Piliers de services',
      en: 'Service pillars',
      ar: 'ركائز الخدمات'
    },
    description: {
      fr: 'Formations, études et conseil stratégique',
      en: 'Training, studies and strategic consulting',
      ar: 'التكوين والدراسات والاستشارات الاستراتيجية'
    }
  },

  {
    id: 's4',
    value: 5,
    suffix: '+',
    label: {
      fr: "Années d'expérience",
      en: 'Years of experience',
      ar: 'سنوات من الخبرة'
    },
    description: {
      fr: 'Expertise stratégique consolidée',
      en: 'Consolidated strategic expertise',
      ar: 'خبرة استراتيجية متراكمة'
    }
  }
]