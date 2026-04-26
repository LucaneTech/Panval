import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, ChevronDown, Globe } from 'lucide-react'
import { navItems } from '@/data/navigation.data'
import { cn } from '@/utils/cn'
import Button from '../ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([])
  const [theme, setTheme] = useState<'panvallight' | 'panvaldark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('panval-theme')
      if (saved === 'panvaldark' || saved === 'panvallight') return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'panvaldark' : 'panvallight'
    }
    return 'panvallight'
  })
  const [language, setLanguage] = useState<'fr' | 'en'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('panval-language')
      if (saved === 'fr' || saved === 'en') return saved
      // Détecter la langue du navigateur
      const browserLang = navigator.language.split('-')[0]
      return browserLang === 'en' ? 'en' : 'fr'
    }
    return 'fr'
  })
  
  const location = useLocation()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('panval-theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('panval-language', language)
    // Déclencher la traduction automatique du navigateur
    triggerPageTranslation(language)
  }, [language])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Fonction pour déclencher la traduction automatique du navigateur
  const triggerPageTranslation = (lang: 'fr' | 'en') => {
    if (typeof window === 'undefined') return
    
    // Méthode 1: Utiliser l'API de traduction de Google (si disponible)
    const googleTranslateElement = document.querySelector('.goog-te-combo') as HTMLSelectElement
    if (googleTranslateElement) {
      googleTranslateElement.value = lang === 'fr' ? 'fr' : 'en'
      googleTranslateElement.dispatchEvent(new Event('change'))
      return
    }
    
    // Méthode 2: Stocker la préférence et recharger la page avec paramètre
    // Le script Google Translate lira ce meta tag
    let meta = document.querySelector('meta[name="google"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'google')
      meta.setAttribute('content', 'notranslate')
      document.head.appendChild(meta)
    }
    
    // Méthode 3: Pour Microsoft Translator
    const msTranslateElement = document.querySelector('#MicrosoftTranslatorWidget') as any
    if (msTranslateElement && msTranslateElement.SetLanguage) {
      msTranslateElement.SetLanguage(lang === 'fr' ? 'fr' : 'en')
    }
  }

  // Charger le script Google Translate une seule fois
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    // Éviter de charger plusieurs fois
    if (document.querySelector('#google-translate-script')) return
    
    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src = '//translate.google.com/translate_a/element.js?cb=GoogleTranslateInitCallback'
    script.async = true
    
    // Définir la fonction callback globalement
    ;(window as any).GoogleTranslateInitCallback = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: 'fr',
          includedLanguages: 'fr,en',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      )
      
      // Appliquer la langue sauvegardée après l'initialisation
      const savedLang = localStorage.getItem('panval-language')
      if (savedLang && savedLang !== 'fr') {
        setTimeout(() => triggerPageTranslation(savedLang as 'fr' | 'en'), 500)
      }
    }
    
    document.head.appendChild(script)
    
    // Nettoyage
    return () => {
      const scriptElement = document.querySelector('#google-translate-script')
      if (scriptElement) scriptElement.remove()
      delete (window as any).GoogleTranslateInitCallback
    }
  }, [])

  const toggleTheme = () =>
    setTheme(t => (t === 'panvallight' ? 'panvaldark' : 'panvallight'))

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr'
    setLanguage(newLang)
  }

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  const toggleDropdown = (label: string) => {
    setOpenDropdowns(prev => prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label])
  }

  const isAnyChildActive = (children: any[]) => {
    return children.some(child => child.path && isActive(child.path))
  }

  return (
    <>
      {/* Élément caché pour Google Translate */}
      <div id="google_translate_element" style={{ display: 'none' }} />
      
      {/* Style pour masquer les éléments par défaut de Google Translate */}
      <style>{`
        .goog-te-banner-frame.skiptranslate,
        .goog-te-gadget-simple,
        .goog-te-menu-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
      `}</style>
      
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-base-100/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-auto">
            {/* Logo */}
            <Link to="/">
              <motion.img
                src="images/logo.png"
                alt="Logo Panval Consilium"
                className="w-24 sm:w-28 md:w-36 h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                if (item.children && item.children.length > 0) {
                  return (
                    <div key={item.label} className="relative group">
                      <button
                        className={cn(
                          'px-4 py-2 text-xs font-body font-medium uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center gap-1',
                          scrolled
                            ? 'text-base-content/70 hover:text-primary hover:bg-base-200'
                            : 'text-white/80 hover:text-white hover:bg-white/10'
                        )}
                      >
                        {item.label}
                        <ChevronDown size={12} className="transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                        <div className="bg-base-100 dark:bg-base-200 rounded-sm shadow-xl border border-base-300 overflow-hidden">
                          {item.children.map((child) => {
                            if (!child.path) return null
                            return (
                              <Link
                                key={child.path}
                                to={child.path}
                                className={cn(
                                  'block px-4 py-3 text-sm font-body transition-colors duration-200',
                                  isActive(child.path)
                                    ? 'text-accent bg-accent/10'
                                    : 'text-base-content/70 hover:text-primary hover:bg-base-200'
                                )}
                              >
                                {child.label}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                }

                if (!item.path) return null
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'px-4 py-2 text-xs font-body font-medium uppercase tracking-wider rounded-sm transition-all duration-200',
                      isActive(item.path)
                        ? 'text-accent bg-accent/10'
                        : scrolled
                          ? 'text-base-content/70 hover:text-primary hover:bg-base-200'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className={cn(
                  'btn btn-ghost btn-sm gap-1 rounded-sm transition-all duration-200',
                  !scrolled ? 'text-white hover:bg-white/10' : 'text-base-content/70 hover:bg-base-200'
                )}
                aria-label="Toggle language"
              >
                <Globe size={16} />
                <span className="text-xs font-body font-medium uppercase">
                  {language === 'fr' ? 'EN' : 'FR'}
                </span>
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={cn(
                  'btn btn-ghost btn-sm btn-circle',
                  !scrolled && 'text-white hover:bg-white/10'
                )}
                aria-label="Toggle theme"
              >
                {theme === 'panvallight' ? <Moon size={16} /> : <Sun size={16} />}
              </button>

              <Button to="/contact" label="Diagnostic premium" variant="secondary" className='hidden md:flex border border-white/40' />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  'btn btn-ghost btn-sm btn-circle lg:hidden',
                  !scrolled && 'text-white hover:bg-white/10'
                )}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-base-content/30 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-base-100 shadow-2xl flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-base-300">
                <button onClick={() => setIsOpen(false)} className="btn btn-ghost btn-sm btn-circle">
                  <X size={18} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {item.children && item.children.length > 0 ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className={cn(
                            'w-full flex items-center justify-between px-4 py-3 rounded-sm text-sm font-body font-medium uppercase tracking-wider transition-all',
                            isAnyChildActive(item.children)
                              ? 'bg-primary text-primary-content'
                              : 'text-base-content/70 hover:bg-base-200 hover:text-base-content'
                          )}
                        >
                          <span>{item.label}</span>
                          <motion.div
                            animate={{ rotate: openDropdowns.includes(item.label) ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={16} />
                          </motion.div>
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: openDropdowns.includes(item.label) ? 'auto' : 0,
                            opacity: openDropdowns.includes(item.label) ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden ml-4 mt-1 space-y-1"
                        >
                          {item.children.map((child) => {
                            if (!child.path) return null
                            return (
                              <Link
                                key={child.path}
                                to={child.path}
                                className={cn(
                                  'flex items-center px-4 py-3 rounded-sm text-sm font-body transition-all',
                                  isActive(child.path)
                                    ? 'bg-accent/20 text-accent font-medium'
                                    : 'text-base-content/60 hover:bg-base-200 hover:text-base-content pl-6'
                                )}
                              >
                                {child.label}
                              </Link>
                            )
                          })}
                        </motion.div>
                      </div>
                    ) : (
                      !item.path ? null : (
                        <Link
                          to={item.path}
                          className={cn(
                            'flex items-center px-4 py-3 rounded-sm text-sm font-body font-medium uppercase tracking-wider transition-all',
                            isActive(item.path)
                              ? 'bg-primary text-primary-content'
                              : 'text-base-content/70 hover:bg-base-200 hover:text-base-content'
                          )}
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile footer avec langue */}
              <div className="p-4 border-t border-base-300 space-y-3">
                <div className="flex items-center justify-between">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-body hover:bg-base-200 transition-colors"
                  >
                    <Globe size={16} />
                    <span className="uppercase">{language === 'fr' ? 'Français' : 'English'}</span>
                  </button>
                  <button
                    onClick={toggleTheme}
                    className="btn btn-ghost btn-sm btn-circle"
                  >
                    {theme === 'panvallight' ? <Moon size={16} /> : <Sun size={16} />}
                  </button>
                </div>
                <Link to="/contact" className="btn btn-primary w-full rounded-sm text-sm uppercase tracking-wider font-body">
                  Diagnostic premium
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}