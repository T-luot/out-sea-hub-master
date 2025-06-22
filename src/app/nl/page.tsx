import type { Metadata } from 'next'
import { HomeContentSimple } from '@/components/HomeContentSimple'

export const metadata: Metadata = {
  title: 'Out Sea Hub AI - Professioneel AI Beeldgeneratie Platform | Maak Verbluffende Beelden',
  description: 'Transformeer je ideeën in professionele beelden met onze geavanceerde AI-technologie. Genereer beelden uit tekst, bewerk bestaande beelden en verwerk meerdere beelden met de kracht van Out Sea Hub AI.',
  openGraph: {
    title: 'Out Sea Hub AI - Professioneel AI Beeldgeneratie Platform',
    url: 'https://fluxkontext.space/nl',
    locale: 'nl_NL',
    type: 'website',
  }
}

const nlDictionary = {
  hero: {
    badge: "Professioneel AI Beeldgeneratie Platform",
    title: "Maak Verbluffende Beelden met",
    subtitle: "Out Sea Hub AI",
    description: "Transformeer je ideeën in professionele beelden met onze geavanceerde AI-technologie. Genereer beelden uit tekst, bewerk bestaande beelden en verwerk meerdere beelden met de kracht van Out Sea Hub AI.",
    cta: {
      primary: "Begin met Maken",
      secondary: "Bekijk Prijzen"
    }
  },
  features: {
    title: "Hoofdkenmerken van het Out Sea Hub AI Platform",
    subtitle: "Onze Out Sea Hub AI combineert geavanceerde technologie om professionele beeldgeneratie en -bewerking te leveren in één naadloos platform.",
    items: [
      {
        title: "Tekst naar Beeld Generatie",
        description: "Transformeer je tekstbeschrijvingen in verbluffende, hoogwaardige beelden met geavanceerde AI-technologie."
      },
      {
        title: "Professionele Beeldbewerking",
        description: "Bewerk bestaande beelden met natuurlijke taalinstructies voor precieze wijzigingen."
      },
      {
        title: "Multi-Beeld Verwerking",
        description: "Verwerk meerdere beelden tegelijkertijd met consistente stijl en kwaliteit."
      }
    ]
  },
  faq: {
    title: "Veelgestelde Vragen",
    subtitle: "Vind antwoorden op veelgestelde vragen over ons Out Sea Hub AI platform en zijn krachtige beeldgeneratie functies.",
    items: [
      {
        question: "Wat is Out Sea Hub AI?",
        answer: "Out Sea Hub AI is een geavanceerd beeldgeneratie platform dat geavanceerde kunstmatige intelligentie gebruikt om verbluffende beelden te maken uit tekstbeschrijvingen, bestaande beelden te bewerken en meerdere beelden tegelijkertijd te verwerken."
      }
    ]
  },
  cta: {
    title: "Klaar om Geweldige Beelden te Maken?",
    subtitle: "Sluit je aan bij duizenden makers die Out Sea Hub AI gebruiken om hun ideeën tot leven te brengen.",
    button: "Begin Nu"
  },
  footer: {
    brand: {
      name: "Out Sea Hub",
      description: "Professioneel AI beeldgeneratie platform.",
      copyright: "© 2025 Out Sea Hub. Alle rechten voorbehouden."
    },
    contact: {
      title: "Contact",
      email: "luotao962@gmail.com"
    },
    legal: {
      title: "Juridisch",
      terms: "Servicevoorwaarden",
      privacy: "Privacybeleid",
      refund: "Terugbetalingsbeleid"
    },
    languages: {
      title: "Talen"
    },
    social: {
      builtWith: "Gebouwd met ❤️ voor makers wereldwijd",
      followUs: "Volg ons op"
    }
  }
}

export default function NederlandsPage() {
  return <HomeContentSimple dictionary={nlDictionary} />
} 