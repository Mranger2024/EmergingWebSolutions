
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/private/', '/api/'],
            },
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-Web', 'CCBot', 'PerplexityBot'],
                allow: '/',
            }
        ],
        sitemap: 'https://emergingwebsolutions.in/sitemap.xml',
    }
}
