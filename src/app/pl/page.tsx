import type { Metadata } from 'next'
import { HomeContentSimple } from '@/components/HomeContentSimple'

export const metadata: Metadata = {
  title: 'Out Sea Hub AI - Profesjonalna Platforma Generowania Obrazów AI | Twórz Oszałamiające Obrazy',
  description: 'Przekształć swoje pomysły w profesjonalne obrazy dzięki naszej najnowocześniejszej technologii AI. Generuj obrazy z tekstu, edytuj istniejące obrazy i przetwarzaj wiele obrazów z mocą Out Sea Hub AI.',
  openGraph: {
    title: 'Out Sea Hub AI - Profesjonalna Platforma Generowania Obrazów AI',
    url: 'https://fluxkontext.space/pl',
    locale: 'pl_PL',
    type: 'website',
  }
}

const plDictionary = {
  hero: {
    badge: "Profesjonalna Platforma Generowania Obrazów AI",
    title: "Twórz Oszałamiające Obrazy z",
    subtitle: "Out Sea Hub AI",
    description: "Przekształć swoje pomysły w profesjonalne obrazy dzięki naszej najnowocześniejszej technologii AI. Generuj obrazy z tekstu, edytuj istniejące obrazy i przetwarzaj wiele obrazów z mocą Out Sea Hub AI.",
    cta: {
      primary: "Zacznij Tworzyć",
      secondary: "Zobacz Ceny"
    }
  },
  features: {
    title: "Główne Funkcje Platformy Out Sea Hub AI",
    subtitle: "Nasza Out Sea Hub AI łączy najnowocześniejszą technologię, aby dostarczyć profesjonalne generowanie i edycję obrazów w jednej płynnej platformie.",
    items: [
      {
        title: "Generowanie Tekst-Obraz",
        description: "Przekształć swoje opisy tekstowe w oszałamiające, wysokiej jakości obrazy dzięki zaawansowanej technologii AI."
      },
      {
        title: "Profesjonalna Edycja Obrazów",
        description: "Edytuj istniejące obrazy za pomocą instrukcji w języku naturalnym dla precyzyjnych modyfikacji."
      },
      {
        title: "Przetwarzanie Wielu Obrazów",
        description: "Przetwarzaj wiele obrazów jednocześnie z konsekwentnym stylem i jakością."
      }
    ]
  },
  faq: {
    title: "Często Zadawane Pytania",
    subtitle: "Znajdź odpowiedzi na często zadawane pytania dotyczące naszej platformy Out Sea Hub AI i jej potężnych funkcji generowania obrazów.",
    items: [
      {
        question: "Czym jest Out Sea Hub AI?",
        answer: "Out Sea Hub AI to zaawansowana platforma generowania obrazów, która wykorzystuje najnowocześniejszą sztuczną inteligencję do tworzenia oszałamiających obrazów z opisów tekstowych, edycji istniejących obrazów i przetwarzania wielu obrazów jednocześnie."
      }
    ]
  },
  cta: {
    title: "Gotowy na Tworzenie Niesamowitych Obrazów?",
    subtitle: "Dołącz do tysięcy twórców, którzy używają Out Sea Hub AI, aby ożywić swoje pomysły.",
    button: "Zacznij Teraz"
  },
  footer: {
    brand: {
      name: "Out Sea Hub",
      description: "Profesjonalna platforma generowania obrazów AI.",
      copyright: "© 2025 Out Sea Hub. Wszelkie prawa zastrzeżone."
    },
    contact: {
      title: "Kontakt",
      email: "luotao962@gmail.com"
    },
    legal: {
      title: "Prawne",
      terms: "Warunki Usługi",
      privacy: "Polityka Prywatności",
      refund: "Polityka Zwrotów"
    },
    languages: {
      title: "Języki"
    },
    social: {
      builtWith: "Zbudowane z ❤️ dla twórców na całym świecie",
      followUs: "Śledź nas na"
    }
  }
}

export default function PolishPage() {
  return <HomeContentSimple dictionary={plDictionary} />
} 