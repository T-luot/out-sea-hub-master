import type { Metadata } from 'next'
import { ApiDocumentation } from '@/components/ApiDocumentation'

export const metadata: Metadata = {
  title: 'API Documentation - Out Sea Hub Developer API | Image Generation API',
  description: 'Complete API documentation for Out Sea Hub Developer API. Easy-to-use REST API for AI image generation with transparent pricing and reliable service.',
  keywords: [
    'flux kontext api',
    'ai image generation api', 
    'flux api documentation',
    'developer api',
    'image generation rest api',
    'flux kontext developer',
    'ai api service',
    'image api pricing'
  ],
  alternates: {
    canonical: '/resources/api',
  },
  openGraph: {
    title: 'API Documentation - Out Sea Hub Developer API',
    description: 'Complete API documentation for Out Sea Hub Developer API. Easy-to-use REST API for AI image generation.',
    url: '/resources/api',
    images: [
      {
        url: '/og-api.png',
        width: 1200,
        height: 630,
        alt: 'Out Sea Hub API Documentation',
      },
    ],
  },
}

export default function ApiPage() {
  return <ApiDocumentation />
} 