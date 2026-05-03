import type { TeamMember, Value } from '@/types'


export const teamMembers: Record<'fr' | 'en' | 'ar', TeamMember[]> = {
  fr: [
    {
      id: 'tpc',
      name: 'Paijos Clauva TCHIAMA',
      role: 'Directeur Général — Panval Consilium International',
      bio: "Chez PANVAL CONSILIUM INTERNATIONAL, nous transformons les ambitions en organisations performantes et durables, en éclairant les décisions, structurant les systèmes et libérant le potentiel des dirigeants. À travers une approche stratégique et analytique, nous accompagnons les institutions et leaders dans l’optimisation de leurs performances, la clarification de leurs choix et l’anticipation des enjeux futurs. PANVAL se positionne comme un partenaire stratégique de haut niveau, au service de la vision, de l’impact et de la transformation organisationnelle.",
      image: 'images/directeur.jpeg',
      initials: 'TPC',
      insight: {
        title: "Pourquoi la transdisciplinarité est l'avenir du conseil en Afrique",
        excerpt: "La complexité des défis africains ne peut être résolue par une approche mono-disciplinaire. L'avenir appartient à ceux qui savent croiser les regards, les méthodes et les expertises pour construire des solutions véritablement adaptées aux réalités locales."
      }
    },
    {
      id: 'fpk',
      name: 'FERNANDES Peters Ketsia Manuella',
      role: 'Directrice des Opérations et des Projets',
      bio: "Chez PANVAL CONSILIUM INTERNATIONAL, nous allons au-delà de l’exécution pour structurer des organisations performantes et résilientes. En tant que Directrice des Opérations, je transforme les visions en systèmes efficaces grâce à une approche fondée sur l’optimisation des processus, l’anticipation stratégique et la mesure de l’impact. À travers HERMON EXIMIA, nous développons une intelligence concierge prédictive qui simplifie la complexité et permet aux décideurs de se concentrer sur l’essentiel : leur performance et leur vision.",
      image: 'images/manuela.jpeg',
      initials: 'FPK',
      insight: {
        title: "L'agilité opérationnelle comme levier de croissance durable",
        excerpt: "La performance durable se construit par des processus agiles et une équipe alignée. Notre mission est de libérer le potentiel de croissance des organisations."
      }
    },

    {
      id: 'mat',
      name: 'MANANGA Abraham Toussaint',
      role: 'Directeur du Développement Stratégique et des Affaires Juridiques',
      bio: "Expert en droit des affaires et en stratégie organisationnelle, MANANGA Abraham Toussaint pilote le développement stratégique du cabinet et les questions juridiques complexes. Sa mission : transformer la complexité réglementaire en avantage compétitif pour les clients.",
      image: 'images/abraham.jpeg',
      initials: 'MAT',
      insight: {
        title: "Transformer la complexité juridique en avantage compétitif",
        excerpt: "Dans un environnement réglementaire en constante évolution, la maîtrise des enjeux juridiques n'est plus une contrainte mais un levier stratégique. Notre approche proactive permet aux organisations d'anticiper et de transformer les contraintes en opportunités."
      }
    },
  ],

  en: [
    {
      id: 'tpc',
      name: 'Paijos Clauva TCHIAMA',
      role: 'Chief Executive Officer — Panval Consilium International',
      bio: "At PANVAL CONSILIUM INTERNATIONAL, we transform ambitions into high-performing and sustainable organizations by illuminating decisions, structuring systems, and unlocking leaders’ potential. Through a strategic and analytical approach, we support institutions and leaders in optimizing performance, clarifying decision-making, and anticipating future challenges. PANVAL positions itself as a high-level strategic partner, dedicated to vision, impact, and organizational transformation.",
      image: 'images/directeur.jpeg',
      initials: 'TPC',
      insight: {
        title: "Why transdisciplinarity is the future of consulting in Africa",
        excerpt: "Africa's complex challenges cannot be solved through a single-discipline approach. The future belongs to those who combine perspectives, methods, and expertise."
      }
    },
   
    {
      id: 'fpk',
      name: 'FERNANDES Peters Ketsia Manuella',
      role: 'Director of Operations and Projects',
      bio: "At PANVAL CONSILIUM INTERNATIONAL, we go beyond execution to structure high-performing and resilient organizations. As Operations Director, I transform visions into effective systems through an approach based on process optimization, strategic foresight, and impact measurement. Through HERMON EXIMIA, we develop a predictive concierge intelligence that simplifies complexity and enables decision-makers to focus on what matters most: their performance and vision.",
      image: 'images/manuela.jpeg',
      initials: 'FPK',
      insight: {
        title: "Operational agility as a driver of sustainable growth",
        excerpt: "Sustainable performance is built through agile processes and aligned teams. Our mission is to unlock organizational growth potential."
      }
    },
     {
      id: 'mat',
      name: 'MANANGA Abraham Toussaint',
      role: 'Director of Strategic Development and Legal Affairs',
      bio: "Expert in business law and organizational strategy, he leads strategic development and legal matters. His mission is to turn regulatory complexity into competitive advantage.",
      image: 'images/abraham.jpeg',
      initials: 'MAT',
      insight: {
        title: "Turning legal complexity into competitive advantage",
        excerpt: "In a constantly evolving regulatory environment, legal mastery is not a constraint but a strategic lever. Our proactive approach helps organizations transform constraints into opportunities."
      }
    },
  ],

  ar: [
    {
      id: 'tpc',
      name: 'تيشاما بايجوس كلاوفا',
      role: 'المدير العام — Panval Consilium International',
      bio: "يشرف تيشاما بايجوس كلاوفا على شركة Panval Consilium International منذ أكثر من خمس سنوات لبناء مؤسسة استشارية رائدة في إفريقيا. يؤمن بأن الأداء المستدام يعتمد على جودة المعلومات ودقة الاستراتيجية وإتقان التنفيذ.",
      image: '',
      initials: 'TPC',
      insight: {
        title: "لماذا تعد التعددية التخصصية مستقبل الاستشارات في إفريقيا",
        excerpt: "لا يمكن حل التحديات الإفريقية المعقدة من خلال تخصص واحد. المستقبل لأولئك الذين يجمعون بين وجهات النظر والخبرات المختلفة."
      }
    },
    {
      id: 'mat',
      name: 'مانانغا أبراهام توسان',
      role: 'مدير التطوير الاستراتيجي والشؤون القانونية',
      bio: "خبير في قانون الأعمال والاستراتيجية التنظيمية، يقود التطوير الاستراتيجي والمسائل القانونية، ويحول التعقيد القانوني إلى ميزة تنافسية.",
      image: '',
      initials: 'MAT',
      insight: {
        title: "تحويل التعقيد القانوني إلى ميزة تنافسية",
        excerpt: "في بيئة تنظيمية متغيرة باستمرار، تصبح المعرفة القانونية أداة استراتيجية وليست عائقًا. نهجنا يساعد المؤسسات على تحويل القيود إلى فرص."
      }
    },
    {
      id: 'fpk',
      name: 'فرنانديز بيترس كيتسيا مانويلّا',
      role: 'مديرة العمليات والمشاريع',
      bio: "متخصصة في إدارة المشاريع وتحسين العمليات، تضمن التنسيق الفعال لجميع تدخلات الشركة الاستشارية.",
      image: '',
      initials: 'FPK',
      insight: {
        title: "المرونة التشغيلية كمحرك للنمو المستدام",
        excerpt: "يتم بناء الأداء المستدام من خلال عمليات مرنة وفِرَق متناسقة. مهمتنا إطلاق إمكانات النمو للمؤسسات."
      }
    }
  ]
}





export const companyValues: Record<'fr' | 'en' | 'ar', Value[]> = {
  fr: [
    { id: 'v1', number: '01', title: 'Excellence', description: "Priorité à la qualité, la rigueur et la pertinence dans toutes nos interventions.", icon: 'Star' },
    { id: 'v2', number: '02', title: 'Intégrité', description: "Transparence, éthique et responsabilité dans nos relations et actions.", icon: 'Shield' },
    { id: 'v3', number: '03', title: 'Innovation', description: "Solutions modernes et adaptées aux besoins spécifiques de chaque client.", icon: 'Lightbulb' },
    { id: 'v4', number: '04', title: 'Orientation résultats', description: "Actions guidées par l'impact concret et mesurable.", icon: 'Target' },
    { id: 'v5', number: '05', title: 'Professionnalisme', description: "Respect des normes, des délais et des engagements pris.", icon: 'Award' },
    { id: 'v6', number: '06', title: 'Confidentialité', description: "Protection des informations stratégiques et sensibles.", icon: 'Lock' },
    { id: 'v7', number: '07', title: 'Partenariat', description: "Relations durables basées sur la confiance, l'écoute et la co-création de valeur.", icon: 'Handshake' },
  ],

  en: [
    { id: 'v1', number: '01', title: 'Excellence', description: "Priority to quality, rigor, and relevance in all our interventions.", icon: 'Star' },
    { id: 'v2', number: '02', title: 'Integrity', description: "Transparency, ethics, and responsibility in our relationships and actions.", icon: 'Shield' },
    { id: 'v3', number: '03', title: 'Innovation', description: "Modern solutions adapted to each client's specific needs.", icon: 'Lightbulb' },
    { id: 'v4', number: '04', title: 'Results Orientation', description: "Actions driven by measurable and concrete impact.", icon: 'Target' },
    { id: 'v5', number: '05', title: 'Professionalism', description: "Respect of standards, deadlines, and commitments.", icon: 'Award' },
    { id: 'v6', number: '06', title: 'Confidentiality', description: "Protection of strategic and sensitive information.", icon: 'Lock' },
    { id: 'v7', number: '07', title: 'Partnership', description: "Long-term relationships based on trust and co-creation of value.", icon: 'Handshake' },
  ],

  ar: [
    { id: 'v1', number: '01', title: 'التميز', description: "إعطاء الأولوية للجودة والدقة في جميع تدخلاتنا.", icon: 'Star' },
    { id: 'v2', number: '02', title: 'النزاهة', description: "الشفافية والأخلاق والمسؤولية في علاقاتنا وأعمالنا.", icon: 'Shield' },
    { id: 'v3', number: '03', title: 'الابتكار', description: "حلول حديثة تتكيف مع احتياجات كل عميل.", icon: 'Lightbulb' },
    { id: 'v4', number: '04', title: 'التركيز على النتائج', description: "إجراءات مبنية على أثر ملموس وقابل للقياس.", icon: 'Target' },
    { id: 'v5', number: '05', title: 'الاحترافية', description: "احترام المعايير والمواعيد والالتزامات.", icon: 'Award' },
    { id: 'v6', number: '06', title: 'السرية', description: "حماية المعلومات الاستراتيجية والحساسة.", icon: 'Lock' },
    { id: 'v7', number: '07', title: 'الشراكة', description: "علاقات طويلة الأمد قائمة على الثقة والتعاون.", icon: 'Handshake' },
  ]
}