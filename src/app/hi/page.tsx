import type { Metadata } from 'next'
import { HomeContentSimple } from '@/components/HomeContentSimple'

export const metadata: Metadata = {
  title: 'Out Sea Hub AI - पेशेवर AI इमेज जेनरेशन प्लेटफॉर्म | शानदार इमेज बनाएं',
  description: 'हमारी अत्याधुनिक AI तकनीक के साथ अपने विचारों को पेशेवर इमेज में बदलें। टेक्स्ट से इमेज जेनरेट करें, मौजूदा इमेज को एडिट करें, और Out Sea Hub AI की शक्ति के साथ कई इमेज को प्रोसेस करें।',
  openGraph: {
    title: 'Out Sea Hub AI - पेशेवर AI इमेज जेनरेशन प्लेटफॉर्म',
    url: 'https://www.outseahub.com/hi',
    locale: 'hi_IN',
    type: 'website',
  }
}

const hiDictionary = {
  hero: {
    badge: "पेशेवर AI इमेज जेनरेशन प्लेटफॉर्म",
    title: "शानदार इमेज बनाएं",
    name: "Out Sea Hub AI",
    subtitle: "",
    description: "हमारी अत्याधुनिक AI तकनीक के साथ अपने विचारों को पेशेवर इमेज में बदलें। टेक्स्ट से इमेज जेनरेट करें, मौजूदा इमेज को एडिट करें, और Out Sea Hub AI की शक्ति के साथ कई इमेज को प्रोसेस करें।",
    cta: {
      primary: "बनाना शुरू करें",
      secondary: "कीमत देखें"
    }
  },
  features: {
    title: "Out Sea Hub AI प्लेटफॉर्म की मुख्य विशेषताएं",
    subtitle: "हमारा Out Sea Hub AI एक सहज प्लेटफॉर्म में पेशेवर इमेज जेनरेशन और एडिटिंग प्रदान करने के लिए अत्याधुनिक तकनीक को जोड़ता है।",
    items: [
      {
        title: "टेक्स्ट से इमेज जेनरेशन",
        description: "उन्नत AI तकनीक के साथ अपने टेक्स्ट विवरण को शानदार, उच्च गुणवत्ता वाली इमेज में बदलें।"
      },
      {
        title: "पेशेवर इमेज एडिटिंग",
        description: "सटीक संशोधन के लिए प्राकृतिक भाषा निर्देशों के साथ मौजूदा इमेज को एडिट करें।"
      },
      {
        title: "मल्टी-इमेज प्रोसेसिंग",
        description: "लगातार स्टाइल और गुणवत्ता के साथ एक साथ कई इमेज को प्रोसेस करें।"
      }
    ]
  },
  faq: {
    title: "अक्सर पूछे जाने वाले प्रश्न",
    subtitle: "हमारे Out Sea Hub AI प्लेटफॉर्म और इसकी शक्तिशाली इमेज जेनरेशन सुविधाओं के बारे में सामान्य प्रश्नों के उत्तर खोजें।",
    items: [
      {
        question: "Out Sea Hub AI क्या है?",
        answer: "Out Sea Hub AI एक उन्नत इमेज जेनरेशन प्लेटफॉर्म है जो टेक्स्ट विवरण से शानदार इमेज बनाने, मौजूदा इमेज को एडिट करने, और एक साथ कई इमेज को प्रोसेस करने के लिए अत्याधुनिक कृत्रिम बुद्धिमत्ता का उपयोग करता है।"
      }
    ]
  },
  cta: {
    title: "अद्भुत इमेज बनाने के लिए तैयार हैं?",
    subtitle: "हजारों रचनाकारों के साथ जुड़ें जो अपने विचारों को जीवंत करने के लिए Out Sea Hub AI का उपयोग करते हैं।",
    button: "अभी शुरू करें"
  },
  footer: {
    brand: {
      name: "Out Sea Hub",
      description: "पेशेवर AI इमेज जेनरेशन प्लेटफॉर्म।",
      copyright: "© 2025 Out Sea Hub. सभी अधिकार सुरक्षित।"
    },
    contact: {
      title: "संपर्क",
      email: "luotao962@gmail.com"
    },
    legal: {
      title: "कानूनी",
      terms: "सेवा की शर्तें",
      privacy: "गोपनीयता नीति",
      refund: "रिफंड नीति"
    },
    languages: {
      title: "भाषाएं"
    },
    social: {
      builtWith: "दुनिया भर के रचनाकारों के लिए ❤️ के साथ बनाया गया",
      followUs: "हमें फॉलो करें"
    }
  }
}

export default function HindiPage() {
  return <HomeContentSimple dictionary={hiDictionary} />
} 