import type { Metadata } from 'next'
import { HomeContentSimple } from '@/components/HomeContentSimple'

export const metadata: Metadata = {
  title: 'Out Sea Hub AI - Generazione Professionale di Immagini IA | Crea Immagini Straordinarie',
  description: 'Trasforma le tue idee in immagini professionali con la nostra tecnologia IA all\'avanguardia. Genera immagini dal testo, modifica immagini esistenti e elabora più immagini con la potenza di Out Sea Hub AI.',
  openGraph: {
    title: 'Out Sea Hub AI - Generazione Professionale di Immagini IA',
    description: 'Trasforma le tue idee in immagini professionali con la nostra tecnologia IA all\'avanguardia.',
    url: 'https://outseahub.com/it',
    locale: 'it_IT',
    type: 'website',
  }
}

const itDictionary = {
  hero: {
    badge: "Piattaforma Professionale di Generazione Immagini IA",
    title: "Crea Immagini Straordinarie con",
    name: "Out Sea Hub AI",
    subtitle: "",
    description: "Trasforma le tue idee in immagini professionali con la nostra tecnologia IA all'avanguardia. Genera immagini dal testo, modifica immagini esistenti e elabora più immagini con la potenza di Out Sea Hub AI.",
    cta: {
      primary: "Inizia a Creare",
      secondary: "Vedi Prezzi"
    }
  },
  features: {
    title: "Caratteristiche Principali della Piattaforma Out Sea Hub AI",
    subtitle: "La nostra Out Sea Hub AI combina tecnologia all'avanguardia per offrire generazione e modifica di immagini professionali in una piattaforma senza soluzione di continuità.",
    items: [
      {
        title: "Generazione Testo-Immagine",
        description: "Trasforma le tue descrizioni testuali in immagini straordinarie e di alta qualità con tecnologia IA avanzata."
      },
      {
        title: "Modifica Professionale di Immagini",
        description: "Modifica immagini esistenti con istruzioni in linguaggio naturale per modifiche precise."
      },
      {
        title: "Elaborazione Multi-Immagine",
        description: "Elabora più immagini simultaneamente con stile e qualità coerenti."
      }
    ]
  },
  faq: {
    title: "Domande Frequenti",
    subtitle: "Trova risposte alle domande comuni sulla nostra piattaforma Out Sea Hub AI e le sue potenti funzionalità di generazione immagini.",
    items: [
      {
        question: "Cos'è Out Sea Hub AI?",
        answer: "Out Sea Hub AI è una piattaforma avanzata di generazione immagini che utilizza intelligenza artificiale all'avanguardia per creare immagini straordinarie da descrizioni testuali, modificare immagini esistenti ed elaborare più immagini simultaneamente."
      }
    ]
  },
  cta: {
    title: "Pronto a Creare Immagini Incredibili?",
    subtitle: "Unisciti a migliaia di creatori che usano Out Sea Hub AI per dare vita alle loro idee.",
    button: "Inizia Ora"
  },
  footer: {
    brand: {
      name: "Out Sea Hub",
      description: "Piattaforma professionale di generazione immagini IA.",
      copyright: "© 2025 Out Sea Hub. Tutti i diritti riservati."
    },
    contact: {
      title: "Contatto",
      email: "luotao962@gmail.com"
    },
    legal: {
      title: "Legale",
      terms: "Termini di Servizio",
      privacy: "Politica sulla Privacy",
      refund: "Politica di Rimborso"
    },
    languages: {
      title: "Lingue"
    },
    social: {
      builtWith: "Costruito con ❤️ per creatori in tutto il mondo",
      followUs: "Seguici su"
    }
  }
}

export default function ItalianoPage() {
  return <HomeContentSimple dictionary={itDictionary} />
} 