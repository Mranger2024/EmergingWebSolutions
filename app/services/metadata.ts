// This file provides metadata for /services while the main page.tsx is a Client Component.
// Next.js will pick this up automatically for the route.
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Web Design Packages & Pricing | ₹9,999 / $149 | Emerging Web Solutions',
    description:
        'Affordable, all-inclusive web design packages serving clients worldwide. Choose from Essential (₹9,999 / $149) or Starter Growth (₹14,999 / $199). Includes domain, hosting, and SEO.',
    openGraph: {
        title: 'Professional Web Design Packages | Emerging Web Solutions',
        description:
            'All-inclusive web design starting at $149 USD. No upfront payment. We build it, you approve it, then you pay.',
        images: ['/og/services-og.png'],
    },
    twitter: {
        card: 'summary_large_image',
        images: ['/og/services-og.png'],
    }
}
