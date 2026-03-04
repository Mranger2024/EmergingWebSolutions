import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    // 1. Try Vercel / Cloudflare headers first (fastest, no rate limits)
    let country =
        req.headers.get('x-vercel-ip-country') ||
        req.headers.get('cf-ipcountry')

    // 2. Fallback to an external IP API if headers are missing (e.g. self-hosting, local dev)
    if (!country) {
        try {
            // Get the real client IP, falling back to empty (which ipapi will treat as the server's IP)
            const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || ''
            const res = await fetch(`https://ipapi.co/${ip ? ip + '/' : ''}json/`, {
                // Small timeout so we don't block the UI for long
                signal: AbortSignal.timeout(3000)
            })
            if (res.ok) {
                const data = await res.json()
                if (data.country_code) {
                    country = data.country_code
                }
            }
        } catch (e) {
            console.error('Geo IP fetch failed', e)
        }
    }

    // 3. Ultimate fallback is 'IN' if everything fails
    if (!country) {
        country = 'IN'
    }

    const isIndia = country === 'IN'

    return NextResponse.json({
        country,
        currency: isIndia ? 'INR' : 'USD',
        symbol: isIndia ? '₹' : '$',
        // Approximate USD equivalent (update rate periodically)
        exchangeRate: 88, // updated to a slightly more realistic rate for safety
    })
}
