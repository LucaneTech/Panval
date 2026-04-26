// data/cep.data.ts
import type { CepService, CepStep } from '@/types'

// Définition des traductions pour chaque langue
const translations = {
  fr: {
    // Services pour dirigeants
    'c1': { title: 'Accompagnement exécutif personnalisé', description: "Soutien individualisé des dirigeants dans la gestion de leurs priorités professionnelles et institutionnelles." },
    'c2': { title: 'Gestion intelligente des priorités et agendas stratégiques', description: "Organisation optimale du temps et des engagements à forte valeur ajoutée." },
    'c3': { title: 'Assistance à la prise de décision stratégique', description: "Appui analytique et méthodologique pour sécuriser les décisions sensibles." },
    'c4': { title: 'Accompagnement en période de transition ou de crise', description: "Soutien stratégique lors de changements organisationnels, restructurations ou situations complexes." },
    'c5': { title: 'Coordination stratégique des activités transversales', description: "Fluidification des interactions entre directions, partenaires et parties prenantes." },
    'c6': { title: 'Gestion confidentielle des dossiers sensibles', description: "Traitement sécurisé et professionnel des informations stratégiques." },
    'c7': { title: 'Interface stratégique avec partenaires et institutions', description: "Facilitation des relations professionnelles et institutionnelles clés." },
    'c8': { title: 'Gestion du stress décisionnel et de la charge mentale', description: "Accompagnement visant à renforcer la lucidité, la sérénité et la stabilité des dirigeants." },
    'c9': { title: 'Accompagnement à la performance personnelle du dirigeant', description: "Soutien visant l'équilibre, l'efficacité et la durabilité du leadership." },
    'c10': { title: "Appui à la gouvernance et à l'exemplarité managériale", description: "Renforcement des pratiques responsables et de l'autorité légitime." },
    // Services pour organisations
    'c11': { title: 'Accompagnement des cadres supérieurs et équipes dirigeantes', description: "Soutien collectif pour améliorer la coordination, la cohésion et la performance." },
    'c12': { title: "Optimisation du fonctionnement quotidien de l'organisation", description: "Réduction des frictions opérationnelles pour accroître l'efficacité globale." },
    'c13': { title: 'Appui logistique stratégique aux missions et projets', description: "Organisation et coordination des ressources nécessaires aux missions critiques." },
    'c14': { title: 'Support organisationnel de haut niveau', description: "Renforcement de l'efficacité interne par une assistance structurée et discrète." },
    'c15': { title: 'Suivi stratégique et reporting exécutif', description: "Production de synthèses claires pour un pilotage efficace et orienté résultats." },
    'c16': { title: 'Appui à la gouvernance managériale', description: "Renforcement des pratiques responsables et de l'autorité légitime au sein de l'organisation." },
    // Steps
    'step1': { title: 'Cadrage stratégique initial', content: "Analyse de la situation du dirigeant ou de l'organisation, identification des besoins prioritaires et définition des objectifs d'accompagnement." },
    'step2': { title: 'Diagnostic approfondi', content: "Analyse des forces, faiblesses, opportunités et menaces. Cartographie des priorités stratégiques et des leviers de performance." },
    'step3': { title: "Construction du plan d'action", content: "Formalisation du plan d'action concret, priorisation des interventions et définition des indicateurs de succès mesurables." },
    'step4': { title: 'Accompagnement & Suivi personnalisé', content: "Accompagnement pas à pas, suivi personnalisé, ajustements continus et évaluation régulière de la progression vers les objectifs fixés." }
  },
  en: {
    'c1': { title: 'Personalized Executive Support', description: "Individualized support for leaders in managing their professional and institutional priorities." },
    'c2': { title: 'Smart Management of Priorities and Strategic Agendas', description: "Optimal organization of time and high-value commitments." },
    'c3': { title: 'Strategic Decision-Making Assistance', description: "Analytical and methodological support to secure sensitive decisions." },
    'c4': { title: 'Support During Transition or Crisis Periods', description: "Strategic support during organizational changes, restructurings, or complex situations." },
    'c5': { title: 'Strategic Coordination of Cross-Functional Activities', description: "Streamlining interactions between departments, partners, and stakeholders." },
    'c6': { title: 'Confidential Management of Sensitive Files', description: "Secure and professional handling of strategic information." },
    'c7': { title: 'Strategic Interface with Partners and Institutions', description: "Facilitation of key professional and institutional relationships." },
    'c8': { title: 'Decision-Making Stress and Mental Load Management', description: "Support aimed at strengthening clarity, serenity, and stability of leaders." },
    'c9': { title: 'Leader Personal Performance Support', description: "Support for balance, effectiveness, and leadership sustainability." },
    'c10': { title: 'Governance and Managerial Exemplarity Support', description: "Strengthening responsible practices and legitimate authority." },
    'c11': { title: 'Support for Senior Executives and Leadership Teams', description: "Collective support to improve coordination, cohesion, and performance." },
    'c12': { title: "Optimization of Organization's Daily Operations", description: "Reduction of operational friction to increase overall efficiency." },
    'c13': { title: 'Strategic Logistic Support for Missions and Projects', description: "Organization and coordination of resources needed for critical missions." },
    'c14': { title: 'High-Level Organizational Support', description: "Strengthening internal efficiency through structured and discreet assistance." },
    'c15': { title: 'Strategic Monitoring and Executive Reporting', description: "Production of clear summaries for effective, results-oriented management." },
    'c16': { title: 'Managerial Governance Support', description: "Strengthening responsible practices and legitimate authority within the organization." },
    'step1': { title: 'Initial Strategic Framing', content: "Analysis of the leader or organization's situation, identification of priority needs, and definition of support objectives." },
    'step2': { title: 'In-Depth Diagnosis', content: "Analysis of strengths, weaknesses, opportunities, and threats. Mapping of strategic priorities and performance levers." },
    'step3': { title: 'Action Plan Development', content: "Formalization of a concrete action plan, prioritization of interventions, and definition of measurable success indicators." },
    'step4': { title: 'Personalized Support & Monitoring', content: "Step-by-step support, personalized monitoring, continuous adjustments, and regular evaluation of progress toward set objectives." }
  },
  ar: {
    'c1': { title: 'دعم تنفيذي مخصص', description: "دعم فردي للقادة في إدارة أولوياتهم المهنية والمؤسسية." },
    'c2': { title: 'إدارة ذكية للأولويات والجداول الاستراتيجية', description: "تنظيم مثالي للوقت والالتزامات ذات القيمة المضافة العالية." },
    'c3': { title: 'مساعدة في اتخاذ القرار الاستراتيجي', description: "دعم تحليلي ومنهجي لتأمين القرارات الحساسة." },
    'c4': { title: 'دعم خلال فترات الانتقال أو الأزمات', description: "دعم استراتيجي خلال التغييرات التنظيمية أو إعادة الهيكلة أو المواقف المعقدة." },
    'c5': { title: 'تنسيق استراتيجي للأنشطة المشتركة بين القطاعات', description: "تبسيط التفاعلات بين الإدارات والشركاء وأصحاب المصلحة." },
    'c6': { title: 'إدارة سرية للملفات الحساسة', description: "معالجة آمنة ومهنية للمعلومات الاستراتيجية." },
    'c7': { title: 'واجهة استراتيجية مع الشركاء والمؤسسات', description: "تسهيل العلاقات المهنية والمؤسسية الرئيسية." },
    'c8': { title: 'إدارة إجهاد القرار والعبء العقلي', description: "دعم يهدف إلى تعزيز الوضوح والطمأنينة والاستقرار للقادة." },
    'c9': { title: 'دعم الأداء الشخصي للقائد', description: "دعم من أجل التوازن والفعالية واستدامة القيادة." },
    'c10': { title: 'دعم الحوكمة والقدوة الإدارية', description: "تعزيز الممارسات المسؤولة والسلطة الشرعية." },
    'c11': { title: 'دعم كبار المديرين والفرق القيادية', description: "دعم جماعي لتحسين التنسيق والتماسك والأداء." },
    'c12': { title: 'تحسين العمليات اليومية للمنظمة', description: "تقليل الاحتكاك التشغيلي لزيادة الكفاءة العامة." },
    'c13': { title: 'دعم لوجستي استراتيجي للمهام والمشاريع', description: "تنظيم وتنسيق الموارد اللازمة للمهام الحرجة." },
    'c14': { title: 'دعم تنظيمي رفيع المستوى', description: "تعزيز الكفاءة الداخلية من خلال مساعدة منظمة وحكيمة." },
    'c15': { title: 'متابعة استراتيجية وتقارير تنفيذية', description: "إنتاج ملخصات واضحة لإدارة فعالة موجهة نحو النتائج." },
    'c16': { title: 'دعم الحوكمة الإدارية', description: "تعزيز الممارسات المسؤولة والسلطة الشرعية داخل المنظمة." },
    'step1': { title: 'تأطير استراتيجي أولي', content: "تحليل وضع القائد أو المنظمة، تحديد الاحتياجات ذات الأولوية، وتحديد أهداف الدعم." },
    'step2': { title: 'تشخيص متعمق', content: "تحليل نقاط القوة والضعف والفرص والتهديدات. رسم خرائط الأولويات الاستراتيجية ومحركات الأداء." },
    'step3': { title: 'تطوير خطة العمل', content: "إضفاء الطابع الرسمي على خطة عمل ملموسة، تحديد أولويات التدخلات، وتحديد مؤشرات نجاح قابلة للقياس." },
    'step4': { title: 'دعم ومتابعة مخصصين', content: "دعم خطوة بخطوة، متابعة مخصصة، تعديلات مستمرة، وتقييم منتظم للتقدم نحو الأهداف المحددة." }
  }
}

// Données de base des services (sans texte)
const servicesBase = [
  { id: 'c1', category: 'dirigeant' as const },
  { id: 'c2', category: 'dirigeant' as const },
  { id: 'c3', category: 'dirigeant' as const },
  { id: 'c4', category: 'dirigeant' as const },
  { id: 'c5', category: 'dirigeant' as const },
  { id: 'c6', category: 'dirigeant' as const },
  { id: 'c7', category: 'dirigeant' as const },
  { id: 'c8', category: 'dirigeant' as const },
  { id: 'c9', category: 'dirigeant' as const },
  { id: 'c10', category: 'dirigeant' as const },
  { id: 'c11', category: 'organisation' as const },
  { id: 'c12', category: 'organisation' as const },
  { id: 'c13', category: 'organisation' as const },
  { id: 'c14', category: 'organisation' as const },
  { id: 'c15', category: 'organisation' as const },
  { id: 'c16', category: 'organisation' as const },
]

// Données de base des étapes
const stepsBase = [
  { step: 1, duration: '1h30' },
  { step: 2, duration: '2 à 4 sessions' },
  { step: 3, duration: '1 à 2 sessions' },
  { step: 4, duration: '3 à 6 mois' },
]

// Fonction pour obtenir les services selon la langue
export const getCepServices = (locale: string = 'fr'): CepService[] => {
  const t = translations[locale as keyof typeof translations] || translations.fr
  return servicesBase.map(service => {
    const serviceData = t[service.id as keyof typeof t] as { title: string; description: string } | undefined
    return {
      id: service.id,
      title: serviceData?.title || '',
      description: serviceData?.description || '',
      category: service.category
    }
  })
}

// Fonction pour obtenir les étapes selon la langue
export const getCepSteps = (locale: string = 'fr'): CepStep[] => {
  const t = translations[locale as keyof typeof translations] || translations.fr
  return stepsBase.map(step => {
    const stepData = t[`step${step.step}` as keyof typeof t] as { title: string; content: string } | undefined
    return {
      step: step.step,
      title: stepData?.title || '',
      duration: step.duration,
      content: stepData?.content || ''
    }
  })
}

// Export pour utilisation directe (sera mis à jour dynamiquement)
export const cepServices = getCepServices('fr')
export const cepSteps = getCepSteps('fr')