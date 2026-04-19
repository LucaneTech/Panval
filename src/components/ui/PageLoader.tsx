import { motion, AnimatePresence } from 'framer-motion'


interface PageLoaderProps {
  isLoading: boolean
}

export default function PageLoader({ isLoading }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-base-100"
        >
          {/* Outer ring */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              className="absolute w-36 h-36 rounded-full border-2 border-transparent border-t-accent border-r-accent/40"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              className="absolute w-32 h-32 rounded-full border border-transparent border-t-primary/60 border-b-primary/60"
            />

            {/* Logo Center */}
           
                         <motion.img
                          src="images/logo.png"
                          alt="Logo Panval Consilium"
                          className="w-24 sm:w-28 md:w-32 h-auto object-contain"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        />
                         
            
            
          </div>

          {/* Brand name */}
        

          {/* Progress bar */}
          <motion.div className="mt-8 w-40 h-0.5 bg-base-300 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
