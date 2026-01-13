import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import type { TokenResponse } from '@/types/onboarding'

// POST /api/onboarding/tokens - Generate onboarding token
export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient()
        const body = await request.json()

        // Validate required fields
        if (!body.clientId) {
            return NextResponse.json(
                { success: false, error: 'Client ID is required' },
                { status: 400 }
            )
        }

        // Generate unique token
        const { data: tokenData, error: tokenError } = await supabase
            .rpc('generate_onboarding_token')

        if (tokenError || !tokenData) {
            return NextResponse.json(
                { success: false, error: 'Failed to generate token' },
                { status: 500 }
            )
        }

        // Set expiry (default 7 days from now)
        const expiresAt = new Date()
        expiresAt.setDate(expiresAt.getDate() + 7)

        // Create token record
        const { data, error } = await supabase
            .from('onboarding_tokens')
            .insert({
                client_id: body.clientId,
                token: tokenData,
                expires_at: expiresAt.toISOString(),
            })
            .select()
            .single()

        if (error) {
            return NextResponse.json(
                { success: false, error: error.message },
                { status: 500 }
            )
        }

        // Generate onboarding URL
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
        const onboardingUrl = `${baseUrl}/onboard/${tokenData}`

        const response: TokenResponse = {
            success: true,
            data: {
                token: tokenData,
                expiresAt: expiresAt.toISOString(),
                onboardingUrl,
            },
        }

        return NextResponse.json(response, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to create token' },
            { status: 500 }
        )
    }
}
