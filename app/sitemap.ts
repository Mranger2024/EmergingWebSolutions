
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://emergingwebsolutions.in'

    const routes = [
        '',
        '/services',
        '/portfolio',
        '/process',
        '/about',
        '/why-us',
        '/affiliate',
        '/contact',
        '/privacy',
        '/terms',
        '/refund'
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' || route === '/services' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
