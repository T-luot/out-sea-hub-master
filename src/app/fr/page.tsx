import type { Metadata } from 'next'
import { HomeContentSimple } from '@/components/HomeContentSimple'

export const metadata: Metadata = {
  title: 'Out Sea Hub AI - Génération Professionnelle d\'Images IA | Créez des Images Époustouflantes',
  description: 'Transformez vos idées en images professionnelles avec notre technologie IA de pointe. Générez des images à partir de texte, éditez des images existantes et traitez plusieurs images avec la puissance de Out Sea Hub AI.',
  keywords: 'génération d\'images IA, texte vers image, édition d\'images, Out Sea Hub, intelligence artificielle, images professionnelles',
  openGraph: {
    title: 'Out Sea Hub AI - Génération Professionnelle d\'Images IA',
    description: 'Transformez vos idées en images professionnelles avec notre technologie IA de pointe.',
    url: 'https://outseahub.com/fr',
    siteName: 'Out Sea Hub',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://outseahub.com/fr'
  }
}

const frDictionary = {
  hero: {
    badge: "Plateforme Professionnelle de Génération d'Images IA",
    title: "Créez des Images Époustouflantes avec",
    name: "Out Sea Hub AI",
    subtitle: "",
    description: "Transformez vos idées en images professionnelles avec notre technologie IA de pointe. Générez des images à partir de texte, éditez des images existantes et traitez plusieurs images avec la puissance de Out Sea Hub AI.",
    cta: {
      primary: "Commencer à Créer",
      secondary: "Voir les Prix"
    }
  },
  features: {
    title: "Fonctionnalités Principales de la Plateforme Out Sea Hub AI",
    subtitle: "Notre Out Sea Hub AI combine une technologie de pointe pour offrir une génération et une édition d'images professionnelles dans une plateforme transparente.",
    items: [
      {
        title: "Génération Texte vers Image",
        description: "Transformez vos descriptions textuelles en images époustouflantes et de haute qualité avec une technologie IA avancée."
      },
      {
        title: "Édition Professionnelle d'Images",
        description: "Éditez des images existantes avec des instructions en langage naturel pour des modifications précises."
      },
      {
        title: "Traitement Multi-Images",
        description: "Traitez plusieurs images simultanément avec un style et une qualité cohérents."
      }
    ]
  },
  faq: {
    title: "Questions Fréquemment Posées",
    subtitle: "Trouvez des réponses aux questions courantes sur notre plateforme Out Sea Hub AI et ses puissantes fonctionnalités de génération d'images.",
    items: [
      {
        question: "Qu'est-ce que Out Sea Hub AI ?",
        answer: "Out Sea Hub AI est une plateforme avancée de génération d'images qui utilise l'intelligence artificielle de pointe pour créer des images époustouflantes à partir de descriptions textuelles, éditer des images existantes et traiter plusieurs images simultanément."
      },
      {
        question: "Comment fonctionne la génération texte vers image ?",
        answer: "Notre IA analyse votre description textuelle et génère des images de haute qualité en utilisant des modèles avancés Flux Pro et Max. Décrivez simplement ce que vous voulez voir, et notre IA crée des images de qualité professionnelle en quelques secondes."
      }
    ]
  },
  cta: {
    title: "Prêt à Créer des Images Incroyables ?",
    subtitle: "Rejoignez des milliers de créateurs qui utilisent Out Sea Hub AI pour donner vie à leurs idées.",
    button: "Commencer Maintenant"
  },
  footer: {
    brand: {
      name: "Out Sea Hub",
      description: "Plateforme professionnelle de génération d'images IA. Créez des images époustouflantes à partir de texte, éditez des images existantes et traitez plusieurs images avec une technologie IA avancée.",
      copyright: "© 2025 Out Sea Hub. Tous droits réservés."
    },
    contact: {
      title: "Contact",
      email: "luotao962@gmail.com"
    },
    legal: {
      title: "Légal",
      terms: "Conditions de Service",
      privacy: "Politique de Confidentialité",
      refund: "Politique de Remboursement"
    },
    languages: {
      title: "Langues"
    },
    social: {
      builtWith: "Construit avec ❤️ pour les créateurs du monde entier",
      followUs: "Suivez-nous sur"
    }
  }
}

export default function FrancaisPage() {
  return <HomeContentSimple dictionary={frDictionary} />
} 