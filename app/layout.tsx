import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'NEXUS Global - Enterprise Solutions for the Future',
  description: 'Leading provider of Fintech, Maritime, and Technology solutions for Fortune 500 companies. Transform your business with our enterprise-grade infrastructure.',
  keywords: [
    'Fintech Solutions',
    'Maritime Technology',
    'Enterprise Cloud',
    'Digital Transformation',
    'Payment Infrastructure',
    'Port Management Systems',
    'Cybersecurity',
    'AI & Machine Learning',
    'Business Intelligence',
    'Global Enterprise'
  ],
  authors: [{ name: 'NEXUS Global Solutions' }],
  creator: 'NEXUS Global',
  publisher: 'NEXUS Global',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'es_ES'],
    url: 'https://nexus-global.com',
    title: 'NEXUS Global - Enterprise Solutions for the Future',
    description: 'Trusted by 500+ Fortune companies to deliver innovation at scale across Fintech, Maritime, and Technology sectors.',
    siteName: 'NEXUS Global',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NEXUS Global - Transforming Enterprise Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXUS Global - Enterprise Solutions',
    description: 'Leading provider of Fintech, Maritime, and Technology solutions',
    creator: '@nexusglobal',
    images: ['/twitter-image.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://nexus-global.com',
    languages: {
      'en-US': 'https://nexus-global.com/en',
      'fr-FR': 'https://nexus-global.com/fr',
      'es-ES': 'https://nexus-global.com/es',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
