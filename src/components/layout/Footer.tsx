import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { navItems } from '@/data/navigation.data'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_1,
  CONTACT_PHONE_2,
  CONTACT_ADDRESS,
  RCCM,
  SITE_URL
} from '@/utils/constants'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useTranslation('footer')
  const { t: tCommon } = useTranslation('common')

  const services = [
    { key: 's1', path: '/formations' },
    { key: 's2', path: '/etudes' },
    { key: 's3', path: '/etudes' },
    { key: 's4', path: '/cep' },
    { key: 's5', path: '/cep' },
    { key: 's6', path: '/etudes' }
  ]

  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="container-custom py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="lg:col-span-1">

            <Link to="/" className="flex items-centergroup">
              <motion.img
                src="images/logo.png"
                alt="Logo Panval Consilium"
                className="w-24 sm:w-28 md:w-32 h-auto object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </Link>

            <p className="text-sm leading-relaxed text-white/60 mb-5">
              {t('footer.brand.description')}
            </p>

            <p className="text-[11px] text-white/40 font-mono">
              RCCM : {RCCM}
            </p>

          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              {t('footer.navigation')}
            </h4>

            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path!}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    {item.labelKey ? tCommon(item.labelKey) : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              {t('footer.services')}
            </h4>

            <ul className="space-y-2">
              {services.map(s => (
                <li key={s.key}>
                  <Link
                    to={s.path}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    {t(`footer.servicesList.${s.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              {t('footer.contact')}
            </h4>

            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-white/60 leading-relaxed">
                  {CONTACT_ADDRESS}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={15} className="text-accent shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a href={`tel:${CONTACT_PHONE_1.replace(/\s/g, '')}`} className="text-sm text-white/60 hover:text-accent">
                    {CONTACT_PHONE_1}
                  </a>
                  <a href={`tel:${CONTACT_PHONE_2.replace(/\s/g, '')}`} className="text-sm text-white/60 hover:text-accent">
                    {CONTACT_PHONE_2}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={15} className="text-accent shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-white/60 hover:text-accent">
                  {CONTACT_EMAIL}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <ExternalLink size={15} className="text-accent shrink-0" />
                <a href={SITE_URL} target="_blank" className="text-sm text-white/60 hover:text-accent">
                  {SITE_URL.replace(/^https?:\/\//, '')}
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-xs text-white/40">
            © {year} Panval Consilium International. {t('footer.brand.rights')}
          </p>

          <p className="text-xs text-white/30 font-body">
            {t('footer.brand.tagline')}
          </p>

        </div>
      </div>

    </footer>
  )
}