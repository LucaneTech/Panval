// hooks/useCepData.ts
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { getCepServices, getCepSteps } from '@/data/cep.data'
import type { CepService, CepStep } from '@/types'

export const useCepData = () => {
  const { i18n } = useTranslation()
  const [services, setServices] = useState<CepService[]>([])
  const [steps, setSteps] = useState<CepStep[]>([])

  useEffect(() => {
    setServices(getCepServices(i18n.language))
    setSteps(getCepSteps(i18n.language))
  }, [i18n.language])

  return { services, steps }
}