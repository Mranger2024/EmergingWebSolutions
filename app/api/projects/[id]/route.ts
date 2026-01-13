import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/data/storage'
import type { ApiResponse, Project } from '@/types/admin'

// GET /api/projects/[id] - Get single project
export async function GET(
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    try {
        const project = storage.getProject(params.id)

        if (!project) {
            const response: ApiResponse<Project> = {
                success: false,
                error: 'Project not found',
            }
            return NextResponse.json(response, { status: 404 })
        }

        const response: ApiResponse<Project> = {
            success: true,
            data: project,
        }

        return NextResponse.json(response)
    } catch (error) {
        const response: ApiResponse<Project> = {
            success: false,
            error: 'Failed to fetch project',
        }
        return NextResponse.json(response, { status: 500 })
    }
}

// PUT /api/projects/[id] - Update project
export async function PUT(
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    try {
        const body = await request.json()
        const updatedProject = storage.updateProject(params.id, body)

        if (!updatedProject) {
            const response: ApiResponse<Project> = {
                success: false,
                error: 'Project not found',
            }
            return NextResponse.json(response, { status: 404 })
        }

        const response: ApiResponse<Project> = {
            success: true,
            data: updatedProject,
        }

        return NextResponse.json(response)
    } catch (error) {
        const response: ApiResponse<Project> = {
            success: false,
            error: 'Failed to update project',
        }
        return NextResponse.json(response, { status: 500 })
    }
}

// DELETE /api/projects/[id] - Delete project
export async function DELETE(
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    try {
        const success = storage.deleteProject(params.id)

        if (!success) {
            const response: ApiResponse<null> = {
                success: false,
                error: 'Project not found',
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
            error: 'Failed to delete project',
        }
        return NextResponse.json(response, { status: 500 })
    }
}
