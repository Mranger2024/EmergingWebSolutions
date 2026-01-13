import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/data/storage'
import type { ApiResponse, Client } from '@/types/admin'

// GET /api/clients/[id] - Get single client
export async function GET(
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    try {
        const client = storage.getClient(params.id)

        if (!client) {
            const response: ApiResponse<Client> = {
                success: false,
                error: 'Client not found',
            }
            return NextResponse.json(response, { status: 404 })
        }

        const response: ApiResponse<Client> = {
            success: true,
            data: client,
        }

        return NextResponse.json(response)
    } catch (error) {
        const response: ApiResponse<Client> = {
            success: false,
            error: 'Failed to fetch client',
        }
        return NextResponse.json(response, { status: 500 })
    }
}

// PUT /api/clients/[id] - Update client
export async function PUT(
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    try {
        const body = await request.json()
        const updatedClient = storage.updateClient(params.id, body)

        if (!updatedClient) {
            const response: ApiResponse<Client> = {
                success: false,
                error: 'Client not found',
            }
            return NextResponse.json(response, { status: 404 })
        }

        const response: ApiResponse<Client> = {
            success: true,
            data: updatedClient,
        }

        return NextResponse.json(response)
    } catch (error) {
        const response: ApiResponse<Client> = {
            success: false,
            error: 'Failed to update client',
        }
        return NextResponse.json(response, { status: 500 })
    }
}

// DELETE /api/clients/[id] - Delete client
export async function DELETE(
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    try {
        const success = storage.deleteClient(params.id)

        if (!success) {
            const response: ApiResponse<null> = {
                success: false,
                error: 'Client not found',
            }
            return NextResponse.json(response, { status: 404 })
        }

        const response: ApiResponse<null> = {
            success: true,
        }

        return NextResponse.json(response)
    } catch (error) {
        const response: ApiResponse<null> = {
            success: false,
            error: 'Failed to delete client',
        }
        return NextResponse.json(response, { status: 500 })
    }
}
