import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/data/storage'
import type { ApiResponse, Client } from '@/types/admin'

// GET /api/clients - Get all clients
export async function GET(request: NextRequest) {
    try {
        const clients = storage.getClients()

        const response: ApiResponse<Client[]> = {
            success: true,
            data: clients,
        }

        return NextResponse.json(response)
    } catch (error) {
        const response: ApiResponse<Client[]> = {
            success: false,
            error: 'Failed to fetch clients',
        }
        return NextResponse.json(response, { status: 500 })
    }
}

// POST /api/clients - Create new client
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Validate required fields
        if (!body.name || !body.email || !body.phone) {
            const response: ApiResponse<Client> = {
                success: false,
                error: 'Missing required fields',
            }
            return NextResponse.json(response, { status: 400 })
        }

        const newClient = storage.addClient({
            name: body.name,
            email: body.email,
            phone: body.phone,
            company: body.company,
            address: body.address,
            notes: body.notes,
        })

        const response: ApiResponse<Client> = {
            success: true,
            data: newClient,
        }

        return NextResponse.json(response, { status: 201 })
    } catch (error) {
        const response: ApiResponse<Client> = {
            success: false,
            error: 'Failed to create client',
        }
        return NextResponse.json(response, { status: 500 })
    }
}
