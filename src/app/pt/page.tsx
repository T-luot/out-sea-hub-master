import type { Metadata } from 'next'
import { HomeContentSimple } from '@/components/HomeContentSimple'

export const metadata: Metadata = {
  title: 'Out Sea Hub AI - Plataforma Profissional de Geração de Imagens IA | Crie Imagens Deslumbrantes',
  description: 'Transforme suas ideias em imagens profissionais com nossa tecnologia de IA de ponta. Gere imagens a partir de texto, edite imagens existentes e processe múltiplas imagens com o poder do Out Sea Hub AI.',
  openGraph: {
    title: 'Out Sea Hub AI - Plataforma Profissional de Geração de Imagens IA',
    url: 'https://fluxkontext.space/pt',
    locale: 'pt_PT',
    type: 'website',
  }
}

const ptDictionary = {
  hero: {
    badge: "Plataforma Profissional de Geração de Imagens IA",
    title: "Crie Imagens Deslumbrantes com",
    subtitle: "Out Sea Hub AI",
    description: "Transforme suas ideias em imagens profissionais com nossa tecnologia de IA de ponta. Gere imagens a partir de texto, edite imagens existentes e processe múltiplas imagens com o poder do Out Sea Hub AI.",
    cta: {
      primary: "Começar a Criar",
      secondary: "Ver Preços"
    }
  },
  features: {
    title: "Principais Recursos da Plataforma Out Sea Hub AI",
    subtitle: "Nossa Out Sea Hub AI combina tecnologia de ponta para entregar geração e edição de imagens profissionais em uma plataforma perfeita.",
    items: [
      {
        title: "Geração Texto-Imagem",
        description: "Transforme suas descrições de texto em imagens deslumbrantes e de alta qualidade com tecnologia de IA avançada."
      },
      {
        title: "Edição Profissional de Imagens",
        description: "Edite imagens existentes com instruções em linguagem natural para modificações precisas."
      },
      {
        title: "Processamento Multi-Imagem",
        description: "Processe múltiplas imagens simultaneamente com estilo e qualidade consistentes."
      }
    ]
  },
  faq: {
    title: "Perguntas Frequentes",
    subtitle: "Encontre respostas para perguntas comuns sobre nossa plataforma Out Sea Hub AI e seus poderosos recursos de geração de imagens.",
    items: [
      {
        question: "O que é Out Sea Hub AI?",
        answer: "Out Sea Hub AI é uma plataforma avançada de geração de imagens que usa inteligência artificial de ponta para criar imagens deslumbrantes a partir de descrições de texto, editar imagens existentes e processar múltiplas imagens simultaneamente."
      }
    ]
  },
  cta: {
    title: "Pronto para Criar Imagens Incríveis?",
    subtitle: "Junte-se a milhares de criadores que usam Out Sea Hub AI para dar vida às suas ideias.",
    button: "Começar Agora"
  },
  footer: {
    brand: {
      name: "Out Sea Hub",
      description: "Plataforma profissional de geração de imagens IA.",
      copyright: "© 2025 Out Sea Hub. Todos os direitos reservados."
    },
    contact: {
      title: "Contato",
      email: "luotao962@gmail.com"
    },
    legal: {
      title: "Legal",
      terms: "Termos de Serviço",
      privacy: "Política de Privacidade",
      refund: "Política de Reembolso"
    },
    languages: {
      title: "Idiomas"
    },
    social: {
      builtWith: "Construído com ❤️ para criadores em todo o mundo",
      followUs: "Siga-nos em"
    }
  }
}

export default function PortuguesePage() {
  return <HomeContentSimple dictionary={ptDictionary} />
} 