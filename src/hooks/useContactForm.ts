import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '@/utils/constants'
import type { ContactFormData } from '@/types'


const schema = z.object({
  fullName: z.string().min(2, 'Nom requis (min 2 caractères)'),
  company: z.string().min(2, 'Entreprise requise'),
  role: z.string().min(2, 'Fonction requise'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(8, 'Téléphone invalide'),
  subject: z.enum(['diagnostic', 'rdv', 'devis', 'autre']),
  services: z.array(z.enum(['formation', 'etudes', 'cep'])).min(1, 'Sélectionnez au moins un service'),
  message: z.string().min(20, 'Message trop court (min 20 caractères)'),
})


const subjectMap = {
  diagnostic: 'Diagnostic offert (2h)',
  rdv: 'Prise de rendez-vous',
  devis: 'Demande de devis',
  autre: 'Autre demande',
}

const servicesMap = {
  formation: 'Formations',
  etudes: 'Études & Diagnostics',
  cep: 'Conciergerie (CEP)',
}

export function useContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      services: [],
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')

    try {
   
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error('Configuration EmailJS manquante')
      }

  
      const formattedData = {
        from_name: data.fullName,
        company: data.company,
        role: data.role,
        reply_to: data.email,
        phone: data.phone,
        subject: subjectMap[data.subject],
        services: data.services.map(s => servicesMap[s]).join(', '),
        message: data.message,
      }

 
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formattedData,
        EMAILJS_PUBLIC_KEY
      )

  
      setStatus('success')
      form.reset()

    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
    }
  }

  return {
    form,
    onSubmit,
    status,
    setStatus,
  }
}