// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavItem {
  label: string
  path?: string
  children?: NavItem[]
}

// ─── Formations ───────────────────────────────────────────────────────────────
export interface FormationModule {
  id: string
  title: string
  points: string[]
  benefits: string
}

export interface FormationGroup {
  id: 'A' | 'B' | 'C' | 'D'
  label: string
  subtitle: string
  description: string
  audience: string[]
  image: string
  color: string
  modules: FormationModule[]
}

// ─── Études ───────────────────────────────────────────────────────────────────
export interface EtudeService {
  id: string
  title: string
  description: string
  icon: string
}

export interface EtudeMethodology {
  title: string
  description: string
  icon: string
}

// ─── CEP ──────────────────────────────────────────────────────────────────────
export interface CepService {
  id: string
  title: string
  description: string
  category: 'dirigeant' | 'organisation'
}

export interface CepStep {
  step: number
  title: string
  duration: string
  content: string
}

// ─── Équipe ───────────────────────────────────────────────────────────────────
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  initials: string
  insight: {
    title: string
    excerpt: string
  }
}

// ─── Témoignages ──────────────────────────────────────────────────────────────
export type TestimonialCategory = 'entreprise' | 'partenaire'

export interface Testimonial {
  id: string
  company: string
  quote: string
  category: TestimonialCategory
  sector?: string
}

// ─── Partenaires ──────────────────────────────────────────────────────────────
export interface Partner {
  id: string
  name: string
  category: 'partenaire' | 'client'
  logo?:string
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export interface Stat {
  id: string
  value: number
  suffix: string
  label: string
  description: string
}

// ─── Valeurs ──────────────────────────────────────────────────────────────────
export interface Value {
  id: string
  number: string
  title: string
  description: string
  icon: string
}

// ─── Formulaire de contact ────────────────────────────────────────────────────
export type ContactSubject = 'diagnostic' | 'rdv' | 'devis' | 'autre'
export type ContactService = 'formation' | 'etudes' | 'cep'

export interface ContactFormData {
  fullName: string
  company: string
  role: string
  email: string
  phone: string
  subject: ContactSubject
  services: ContactService[]
  message: string
}

// ─── Timeline ─────────────────────────────────────────────────────────────────
export interface TimelineEvent {
  year: string
  title: string
  description: string
}
