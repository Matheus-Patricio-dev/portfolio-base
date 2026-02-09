import { Locale, TranslationContent } from '@/types';

export const DEFAULT_LOCALE: Locale = 'pt-BR';

export const SUPPORTED_LOCALES: { code: Locale; label: string }[] = [
  { code: 'pt-BR', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' }
];

const skillsPt = [
  'TypeScript',
  'Javascript',
  'Python',
  'React',
  'Node.js',
  'Next.js',
  'NestJS',
  'FastAPI',
  'PostgreSQL',
  'Docker',
  'AWS',
  'CI/CD',
  'N8N',
  'Redis'
];

const skillsEn = [
  'TypeScript',
  'Javascript',
  'Python',
  'React',
  'Node.js',
  'Next.js',
  'NestJS',
  'FastAPI',
  'PostgreSQL',
  'Docker',
  'AWS',
  'CI/CD',
  'N8N',
  'Redis'
];

const skillsEs = [
  'TypeScript',
  'Javascript',
  'Python',
  'React',
  'Node.js',
  'Next.js',
  'NestJS',
  'FastAPI',
  'PostgreSQL',
  'Docker',
  'AWS',
  'CI/CD',
  'N8N',
  'Redis'
];

export const TRANSLATIONS: Record<Locale, TranslationContent> = {
  'pt-BR': {
    sections: {
      about: 'Sobre',
      projects: 'Projetos em Destaque',
      experience: 'Experiencia Profissional',
      stack: 'Stack Tecnica',
      education: 'Formacao',
      languages: 'Idiomas'
    },
    hero: {
      name: 'Matheus Patricio',
      role: 'Desenvolvedor Full Stack',
      nationality: 'Brasileiro',
      location: 'Rio de Janeiro, Brasil',
      phone: '+55 (21) 97598-1648',
      email: 'contato.matheuspatricio@gmail.com',
      about: [
        'Desenvolvedor Full Stack e Arquiteto de Software, focado na construção de sistemas escaláveis e orientados a produtos.',
        'Atuo principalmente com Node.js, Bun, Python e Typescript, trabalhando na arquitetura dos sistemas, design, construção e intregração de APIs, modelagem de banco de dados e desenvolvimento frontend. Tenho experiência sólida com Firebase, Postgres, AWS Cloud, CI/CD (Docker e K  ubernetes), aplicand bas práticas de performance, segurança e governança.',
        'Forte atuação participando de diferentes etapas do desenvolvimento, desde o entendimento dos requisitos e apoio na definição da arquitetura de software até a implementação das funcionalidades e testes automatizados.'
      ]
    },
    actions: {
      visitProject: 'Visitar projeto',
      languageLabel: 'Idioma'
    },
    projects: [
      {
        id: 'project-one',
        title: 'Payform Gestão',
        url: 'https://alunos.payform.com.br/',
        tagline: 'Sistema de Gestão B2C/B2B para o grupo Payform',
        description: 'Sistema de gestão completo desenvolvido para unificar operações B2C e B2B.',
        bullets: [
          'React | Typescript | Node | Firebase | Firebase Auth',
          'Desenvolvimento Full Stack com criação e integração de API REST em Node com Typescript.',
          'Otimização da arquitetura de banco de dados, possibilitando melhor cruzamento de informações e reduzindo a necessidade de queries em 30%.'
        ]
      },
      {
        id: 'project-two',
        title: 'Mercado Livre e Shopee Libs',
        url: 'https://www.npmjs.com/package/@cristianmpx/mercadolivre-api',
        tagline: 'Biblioteca Javascript para API do Mercado Livre e Shopee',
        description: 'Bibliotecas JavaScript desenvolvidas para abstrair APIs complexas de marketplaces, acelerando o desenvolvimento de ERPs e automações operacionais.',
        bullets: [
          'Typescript | Node | Adonis | Mercado Livre SDK | Shopee SDK.',
          'Abstração da API do Mercado Livre e Shopee por meio de uma biblioteca JavaScript, reduzindo a complexidade de integração e viabilizando a automação de processos operacionais.',
          'Aceleração do desenvolvimento de módulos de ERP e automações, reduzindo significativamente o tempo de integração com marketplaces.'
        ]
      },
      {
        id: 'project-three',
        title: 'Fast Finance',
        url: 'Em breve',
        tagline: 'Ferramenta de WhatsApp integrada com agente de IA para controle de financias e insights baseados em seus objetivos pessoais com seu dinheiro',
        description: 'Fast Finance é o seu contato pessoal que é responsável por auxiliar e te guiar para o melhor aproveitamento da sua capacidade financeira.',
        bullets: [
          'N8N | Redis | Postgres | Docker | Bun | Typescript',
          'Capacidade de gerar insights sobre gastos e metas financeiras baseadas nos dados do usuário, geração de novos planos para atingir metas, gerenciamento de gastos, entrada e saída, lembretes e avisos.',
          'Saas em desenvolvimento.'
        ]
      }
    ],
    experiences: [
      {
        company: 'AS3 Engenharia',
        location: 'Rio de janeiro, RJ',
        role: 'Desenvolvedor Full Stack',
        period: '02/2026 - Presente',
        bullets: [
          'Liderou entregas de alto impacto em produto e engenharia.',
          'Melhorou confiabilidade com testes, observabilidade e padroes.',
          'Apoiou decisoes de arquitetura com foco em escala e manutencao.'
        ]
      },
      {
        company: 'Freelancer',
        location: 'Rio de janeiro, RJ',
        role: 'Desenvolvedor Full Stack',
        period: '01/2025 - 02/2026',
        bullets: [
          'Contribuí para o desenvolvimento de bibliotecas JavaScript para consumo de API do Mercado Livre e Shopee.',
          'Desenvolvimento de interfaces focadas na experiência do usuário em uma aplicação financeira B2C, elevando significativamente a usabilidade, a performance e a eficiência operacional por meio de soluções intuitivas e bem estruturadas.',
          'Auxiliei o desenvolvimento e implementação de APIs REST de gateways de pagamentos, que viabilizou transações financeiras para empresas de intermediação de pagamentos B2C.'
        ]
      }
    ],
    skills: skillsPt,
    education: {
      institution: 'Unopar',
      degree: 'CST em Análise e Desenvolvimento de Sistemas',
      date: '02/2023 - 08/2025',
      languages: [
        { name: 'Portugues', level: 'Nativo' },
        { name: 'Ingles', level: 'Avançado' },
        { name: 'Espanhol', level: 'Básico' }
      ]
    },
    footer: {
      copyright: '© 2026 Matheus Patricio',
      role: 'Software Engineer'
    }
  },
  en: {
    sections: {
      about: 'About',
      projects: 'Featured Projects',
      experience: 'Professional Experience',
      stack: 'Technical Stack',
      education: 'Education',
      languages: 'Languages'
    },
    hero: {
      name: 'Matheus Patricio',
      role: 'Full Stack Developer',
      nationality: 'Brazilian',
      location: 'Rio de Janeiro, Brasil',
      phone: '+55 (21) 97598-1648',
      email: 'contato.matheuspatricio@gmail.com',
      about: [
        'Full Stack Developer and Software Architect, focused on building scalable, product-oriented systems.',
        'I mainly work with Node.js, Bun, Python, and TypeScript, handling system architecture, design, API development and integration, database modeling, and frontend development. I have solid experience with Firebase, PostgreSQL, AWS Cloud, CI/CD (Docker and Kubernetes), applying best practices in performance, security, and governance.',
        'Strong involvement across different stages of development, from understanding requirements and supporting software architecture definition to feature implementation and automated testing.'
      ]
    },
    actions: {
      visitProject: 'Visit project',
      languageLabel: 'Language'
    },
    projects: [
      {
        id: 'project-one',
        title: 'Payform Gestão',
        url: 'https://alunos.payform.com.br/',
        tagline: 'B2C/B2B Management System for the Payform Group',
        description: 'Complete management system developed to unify B2C and B2B operations.',
        bullets: [
          'React | TypeScript | Node | Firebase | Firebase Auth',
          'Full Stack development, including the creation and integration of REST APIs using Node.js and TypeScript.',
          'Database architecture optimization, enabling better data cross-referencing and reducing query usage by 30%.'
        ]
      },
      {
        id: 'project-two',
        title: 'Mercado Livre and Shopee Libs',
        url: 'https://www.npmjs.com/package/@cristianmpx/mercadolivre-api',
        tagline: 'JavaScript libraries for the Mercado Livre and Shopee APIs',
        description: 'JavaScript libraries developed to abstract complex marketplace APIs, accelerating ERP development and operational automations.',
        bullets: [
          'TypeScript | Node | Adonis | Mercado Livre SDK | Shopee SDK',
          'Abstraction of Mercado Livre and Shopee APIs through a JavaScript library, reducing integration complexity and enabling operational process automation.',
          'Accelerated development of ERP modules and automations, significantly reducing marketplace integration time.'
        ]
      },
      {
        id: 'project-three',
        title: 'Fast Finance',
        url: 'On air soon',
        tagline: 'WhatsApp tool integrated with an AI agent for financial control and insights based on personal money goals.',
        description: 'Fast Finance is your personal contact responsible for assisting and guiding you toward better use of your financial potential.',
        bullets: [
          'N8N | Redis | PostgreSQL | Docker | Bun | TypeScript',
          'Ability to generate insights on expenses and financial goals based on user data, create new plans to achieve goals, manage income and expenses, and send reminders and alerts.',
          'SaaS under development.'
        ]
      }
    ],
    experiences: [
      {
        company: 'AS3 Engenharia',
        location: 'Rio de Janeiro, Brasil',
        role: 'Full Stack Developer',
        period: '02/2026 - Present',
        bullets: [
          'Led high-impact deliveries across product and engineering.',
          'Improved reliability through testing, observability, and standards.',
          'Supported architectural decisions focused on scale and maintainability.'
        ]
      },
      {
        company: 'Freelancer',
        location: 'Rio de Janeiro, Brasil',
        role: 'Full Stack Developer',
        period: '01/2025 - 12/2026',
        bullets: [
          'Contributed to the development of JavaScript libraries for consuming the Mercado Livre and Shopee APIs.',
          'Developed user experience–focused interfaces for a B2C financial application, significantly improving usability, performance, and operational efficiency through intuitive and well-structured solutions.',
          'Assisted in the development and implementation of REST APIs for payment gateways, enabling financial transactions for B2C payment intermediary companies.'
        ]
      }
    ],
    skills: skillsEn,
    education: {
      institution: 'Unopar',
      degree: 'Associate Degree in Systems Analysis and Development',
      date: '02/2023 – 08/2025',
      languages: [
        { name: 'Portugues', level: 'Native' },
        { name: 'English', level: 'Advanced' },
        { name: 'Spanish', level: 'Basic' }
      ]
    },
    footer: {
      copyright: '© 2026 Matheus Patricio',
      role: 'Software Engineer'
    }
  },
  es: {
    sections: {
      about: 'Sobre',
      projects: 'Proyectos Destacados',
      experience: 'Experiencia Profesional',
      stack: 'Stack Tecnico',
      education: 'Formacion',
      languages: 'Idiomas'
    },
    hero: {
      name: 'Matheus Patricio',
      role: 'Desarrollador Full Stack ',
      nationality: 'Brasileño',
      location: 'Rio de Janeiro, Brasil',
      phone: '+55 (21) 97598-1648',
      email: 'contato.matheuspatricio@gmail.com',
      about: [
        'Desarrollador Full Stack y Arquitecto de Software, enfocado en la construcción de sistemas escalables y orientados a productos.',
        'Trabajo principalmente con Node.js, Bun, Python y TypeScript, participando en la arquitectura de sistemas, diseño, construcción e integración de APIs, modelado de bases de datos y desarrollo frontend. Tengo sólida experiencia con Firebase, PostgreSQL, AWS Cloud, CI/CD (Docker y Kubernetes), aplicando buenas prácticas de rendimiento, seguridad y gobernanza',
        'Fuerte participación en las distintas etapas del desarrollo, desde el entendimiento de los requisitos y el apoyo en la definición de la arquitectura de software hasta la implementación de funcionalidades y pruebas automatizadas.'
      ]
    },
    actions: {
      visitProject: 'Visitar proyecto',
      languageLabel: 'Idioma'
    },
    projects: [
      {
        id: 'project-one',
        title: 'Payform Gestão',
        url: 'https://alunos.payform.com.br/',
        tagline: 'Sistema de Gestión B2C/B2B para el grupo Payform',
        description: 'Sistema de gestión completo desarrollado para unificar operaciones B2C y B2B.',
        bullets: [
          'React | TypeScript | Node | Firebase | Firebase Auth',
          'Desarrollo Full Stack, incluyendo la creación e integración de APIs REST en Node.js con TypeScript.',
          'Optimización de la arquitectura de bases de datos, permitiendo un mejor cruce de información y reduciendo el uso de consultas en un 30%.'
        ]
      },
      {
        id: 'project-two',
        title: 'Mercado Livre y Shopee Libs',
        url: 'https://www.npmjs.com/package/@cristianmpx/mercadolivre-api',
        tagline: 'Bibliotecas JavaScript para las APIs de Mercado Livre y Shopee.',
        description: 'Bibliotecas JavaScript desarrolladas para abstraer APIs complejas de marketplaces, acelerando el desarrollo de ERPs y automatizaciones operativas.',
        bullets: [
          'TypeScript | Node | Adonis | SDK de Mercado Livre | SDK de Shopee',
          'Abstracción de las APIs de Mercado Livre y Shopee mediante una biblioteca JavaScript, reduciendo la complejidad de integración y permitiendo la automatización de procesos operativos.',
          'Aceleración del desarrollo de módulos ERP y automatizaciones, reduciendo significativamente el tiempo de integración con marketplaces.'
        ]
      },
      {
        id: 'project-three',
        title: 'Fast Finance',
        url: 'pronto al aire',
        tagline: 'Herramienta de WhatsApp integrada con un agente de IA para el control financiero e insights basados en objetivos personales.',
        description: 'Fast Finance es tu contacto personal encargado de ayudarte y guiarte para aprovechar mejor tu capacidad financiera.',
        bullets: [
          'N8N | Redis | PostgreSQL | Docker | Bun | TypeScript',
          'Capacidad de generar insights sobre gastos y metas financieras basados en los datos del usuario, crear nuevos planes para alcanzar objetivos, gestionar ingresos y gastos, y enviar recordatorios y alertas.',
          'SaaS en desarrollo.'
        ]
      }
    ],
    experiences: [
      {
        company: 'AS3 Engenharia',
        location: 'Rio de Janeiro, Brasil',
        role: 'Desarrollador Full Stack',
        period: '02/2026 - Presente',
        bullets: [
          'Lidero entregas de alto impacto entre producto e ingenieria.',
          'Mejoro confiabilidad con pruebas, observabilidad y estandares.',
          'Apoyo decisiones de arquitectura con foco en escala y mantenimiento.'
        ]
      },
      {
        company: 'Freelancer',
        location: 'Rio de Janeiro, Brasil',
        role: 'Desarrollador Full Stack',
        period: '01/2025 - 02/2026',
        bullets: [
          'Contribuyó al desarrollo de bibliotecas JavaScript para el consumo de las APIs de Mercado Livre y Shopee.',
          'Desarrolló interfaces centradas en la experiencia del usuario para una aplicación financiera B2C, mejorando significativamente la usabilidad, el rendimiento y la eficiencia operativa mediante soluciones intuitivas y bien estructuradas.',
          'Apoyó el desarrollo e implementación de APIs REST para gateways de pago, posibilitando transacciones financieras para empresas intermediarias de pagos B2C.'
        ]
      }
    ],
    skills: skillsEs,
    education: {
      institution: 'Unopar',
      degree: 'Tecnólogo en Análisis y Desarrollo de Sistemas',
      date: '02/2023 – 08/2025',
      languages: [
        { name: 'Portugues', level: 'Nativo' },
        { name: 'Ingles', level: 'Avanzado' },
        { name: 'Espanol', level: 'Básico' },
      ]
    },
    footer: {
      copyright: '© 2026 Matheus Patricio',
      role: 'Software Engineer'
    }
  }
};

export const normalizeLocale = (value?: string | null): Locale => {
  const lang = (value ?? '').toLowerCase();
  if (lang.startsWith('pt')) return 'pt-BR';
  if (lang.startsWith('es')) return 'es';
  if (lang.startsWith('en')) return 'en';
  return DEFAULT_LOCALE;
};
