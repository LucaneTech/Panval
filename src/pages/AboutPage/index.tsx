import { Helmet } from 'react-helmet-async'
import PageHero from '@/components/layout/PageHero'
import AdminWord from './sections/AdminWord'
import VisionMissionValues from './sections/VisionMissionValues'
import HistoryTimeline from './sections/HistoryTimeline'
import TeamGrid from './sections/TeamGrid'
import Methodology from './sections/Methodology'
import { CtaBanner } from '@/components/sections/CtaBanner'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>À propos — Panval Consilium International</title>
        <meta name="description" content="Découvrez Panval Consilium International : notre vision, mission, valeurs et équipe dirigeante." />
      </Helmet>
      <PageHero
        title="À propos de nous"
        subtitle="Panval Consilium International est un cabinet de conseil et de services
stratégiques spécialisé dans l’accompagnement des entreprises publiques et
privées, des organisations et des particuliers ayant des responsabilités."
        image="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80"
        breadcrumbs={[{ label: 'À propos' }]}
      />
      <AdminWord />
      <VisionMissionValues />
      <HistoryTimeline />
      <TeamGrid />
      <Methodology />
      <CtaBanner />
    </>
  )
}
