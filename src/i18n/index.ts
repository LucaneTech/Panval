import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const availableLanguages = ['fr', 'en', 'ar'] as const
export type AppLanguage = typeof availableLanguages[number]

i18n
  // charge les fichiers de traduction via HTTP (public locales)
  .use(HttpBackend)
  // détecte la langue du navigateur / localStorage
  .use(LanguageDetector)
  // passe i18n à react-i18next
  .use(initReactI18next)
  .init({
    supportedLngs: [...availableLanguages],
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false, // React s'en charge
    },
    backend: {
      // chargera /locales/{{lng}}/{{ns}}.json depuis le dossier public
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      // ordre de détection
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
      lookupLocalStorage: 'panval-language',
    },
    react: {
      useSuspense: true,
    },
    ns: ['common', 'home'],
    defaultNS: 'common',
  })

  // Keep document attributes (lang + dir) in sync and persist choice
  const setHtmlAttributes = (lng: string) => {
    if (typeof document === 'undefined') return
    const short = lng.split('-')[0]
    document.documentElement.lang = short
    document.documentElement.dir = short === 'ar' ? 'rtl' : 'ltr'
    try {
      localStorage.setItem('panval-language', short)
    } catch (e) {
      // ignore
    }
  }

  // On initialization set attributes
  i18n.on('initialized', () => {
    const initial = i18n.resolvedLanguage ?? i18n.language ?? 'fr'
    setHtmlAttributes(initial)
  })

  // Update on language change
  i18n.on('languageChanged', (lng) => setHtmlAttributes(lng))

  export default i18n
