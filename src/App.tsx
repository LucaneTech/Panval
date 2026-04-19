import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import PageLayout from '@/components/layout/PageLayout'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import FormationsPage from '@/pages/FormationsPage'
import EtudesPage from '@/pages/EtudesPage'
import CepPage from '@/pages/CepPage'
import ClientsPage from '@/pages/ClientsPage'
import ContactPage from '@/pages/ContactPage'
import NotFoundPage from '@/pages/NotFoundPage'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/formations" element={<FormationsPage />} />
            <Route path="/etudes" element={<EtudesPage />} />
            <Route path="/cep" element={<CepPage />} />
            <Route path="/nos-clients" element={<ClientsPage />} />
            <Route path="/contact" element={<ContactPage />} />
             <Route path="*" element={<NotFoundPage />} />
            
          </Routes>

       
        </PageLayout>
      </BrowserRouter>
    </HelmetProvider>
  )
}
