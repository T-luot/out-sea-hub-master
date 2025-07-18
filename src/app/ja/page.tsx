import type { Metadata } from 'next'
import { HomeContentSimple } from '@/components/HomeContentSimple'

export const metadata: Metadata = {
  title: 'Out Sea Hub AI - プロフェッショナルAI画像生成プラットフォーム | 素晴らしい画像を作成',
  description: '最先端のAI技術でアイデアをプロフェッショナルな画像に変換します。テキストから画像を生成し、既存の画像を編集し、Out Sea Hub AIの力で複数の画像を処理します。',
  openGraph: {
    title: 'Out Sea Hub AI - プロフェッショナルAI画像生成プラットフォーム',
    description: '最先端のAI技術でアイデアをプロフェッショナルな画像に変換します。',
    url: 'https://www.outseahub.com/ja',
    locale: 'ja_JP',
    type: 'website',
  }
}

const jaDictionary = {
  hero: {
    badge: "プロフェッショナルAI画像生成プラットフォーム",
    title: "素晴らしい画像を作成",
    name: "Out Sea Hub AI",
    subtitle: "",
    description: "最先端のAI技術でアイデアをプロフェッショナルな画像に変換します。テキストから画像を生成し、既存の画像を編集し、Out Sea Hub AIの力で複数の画像を処理します。",
    cta: {
      primary: "作成を開始",
      secondary: "価格を見る"
    }
  },
  features: {
    title: "Out Sea Hub AIプラットフォームの主要機能",
    subtitle: "私たちのOut Sea Hub AIは最先端技術を組み合わせ、シームレスなプラットフォームでプロフェッショナルな画像生成と編集を提供します。",
    items: [
      {
        title: "テキストから画像生成",
        description: "高度なAI技術でテキスト説明を素晴らしい高品質画像に変換します。"
      },
      {
        title: "プロフェッショナル画像編集",
        description: "自然言語指示で既存画像を編集し、精密な修正を行います。"
      },
      {
        title: "マルチ画像処理",
        description: "一貫したスタイルと品質で複数の画像を同時に処理します。"
      }
    ]
  },
  faq: {
    title: "よくある質問",
    subtitle: "Out Sea Hub AIプラットフォームとその強力な画像生成機能に関するよくある質問の回答を見つけてください。",
    items: [
      {
        question: "Out Sea Hub AIとは何ですか？",
        answer: "Out Sea Hub AIは、最先端の人工知能を使用してテキスト説明から素晴らしい画像を作成し、既存の画像を編集し、複数の画像を同時に処理する高度な画像生成プラットフォームです。"
      }
    ]
  },
  cta: {
    title: "素晴らしい画像を作成する準備はできましたか？",
    subtitle: "Out Sea Hub AIを使ってアイデアを実現している何千ものクリエイターに参加しましょう。",
    button: "今すぐ始める"
  },
  footer: {
    brand: {
      name: "Out Sea Hub",
      description: "プロフェッショナルAI画像生成プラットフォーム。",
      copyright: "© 2025 Out Sea Hub. 全著作権所有。"
    },
    contact: {
      title: "お問い合わせ",
      email: "luotao962@gmail.com"
    },
    legal: {
      title: "法的事項",
      terms: "利用規約",
      privacy: "プライバシーポリシー",
      refund: "返金ポリシー"
    },
    languages: {
      title: "言語"
    },
    social: {
      builtWith: "世界中のクリエイターのために❤️で構築",
      followUs: "フォローする"
    }
  }
}

export default function JapanesePage() {
  return <HomeContentSimple dictionary={jaDictionary} />
} 