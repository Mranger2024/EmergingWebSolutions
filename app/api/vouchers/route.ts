import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import type { VoucherResponse, Voucher } from '@/types/onboarding'

// GET /api/vouchers - Get all vouchers
export async function GET(request: NextRequest) {
    try {
        const supabase = await createClient()
        const searchParams = request.nextUrl.searchParams
        const clientId = searchParams.get('clientId')
        const status = searchParams.get('status')

        let query = supabase.from('vouchers').select('*')

        if (clientId) {
            query = query.eq('client_id', clientId)
        }

        if (status) {
            query = query.eq('status', status)
        }

        const { data, error } = await query.order('created_at', { ascending: false })

        if (error) {
            return NextResponse.json(
                { success: false, error: error.message },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true, data })
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to fetch vouchers' },
            { status: 500 }
        )
    }
}

// POST /api/vouchers - Create new voucher
export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient()
        const body = await request.json()

        // Validate required fields
        if (!body.type) {
            return NextResponse.json(
                { success: false, error: 'Voucher type is required' },
                { status: 400 }
            )
        }

        // Generate unique voucher code
        const { data: codeData, error: codeError } = await supabase
            .rpc('generate_voucher_code')

        if (codeError || !codeData) {
            return NextResponse.json(
                { success: false, error: 'Failed to generate voucher code' },
                { status: 500 }
            )
        }

        // Create voucher
        const { data, error } = await supabase
            .from('vouchers')
            .insert({
                code: codeData,
                client_id: body.clientId || null,
                type: body.type,
                value: body.value || null,
                description: body.description || null,
                expires_at: body.expiresAt || null,
                max_uses: body.maxUses || 1,
                status: 'active',
            })
            .select()
            .single()

        if (error) {
            return NextResponse.json(
                { success: false, error: error.message },
                { status: 500 }
            )
        }

        const response: VoucherResponse = {
            success: true,
            data: data as Voucher,
        }

        return NextResponse.json(response, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to create voucher' },
            { status: 500 }
        )
    }
}
