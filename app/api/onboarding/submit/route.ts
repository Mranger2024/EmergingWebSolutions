import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import type { SubmissionResponse } from '@/types/onboarding'

// POST /api/onboarding/submit - Submit onboarding data
export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient()
        const body = await request.json()

        // Validate required fields
        if (!body.clientId || !body.tokenId) {
            return NextResponse.json(
                { success: false, error: 'Client ID and Token ID are required' },
                { status: 400 }
            )
        }

        // Create submission
        const { data: submission, error: submissionError } = await supabase
            .from('onboarding_submissions')
            .insert({
                client_id: body.clientId,
                token_id: body.tokenId,
                status: 'pending',
                progress: 100,
                business_details: body.businessDetails || null,
                operational_info: body.operationalInfo || null,
                payment_info: body.paymentInfo || null,
                additional_requirements: body.additionalRequirements || null,
                submitted_at: new Date().toISOString(),
            })
            .select()
            .single()

        if (submissionError) {
            return NextResponse.json(
                { success: false, error: submissionError.message },
                { status: 500 }
            )
        }

        // Insert doctors if provided
        if (body.doctors && body.doctors.length > 0) {
            const { error: doctorsError } = await supabase
                .from('doctors')
                .insert(
                    body.doctors.map((doctor: any) => ({
                        submission_id: submission.id,
                        full_name: doctor.fullName,
                        designation: doctor.designation,
                        education: doctor.education,
                        experience_years: doctor.experienceYears,
                        specializations: doctor.specializations,
                        achievements: doctor.achievements,
                        working_hours: doctor.workingHours,
                        fee_structure: doctor.feeStructure,
                        profile_photo_url: doctor.profilePhotoUrl,
                        certifications_urls: doctor.certificationsUrls,
                    }))
                )

            if (doctorsError) {
                console.error('Error inserting doctors:', doctorsError)
            }
        }

        // Insert services if provided
        if (body.services && body.services.length > 0) {
            const { error: servicesError } = await supabase
                .from('services')
                .insert(
                    body.services.map((service: any) => ({
                        submission_id: submission.id,
                        name: service.name,
                        category: service.category,
                        description: service.description,
                        price: service.price,
                        duration: service.duration,
                        special_instructions: service.specialInstructions,
                        thumbnail_url: service.thumbnailUrl,
                        gallery_urls: service.galleryUrls,
                    }))
                )

            if (servicesError) {
                console.error('Error inserting services:', servicesError)
            }
        }

        // Insert files if provided
        if (body.files && body.files.length > 0) {
            const { error: filesError } = await supabase
                .from('onboarding_files')
                .insert(
                    body.files.map((file: any) => ({
                        submission_id: submission.id,
                        file_type: file.fileType,
                        file_name: file.fileName,
                        file_url: file.fileUrl,
                        file_size: file.fileSize,
                    }))
                )

            if (filesError) {
                console.error('Error inserting files:', filesError)
            }
        }

        // Mark token as used
        await supabase
            .from('onboarding_tokens')
            .update({
                used: true,
                used_at: new Date().toISOString(),
            })
            .eq('id', body.tokenId)

        const response: SubmissionResponse = {
            success: true,
            data: submission,
        }

        return NextResponse.json(response, { status: 201 })
    } catch (error) {
        console.error('Submission error:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to submit onboarding data' },
            { status: 500 }
        )
    }
}
