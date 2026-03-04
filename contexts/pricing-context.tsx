'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { trackUserRegion } from '@/components/providers/posthog-provider'

interface GeoData {
    country: string
    currency: 'INR' | 'USD'
    symbol: string
    exchangeRate: number
}

interface PricingContextValue extends GeoData {
    isLoading: boolean
    /** Format an INR price for the visitor — returns ₹XX,XXX in India, $XXX abroad */
    formatPrice: (inrAmount: number) => string
}

const defaultGeo: GeoData = {
    country: 'IN',
    currency: 'INR',
    symbol: '₹',
    exchangeRate: 84,
}

const PricingContext = createContext<PricingContextValue>({
    ...defaultGeo,
    isLoading: true,
    formatPrice: (n) => `₹${n.toLocaleString('en-IN')}`,
})

export function PricingProvider({ children }: { children: React.ReactNode }) {
    const [geo, setGeo] = useState<GeoData>(defaultGeo)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('/api/geo')
            .then((r) => r.json())
            .then((data: GeoData) => {
                setGeo(data)
                trackUserRegion(data.country, data.currency)
            })
            .catch(() => { /* keep defaults */ })
            .finally(() => setIsLoading(false))
    }, [])

    const formatPrice = (inrAmount: number): string => {
        if (geo.currency === 'USD') {
            const usd = Math.round(inrAmount / geo.exchangeRate)
            // Adding 18% GST/Tax for international clients
            const usdWithTax = Math.round(usd * 1.18)
            return `$${usdWithTax.toLocaleString('en-US')} + Taxes`
        }
        return `₹${inrAmount.toLocaleString('en-IN')}`
    }

    return (
        <PricingContext.Provider value={{ ...geo, isLoading, formatPrice }}>
            {children}
        </PricingContext.Provider>
    )
}

export const usePricing = () => useContext(PricingContext)
