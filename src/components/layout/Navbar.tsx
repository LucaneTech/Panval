import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { navItems } from '@/data/navigation.data'
import { cn } from '@/utils/cn'
import Button from '../ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'panvallight' | 'panvaldark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('panval-theme')
      if (saved === 'panvaldark' || saved === 'panvallight') return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'panvaldark' : 'panvallight'
    }
    return 'panvallight'
  })
  const location = useLocation()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('panval-theme', theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const toggleTheme = () =>
    setTheme(t => (t === 'panvallight' ? 'panvaldark' : 'panvallight'))

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <>
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
            <Link to="/" className="flex items-center gap-3 group">
              <motion.img
                src="images/logo.png"
                alt="Logo Panval Consilium"
                className="w-24 sm:w-28 md:w-32 h-auto object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />

            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map(item => (
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
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
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

              <Button to="/contact" label="Nous contacter" variant="secondary" className='hidden md:flex border border-white/40' />
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
                {/* <div className="flex items-center gap-3">
                  <Link to="/" className="flex items-center gap-3 group">
                    <motion.img
                      src="images/logo.png"
                      alt="Logo Panval Consilium"
                      className="w-12 h-auto object-contain"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />

                  </Link>
                </div> */}
                <button onClick={() => setIsOpen(false)} className="btn btn-ghost btn-sm btn-circle">
                  <X size={18} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
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
                  </motion.div>
                ))}
              </div>
              <div className="p-4 border-t border-base-300">
                <Link to="/contact" className="btn btn-primary w-full rounded-sm text-sm uppercase tracking-wider font-body">
                  Nous contacter
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
