import type { Metadata } from 'next'
import { HomeContentSimple } from '@/components/HomeContentSimple'
import { getDictionary } from '@/lib/i18n/home-config'

// 德语页面SEO元数据
export const metadata: Metadata = {
  title: 'Out Sea Hub AI - Professionelle KI-Bildgenerierung | Erstelle beeindruckende Bilder',
  description: 'Verwandle deine Ideen in professionelle Bilder mit unserer hochmodernen KI-Technologie. Generiere Bilder aus Text, bearbeite vorhandene Bilder und verarbeite mehrere Bilder mit der Kraft von Out Sea Hub AI.',
  keywords: 'KI Bildgenerierung, Text zu Bild, Bildbearbeitung, Out Sea Hub, künstliche Intelligenz, professionelle Bilder',
  openGraph: {
    title: 'Out Sea Hub AI - Professionelle KI-Bildgenerierung',
    description: 'Verwandle deine Ideen in professionelle Bilder mit unserer hochmodernen KI-Technologie.',
    url: 'https://fluxkontext.space/de',
    siteName: 'Out Sea Hub',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fluxkontext.space/de',
    languages: {
      'en': 'https://fluxkontext.space',
      'de': 'https://fluxkontext.space/de',
      'es': 'https://fluxkontext.space/es',
      'fr': 'https://fluxkontext.space/fr',
      'it': 'https://fluxkontext.space/it',
      'ja': 'https://fluxkontext.space/ja',
      'ko': 'https://fluxkontext.space/ko',
      'nl': 'https://fluxkontext.space/nl',
      'pl': 'https://fluxkontext.space/pl',
      'pt': 'https://fluxkontext.space/pt',
      'ru': 'https://fluxkontext.space/ru',
      'tr': 'https://fluxkontext.space/tr',
      'ar': 'https://fluxkontext.space/ar',
      'hi': 'https://fluxkontext.space/hi',
      'bn': 'https://fluxkontext.space/bn',
      'zh': 'https://fluxkontext.space/zh'
    }
  }
}

// 德语内容字典
const deDictionary = {
  hero: {
    badge: "Professionelle KI-Bildgenerierungsplattform",
    title: "Erstelle beeindruckende Bilder mit",
    name: "Out Sea Hub AI",
    subtitle: "",
    description: "Verwandle deine Ideen in professionelle Bilder mit unserer hochmodernen KI-Technologie. Generiere Bilder aus Text, bearbeite vorhandene Bilder und verarbeite mehrere Bilder mit der Kraft von Out Sea Hub AI.",
    cta: {
      primary: "Jetzt erstellen",
      secondary: "Preise ansehen"
    }
  },
  features: {
    title: "Hauptfunktionen der Out Sea Hub AI Plattform",
    subtitle: "Unsere Out Sea Hub AI kombiniert modernste Technologie, um professionelle Bildgenerierung und -bearbeitung in einer nahtlosen Plattform zu liefern.",
    items: [
      {
        title: "Text-zu-Bild-Generierung",
        description: "Verwandle deine Textbeschreibungen in atemberaubende, hochwertige Bilder mit fortschrittlicher KI-Technologie."
      },
      {
        title: "Professionelle Bildbearbeitung",
        description: "Bearbeite vorhandene Bilder mit natürlichsprachlichen Anweisungen für präzise Änderungen."
      },
      {
        title: "Multi-Bild-Verarbeitung",
        description: "Verarbeite mehrere Bilder gleichzeitig mit konsistentem Stil und Qualität."
      }
    ]
  },
  faq: {
    title: "Häufig gestellte Fragen",
    subtitle: "Finde Antworten auf häufige Fragen zu unserer Out Sea Hub AI Plattform und ihren leistungsstarken Bildgenerierungsfunktionen.",
    items: [
      {
        question: "Was ist Out Sea Hub AI?",
        answer: "Out Sea Hub AI ist eine fortschrittliche Bildgenerierungsplattform, die modernste künstliche Intelligenz nutzt, um atemberaubende Bilder aus Textbeschreibungen zu erstellen, vorhandene Bilder zu bearbeiten und mehrere Bilder gleichzeitig zu verarbeiten."
      },
      {
        question: "Wie funktioniert die Text-zu-Bild-Generierung?",
        answer: "Unsere KI analysiert deine Textbeschreibung und generiert hochwertige Bilder mit fortschrittlichen Flux Pro und Max Modellen. Beschreibe einfach, was du sehen möchtest, und unsere KI erstellt professionelle Bilder in Sekunden."
      }
    ]
  },
  cta: {
    title: "Bereit, erstaunliche Bilder zu erstellen?",
    subtitle: "Schließe dich Tausenden von Kreativen an, die Out Sea Hub AI nutzen, um ihre Ideen zum Leben zu erwecken.",
    button: "Jetzt loslegen"
  },
  footer: {
    brand: {
      name: "Out Sea Hub",
      description: "Professionelle KI-Bildgenerierungsplattform. Erstelle atemberaubende Bilder aus Text, bearbeite vorhandene Bilder und verarbeite mehrere Bilder mit fortschrittlicher KI-Technologie.",
      copyright: "© 2025 Out Sea Hub. Alle Rechte vorbehalten."
    },
    contact: {
      title: "Kontakt",
      email: "luotao962@gmail.com"
    },
    legal: {
      title: "Rechtliches",
      terms: "Nutzungsbedingungen",
      privacy: "Datenschutzrichtlinie",
      refund: "Rückerstattungsrichtlinie"
    },
    languages: {
      title: "Sprachen"
    },
    social: {
      builtWith: "Mit ❤️ für Kreative weltweit entwickelt",
      followUs: "Folge uns auf"
    }
  }
}

export default function DeutschPage() {
  return <HomeContentSimple dictionary={deDictionary} />
} 