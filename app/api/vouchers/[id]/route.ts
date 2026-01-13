import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import type { VoucherResponse } from '@/types/onboarding'

// GET /api/vouchers/[id] - Get single voucher
export async function GET(
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    const supabase = await createClient()
    try {
        const { data, error } = await supabase
            .from('vouchers')
            .select('*')
            .eq('id', params.id)
            .single()

        if (error) {
            return NextResponse.json(
                { success: false, error: 'Voucher not found' },
                { status: 404 }
            )
        }

        return NextResponse.json({ success: true, data })
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to fetch voucher' },
            { status: 500 }
        )
    }
}

// PUT /api/vouchers/[id] - Update voucher
export async function PUT(
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    const supabase = await createClient()
    try {
        const body = await request.json()

        const { data, error } = await supabase
            .from('vouchers')
            .update(body)
            .eq('id', params.id)
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
            data,
        }

        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to update voucher' },
            { status: 500 }
        )
    }
}

// DELETE /api/vouchers/[id] - Delete voucher
export async function DELETE(
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    const supabase = await createClient()
    try {
        const { error } = await supabase
            .from('vouchers')
            .delete()
            .eq('id', params.id)

        if (error) {
            return NextResponse.json(
                { success: false, error: error.message },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to delete voucher' },
            { status: 500 }
        )
    }
}
