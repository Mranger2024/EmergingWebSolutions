import { supabase } from './client'

/**
 * Upload file to Supabase Storage
 * @param file - File to upload
 * @param bucket - Storage bucket name
 * @param path - File path in bucket
 * @returns Public URL of uploaded file
 */
export async function uploadFile(
    file: File,
    bucket: string = 'onboarding-files',
    path?: string
): Promise<{ url: string; error: string | null }> {
    try {
        const fileName = path || `${Date.now()}-${file.name}`

        const { data, error } = await supabase.storage
            .from(bucket)
            .upload(fileName, file, {
                cacheControl: '3600',
                upsert: false,
            })

        if (error) {
            return { url: '', error: error.message }
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
            .from(bucket)
            .getPublicUrl(data.path)

        return { url: publicUrl, error: null }
    } catch (error) {
        return { url: '', error: 'Failed to upload file' }
    }
}

/**
 * Upload multiple files
 * @param files - Array of files to upload
 * @param bucket - Storage bucket name
 * @param pathPrefix - Prefix for file paths
 * @returns Array of public URLs
 */
export async function uploadMultipleFiles(
    files: File[],
    bucket: string = 'onboarding-files',
    pathPrefix?: string
): Promise<{ urls: string[]; errors: string[] }> {
    const urls: string[] = []
    const errors: string[] = []

    for (const file of files) {
        const path = pathPrefix ? `${pathPrefix}/${Date.now()}-${file.name}` : undefined
        const { url, error } = await uploadFile(file, bucket, path)

        if (error) {
            errors.push(error)
        } else {
            urls.push(url)
        }
    }

    return { urls, errors }
}

/**
 * Delete file from Supabase Storage
 * @param filePath - Path to file in bucket
 * @param bucket - Storage bucket name
 */
export async function deleteFile(
    filePath: string,
    bucket: string = 'onboarding-files'
): Promise<{ success: boolean; error: string | null }> {
    try {
        const { error } = await supabase.storage
            .from(bucket)
            .remove([filePath])

        if (error) {
            return { success: false, error: error.message }
        }

        return { success: true, error: null }
    } catch (error) {
        return { success: false, error: 'Failed to delete file' }
    }
}

/**
 * Get file URL from Supabase Storage
 * @param filePath - Path to file in bucket
 * @param bucket - Storage bucket name
 */
export function getFileUrl(
    filePath: string,
    bucket: string = 'onboarding-files'
): string {
    const { data } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath)

    return data.publicUrl
}
