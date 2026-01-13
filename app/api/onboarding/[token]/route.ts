import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// GET /api/onboarding/[token] - Validate and get token info
export async function GET(
    request: NextRequest,
    props: { params: Promise<{ token: string }> }
) {
    const params = await props.params;
    const supabase = await createClient()
    try {
        // Check if token is valid using database function
        const { data: isValid, error: validError } = await supabase
            .rpc('is_token_valid', { token_value: params.token })

        if (validError) {
            return NextResponse.json(
                { success: false, error: 'Failed to validate token' },
                { status: 500 }
            )
        }

        if (!isValid) {
            return NextResponse.json(
                { success: false, error: 'Token is invalid or expired' },
                { status: 401 }
            )
        }

        // Get token details with client info
        const { data, error } = await supabase
            .from('onboarding_tokens')
            .select(`
        *,
        client:clients(*)
      `)
            .eq('token', params.token)
            .single()

        if (error) {
            return NextResponse.json(
                { success: false, error: 'Token not found' },
                { status: 404 }
            )
        }

        return NextResponse.json({ success: true, data })
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to validate token' },
            { status: 500 }
        )
    }
}

// PUT /api/onboarding/[token] - Mark token as used
export async function PUT(
    request: NextRequest,
    props: { params: Promise<{ token: string }> }
) {
    const params = await props.params;
    const supabase = await createClient()
    try {
        const { data, error } = await supabase
            .from('onboarding_tokens')
            .update({
                used: true,
                used_at: new Date().toISOString(),
            })
            .eq('token', params.token)
            .select()
            .single()

        if (error) {
            return NextResponse.json(
                { success: false, error: error.message },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true, data })
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to update token' },
            { status: 500 }
        )
    }
}
