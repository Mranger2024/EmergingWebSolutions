'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

// Initialize PostHog
if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'always',
        capture_pageview: false, // We'll capture manually for SPA
        capture_pageleave: true,
        autocapture: true,
        session_recording: {
            maskAllInputs: false,  // Allow seeing form inputs for lead analysis
            maskInputOptions: {
                password: true,       // But mask passwords
            }
        }
    })
}

// Page view tracker component
function PageviewTracker() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const ph = usePostHog()

    useEffect(() => {
        if (!ph) return
        const url = pathname + (searchParams.toString() ? `?${searchParams}` : '')
        ph.capture('$pageview', { '$current_url': url })
    }, [pathname, searchParams, ph])

    return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    return (
        <PHProvider client={posthog}>
            <Suspense fallback={null}>
                <PageviewTracker />
            </Suspense>
            {children}
        </PHProvider>
    )
}

// ──────────────────────────────────────────────────────────────
// Agency-specific analytics helpers — import and call these from
// relevant UI components to get business insights.
// ──────────────────────────────────────────────────────────────

/** Visitor clicked "Get Started" or any CTA button */
export function trackCTAClick(label: string, location: string) {
    posthog.capture('cta_clicked', { label, location })
}

/** Visitor viewed a pricing package */
export function trackPricingView(packageName: string, price: number, currency: string) {
    posthog.capture('pricing_viewed', { package_name: packageName, price, currency })
}

/** Visitor clicked "View full package details" */
export function trackPricingDetailsClick(packageName: string) {
    posthog.capture('pricing_details_clicked', { package_name: packageName })
}

/** Contact form submission (before API call) */
export function trackContactFormStart() {
    posthog.capture('contact_form_started')
}

/** Contact form submitted successfully */
export function trackContactFormSubmit(data: { name?: string; business_type?: string; budget?: string }) {
    posthog.capture('contact_form_submitted', data)
}

/** Visitor viewed portfolio item */
export function trackPortfolioView(projectTitle: string) {
    posthog.capture('portfolio_viewed', { project_title: projectTitle })
}

/** Visitor clicked a social link in footer or hero */
export function trackSocialClick(platform: string) {
    posthog.capture('social_link_clicked', { platform })
}

/** Visitor clicked WhatsApp button */
export function trackWhatsAppClick(location: string) {
    posthog.capture('whatsapp_clicked', { location })
}

/** Process page step viewed */
export function trackProcessStepView(stepId: number, stepTitle: string) {
    posthog.capture('process_step_viewed', { step_id: stepId, step_title: stepTitle })
}

/** User's detected currency / region */
export function trackUserRegion(country: string, currency: 'INR' | 'USD') {
    posthog.register({ country, currency_shown: currency })
}
