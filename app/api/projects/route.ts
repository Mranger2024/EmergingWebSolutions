import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/data/storage'
import type { ApiResponse, Project } from '@/types/admin'

// GET /api/projects - Get all projects
export async function GET(request: NextRequest) {
    try {
        const projects = storage.getProjects()

        // Optional: Add search/filter functionality
        const searchParams = request.nextUrl.searchParams
        const status = searchParams.get('status')
        const clientId = searchParams.get('clientId')

        let filteredProjects = projects

        if (status) {
            filteredProjects = filteredProjects.filter(p => p.status === status)
        }

        if (clientId) {
            filteredProjects = filteredProjects.filter(p => p.clientId === clientId)
        }

        const response: ApiResponse<Project[]> = {
            success: true,
            data: filteredProjects,
        }

        return NextResponse.json(response)
    } catch (error) {
        const response: ApiResponse<Project[]> = {
            success: false,
            error: 'Failed to fetch projects',
        }
        return NextResponse.json(response, { status: 500 })
    }
}

// POST /api/projects - Create new project
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Validate required fields
        if (!body.name || !body.clientId || !body.clientName || !body.package || !body.amount || !body.dueDate) {
            const response: ApiResponse<Project> = {
                success: false,
                error: 'Missing required fields',
            }
            return NextResponse.json(response, { status: 400 })
        }

        const newProject = storage.addProject({
            name: body.name,
            clientId: body.clientId,
            clientName: body.clientName,
            status: body.status || 'pending',
            package: body.package,
            amount: body.amount,
            dueDate: body.dueDate,
            description: body.description,
            requirements: body.requirements,
            notes: body.notes,
        })

        const response: ApiResponse<Project> = {
            success: true,
            data: newProject,
        }

        return NextResponse.json(response, { status: 201 })
    } catch (error) {
        const response: ApiResponse<Project> = {
            success: false,
            error: 'Failed to create project',
        }
        return NextResponse.json(response, { status: 500 })
    }
}
