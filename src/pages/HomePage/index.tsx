import { Helmet } from 'react-helmet-async'
import HeroSection from './sections/HeroSection'
import AboutSnippet from './sections/AboutSnippet'
import ServicesGrid from './sections/ServicesGrid'
import WhyChooseUs from './sections/WhyChooseUs'
import HomeTestimonials from './sections/HomeTestimonials'
import StatsStrip from '@/components/sections/StatsStrip'
import PartnerLogos from '@/components/sections/PartnerLogos'
import { CtaBanner } from '@/components/sections/CtaBanner'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Panval Consilium International — Excellence Stratégique</title>
        <meta name="description" content="Cabinet d'excellence spécialisé en formation opérationnelle, études de marché et diagnostics stratégiques, ainsi qu'en conciergerie d'entreprise. Brazzaville, Congo." />
      </Helmet>
      <HeroSection />
      <AboutSnippet />
      <StatsStrip />
      <ServicesGrid />
      <WhyChooseUs />
      <HomeTestimonials />
      <PartnerLogos />
      <CtaBanner />
    </>
  )
}
