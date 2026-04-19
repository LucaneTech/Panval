import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export default function NotFoundPage() {
  return (
    <>
      <Helmet><title>Page introuvable — Panval Consilium International</title></Helmet>
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <div className="text-center px-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-8xl font-bold text-primary/20 mb-4">404</h1>
            <h2 className="font-heading text-2xl font-bold text-base-content mb-3">Page introuvable</h2>
            <p className="text-base-content/55 font-body mb-8 max-w-sm mx-auto">
              La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/" className="btn btn-primary rounded-md font-body font-medium uppercase tracking-wider text-sm px-6">
                <Home size={15} className="mr-2" /> Accueil
              </Link>
              <button onClick={() => history.back()} className="btn btn-outline btn-primary rounded-md font-body font-medium uppercase tracking-wider text-sm px-6">
                <ArrowLeft size={15} className="mr-2" /> Retour
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
