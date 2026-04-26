export type Lang = 'fr' | 'en' | 'ar'

export interface CtaBannerContent {
  title: string
  subtitle: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel: string
  secondaryTo: string
}

export const ctaBannerData: Record<Lang, CtaBannerContent> = {
  fr: {
    title: 'Prêt à transformer votre organisation ?',
    subtitle:
      'Diagnostic stratégique premium — 100€ | 118 USD | 65 000 FCFA. Offrez-vous une analyse experte de votre organisation.',
    primaryLabel: 'Demander un diagnostic',
    primaryTo: '/contact',
    secondaryLabel: 'Nos services',
    secondaryTo: '/formations'
  },

  en: {
    title: 'Ready to transform your organization?',
    subtitle:
      'Premium strategic audit — €100 | $118 | 65,000 FCFA. Get an expert analysis of your organization.',
    primaryLabel: 'Request a diagnosis',
    primaryTo: '/contact',
    secondaryLabel: 'Our services',
    secondaryTo: '/formations'
  },

  ar: {
    title: 'هل أنت مستعد لتحويل مؤسستك؟',
    subtitle:
      'تشخيص استراتيجي مميز — 100€ | 118 دولار | 65000 فرنك إفريقي. احصل على تحليل احترافي لمؤسستك.',
    primaryLabel: 'طلب تشخيص',
    primaryTo: '/contact',
    secondaryLabel: 'خدماتنا',
    secondaryTo: '/formations'
  }
}