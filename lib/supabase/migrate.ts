import { supabase } from './client'
import { storage } from '../data/storage'

/**
 * Migration script to move data from localStorage to Supabase
 * Run this once after setting up the database schema
 */

export async function migrateToSupabase() {
    console.log('🚀 Starting migration to Supabase...')

    try {
        // Get existing data from localStorage
        const projects = storage.getProjects()
        const clients = storage.getClients()
        const settings = storage.getSettings()

        console.log(`Found ${clients.length} clients, ${projects.length} projects`)

        // Migrate clients first (projects depend on clients)
        console.log('📦 Migrating clients...')
        const { data: migratedClients, error: clientsError } = await supabase
            .from('clients')
            .insert(
                clients.map(client => ({
                    id: client.id,
                    name: client.name,
                    email: client.email,
                    phone: client.phone,
                    company: client.company,
                    address: client.address,
                    notes: client.notes,
                    created_at: client.createdAt,
                    updated_at: client.updatedAt,
                }))
            )
            .select()

        if (clientsError) {
            console.error('❌ Error migrating clients:', clientsError)
            throw clientsError
        }

        console.log(`✅ Migrated ${clients.length} clients`)

        // Migrate projects
        console.log('📦 Migrating projects...')
        const { data: migratedProjects, error: projectsError } = await supabase
            .from('projects')
            .insert(
                projects.map(project => ({
                    id: project.id,
                    client_id: project.clientId,
                    name: project.name,
                    package: project.package,
                    amount: project.amount,
                    status: project.status.toUpperCase().replace('-', '_'),
                    due_date: project.dueDate,
                    description: project.description,
                    requirements: project.requirements,
                    created_at: project.createdAt,
                    updated_at: project.updatedAt,
                }))
            )
            .select()

        if (projectsError) {
            console.error('❌ Error migrating projects:', projectsError)
            throw projectsError
        }

        console.log(`✅ Migrated ${projects.length} projects`)

        // Migrate settings
        console.log('📦 Migrating settings...')
        const { error: settingsError } = await supabase
            .from('settings')
            .update({
                business_name: settings.businessName,
                email: settings.email,
                phone: settings.phone,
                address: settings.address,
                pricing: settings.pricing,
                notifications: settings.notifications,
            })
            .eq('id', (await supabase.from('settings').select('id').single()).data?.id)

        if (settingsError) {
            console.error('❌ Error migrating settings:', settingsError)
            throw settingsError
        }

        console.log('✅ Migrated settings')

        console.log('🎉 Migration completed successfully!')
        return { success: true, clientsCount: clients.length, projectsCount: projects.length }
    } catch (error) {
        console.error('❌ Migration failed:', error)
        return { success: false, error }
    }
}

// Helper function to check if migration is needed
export async function checkMigrationStatus() {
    const { count: clientsCount } = await supabase
        .from('clients')
        .select('*', { count: 'exact', head: true })

    const { count: projectsCount } = await supabase
        .from('projects')
        .select('*', { count: 'exact', head: true })

    return {
        hasData: (clientsCount || 0) > 0 || (projectsCount || 0) > 0,
        clientsCount: clientsCount || 0,
        projectsCount: projectsCount || 0,
    }
}
