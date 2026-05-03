import type {  Partner } from '@/types'

export const testimonials = [
  {
    id: 't1',
    company: 'VALP PRESTIGE',
    category: 'entreprise',
    sector: {
      fr: 'Services',
      en: 'Services',
      ar: 'الخدمات'
    },
    quote: {
      fr: "Panval Consilium International a contribué au renforcement de notre cohésion interne...",
      en: "Panval Consilium International strengthened our internal cohesion...",
      ar: "ساهمت Panval Consilium International في تعزيز التماسك الداخلي..."
    }
  },

  {
    id: 't2',
    company: 'FINANCE INVESTIS',
    category: 'entreprise',
    sector: {
      fr: 'Finance',
      en: 'Finance',
      ar: 'المالية'
    },
    quote: {
      fr: "Grâce à l'accompagnement de Panval Consilium International...",
      en: "Thanks to the support of Panval Consilium International...",
      ar: "بفضل مرافقة Panval Consilium International..."
    }
  },

  {
    id: 't3',
    company: 'BANOS',
    category: 'entreprise',
    sector: {
      fr: 'Industrie',
      en: 'Industry',
      ar: 'الصناعة'
    },
    quote: {
      fr: "Panval Consilium International nous a accompagnés...",
      en: "Panval Consilium International supported us...",
      ar: "رافقتنا Panval Consilium International..."
    }
  },

  {
    id: 't4',
    company: 'AG Groupe',
    category: 'entreprise',
    sector: {
      fr: 'Multi-secteurs',
      en: 'Multi-sector',
      ar: 'متعدد القطاعات'
    },
    quote: {
      fr: "Les formations de Panval Consilium International ont transformé...",
      en: "Panval Consilium International's training transformed...",
      ar: "ساهمت تدريبات Panval Consilium International في تغيير..."
    }
  },

  {
    id: 't5',
    company: 'Fister Alicol',
    category: 'entreprise',
    sector: {
      fr: 'Commerce',
      en: 'Commerce',
      ar: 'التجارة'
    },
    quote: {
      fr: "Panval Consilium International nous a apporté des méthodes...",
      en: "Panval Consilium International provided modern methods...",
      ar: "قدمت لنا Panval Consilium International أساليب حديثة..."
    }
  },

  {
    id: 't6',
    company: 'IBIS Groupe',
    category: 'entreprise',
    sector: {
      fr: 'Hôtellerie',
      en: 'Hospitality',
      ar: 'الفندقة'
    },
    quote: {
      fr: "Panval Consilium International a enrichi notre management hôtelier...",
      en: "Panval Consilium International improved our hotel management...",
      ar: "ساهمت Panval Consilium International في تطوير إدارتنا الفندقية..."
    }
  },

  {
    id: 't7',
    company: 'Black Mutual',
    category: 'entreprise',
    sector: {
      fr: 'Assurance',
      en: 'Insurance',
      ar: 'التأمين'
    },
    quote: {
      fr: "Panval Consilium International a renforcé notre culture d'intégrité...",
      en: "Panval Consilium International strengthened our integrity culture...",
      ar: "عززت Panval Consilium International ثقافة النزاهة لدينا..."
    }
  },

  {
    id: 't8',
    company: 'Lincon Groupe',
    category: 'entreprise',
    sector: {
      fr: 'Multi-secteurs',
      en: 'Multi-sector',
      ar: 'متعدد القطاعات'
    },
    quote: {
      fr: "Panval Consilium International nous a apporté des outils adaptés...",
      en: "Panval Consilium International provided adapted tools...",
      ar: "قدمت لنا Panval Consilium International أدوات مناسبة..."
    }
  },

  {
    id: 't9',
    company: 'MTN',
    category: 'partenaire',
    sector: {
      fr: 'Télécoms',
      en: 'Telecom',
      ar: 'الاتصالات'
    },
    quote: {
      fr: "Panval Consilium International a démontré une forte capacité stratégique...",
      en: "Panval Consilium International demonstrated strong strategic capability...",
      ar: "أظهرت Panval Consilium International قدرة استراتيجية عالية..."
    }
  },

  {
    id: 't10',
    company: 'AIRTEL',
    category: 'partenaire',
    sector: {
      fr: 'Télécoms',
      en: 'Telecom',
      ar: 'الاتصالات'
    },
    quote: {
      fr: "L'approche de Panval Consilium International se distingue...",
      en: "Panval Consilium International stands out...",
      ar: "تتميز Panval Consilium International بمنهجيتها..."
    }
  },

  {
    id: 't11',
    company: 'Black Pillars',
    category: 'partenaire',
    sector: {
      fr: 'Conseil',
      en: 'Consulting',
      ar: 'الاستشارات'
    },
    quote: {
      fr: "Panval Consilium International est un partenaire stratégique fiable...",
      en: "Panval Consilium International is a trusted partner...",
      ar: "تُعتبر Panval Consilium International شريكًا موثوقًا..."
    }
  },

  {
    id: 't12',
    company: 'Premium Conciergerie',
    category: 'partenaire',
    sector: {
      fr: 'Services Premium',
      en: 'Premium Services',
      ar: 'خدمات متميزة'
    },
    quote: {
      fr: "La collaboration avec Panval Consilium International a permis...",
      en: "Collaboration with Panval Consilium International improved...",
      ar: "ساهم التعاون مع Panval Consilium International في..."
    }
  }
]

export const partners: Partner[] = [
  // CLIENTS (entreprises privées)
  { id: 'p1', name: 'HERMON – EXIMIA', category: 'client', logo: 'images/partners/logo.png' },
   { id: 'p2', name: 'FINANCE INVESTIS', category: 'client'},
   { id: 'p10', name: 'AIRTEL', category: 'partenaire', logo: '/images/partners/airtel.webp' },
  { id: 'p3', name: 'BANOS', category: 'client'},
  { id: 'p4', name: 'AG Groupe', category: 'client' },
  { id: 'p5', name: 'Fister Alicol', category: 'client' },
  { id: 'p6', name: 'IBIS Groupe', category: 'client', logo: '/images/partners/ibis.png' },
  { id: 'p7', name: 'Black Mutual', category: 'client' },
  { id: 'p8', name: 'Lincon Groupe', category: 'client' },

  // PARTENAIRES / SPONSORS
  { id: 'p9', name: 'MTN', category: 'partenaire', logo: '/images/partners/mtn.jpg' },
  
]
