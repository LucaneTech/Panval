import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { timelineEvents } from '@/data/team.data'

export default function HistoryTimeline() {
  return (
    <section className="section-padding bg-base-100">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Notre parcours"
          title="De 2021 à aujourd'hui"
          subtitle="Une trajectoire de croissance construite sur l'excellence et la confiance."
          centered
        />
        <div className="relative mt-16 max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-base-300 -translate-x-1/2 hidden md:block" />

          <div className="space-y-10">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`inline-flex items-center gap-2 mb-2 ${i % 2 !== 0 ? '' : 'md:flex-row-reverse'}`}>
                    <span className="text-accent font-mono text-sm font-bold">{event.year}</span>
                    <div className="w-8 h-px bg-accent/40" />
                  </div>
                  <h4 className="font-heading font-bold text-base-content text-lg mb-1">{event.title}</h4>
                  <p className="text-base-content/60 font-body text-sm leading-relaxed">{event.description}</p>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-accent border-2 border-base-100 shadow-sm" />
                </div>

                {/* Empty side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
