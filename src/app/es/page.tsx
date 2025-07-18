import type { Metadata } from 'next'
import { HomeContentSimple } from '@/components/HomeContentSimple'

// 西班牙语页面SEO元数据
export const metadata: Metadata = {
  title: 'Out Sea Hub AI - Generación Profesional de Imágenes IA | Crea Imágenes Impresionantes',
  description: 'Transforma tus ideas en imágenes profesionales con nuestra tecnología de IA de vanguardia. Genera imágenes desde texto, edita imágenes existentes y procesa múltiples imágenes con el poder de Out Sea Hub AI.',
  keywords: 'generación de imágenes IA, texto a imagen, edición de imágenes, Out Sea Hub, inteligencia artificial, imágenes profesionales',
  openGraph: {
    title: 'Out Sea Hub AI - Generación Profesional de Imágenes IA',
    description: 'Transforma tus ideas en imágenes profesionales con nuestra tecnología de IA de vanguardia.',
    url: 'https://www.outseahub.com/es',
    siteName: 'Out Sea Hub',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.outseahub.com/es',
    languages: {
      'en': 'https://www.outseahub.com',
      'de': 'https://www.outseahub.com/de',
      'es': 'https://www.outseahub.com/es',
      'fr': 'https://www.outseahub.com/fr',
      'it': 'https://www.outseahub.com/it',
      'ja': 'https://www.outseahub.com/ja',
      'ko': 'https://www.outseahub.com/ko',
      'nl': 'https://www.outseahub.com/nl',
      'pl': 'https://www.outseahub.com/pl',
      'pt': 'https://www.outseahub.com/pt',
      'ru': 'https://www.outseahub.com/ru',
      'tr': 'https://www.outseahub.com/tr',
      'ar': 'https://www.outseahub.com/ar',
      'hi': 'https://www.outseahub.com/hi',
      'bn': 'https://www.outseahub.com/bn',
      'zh': 'https://www.outseahub.com/zh'
    }
  }
}

// 西班牙语内容字典
const esDictionary = {
  hero: {
    badge: "Plataforma Profesional de Generación de Imágenes IA",
    title: "Crea Imágenes Impresionantes con",
    name: "Out Sea Hub AI",
    subtitle: "",
    description: "Transforma tus ideas en imágenes profesionales con nuestra tecnología de IA de vanguardia. Genera imágenes desde texto, edita imágenes existentes y procesa múltiples imágenes con el poder de Out Sea Hub AI.",
    cta: {
      primary: "Comenzar a Crear",
      secondary: "Ver Precios"
    }
  },
  features: {
    title: "Características Principales de la Plataforma Out Sea Hub AI",
    subtitle: "Nuestra Out Sea Hub AI combina tecnología de vanguardia para ofrecer generación y edición de imágenes profesionales en una plataforma perfecta.",
    items: [
      {
        title: "Generación de Texto a Imagen",
        description: "Transforma tus descripciones de texto en imágenes impresionantes y de alta calidad con tecnología de IA avanzada."
      },
      {
        title: "Edición Profesional de Imágenes",
        description: "Edita imágenes existentes con instrucciones en lenguaje natural para modificaciones precisas."
      },
      {
        title: "Procesamiento Multi-Imagen",
        description: "Procesa múltiples imágenes simultáneamente con estilo y calidad consistentes."
      }
    ]
  },
  faq: {
    title: "Preguntas Frecuentes",
    subtitle: "Encuentra respuestas a preguntas comunes sobre nuestra plataforma Out Sea Hub AI y sus potentes características de generación de imágenes.",
    items: [
      {
        question: "¿Qué es Out Sea Hub AI?",
        answer: "Out Sea Hub AI es una plataforma avanzada de generación de imágenes que utiliza inteligencia artificial de vanguardia para crear imágenes impresionantes desde descripciones de texto, editar imágenes existentes y procesar múltiples imágenes simultáneamente."
      },
      {
        question: "¿Cómo funciona la generación de texto a imagen?",
        answer: "Nuestra IA analiza tu descripción de texto y genera imágenes de alta calidad usando modelos avanzados Flux Pro y Max. Simplemente describe lo que quieres ver, y nuestra IA crea imágenes de calidad profesional en segundos."
      }
    ]
  },
  cta: {
    title: "¿Listo para Crear Imágenes Increíbles?",
    subtitle: "Únete a miles de creadores que usan Out Sea Hub AI para dar vida a sus ideas.",
    button: "Empezar Ahora"
  },
  footer: {
    brand: {
      name: "Out Sea Hub",
      description: "Plataforma profesional de generación de imágenes IA. Crea imágenes impresionantes desde texto, edita imágenes existentes y procesa múltiples imágenes con tecnología de IA avanzada.",
      copyright: "© 2025 Out Sea Hub. Todos los derechos reservados."
    },
    contact: {
      title: "Contacto",
      email: "luotao962@gmail.com"
    },
    legal: {
      title: "Legal",
      terms: "Términos de Servicio",
      privacy: "Política de Privacidad",
      refund: "Política de Reembolso"
    },
    languages: {
      title: "Idiomas"
    },
    social: {
      builtWith: "Construido con ❤️ para creadores de todo el mundo",
      followUs: "Síguenos en"
    }
  }
}

export default function EspanolPage() {
  return <HomeContentSimple dictionary={esDictionary} />
} 