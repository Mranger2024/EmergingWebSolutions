import type { Project, Client, Settings } from '@/types/admin'

// Storage keys
const STORAGE_KEYS = {
    PROJECTS: 'admin_projects',
    CLIENTS: 'admin_clients',
    SETTINGS: 'admin_settings',
} as const

// Initialize with sample data
const INITIAL_PROJECTS: Project[] = [
    {
        id: 'PROJ-001',
        name: 'Sharma Dental Clinic',
        clientId: 'CLI-001',
        clientName: 'Dr. Rajesh Sharma',
        status: 'in-progress',
        package: 'Starter',
        amount: 14999,
        dueDate: '2024-12-30',
        createdAt: '2024-11-01T00:00:00Z',
        updatedAt: '2024-11-20T00:00:00Z',
        description: 'Professional website for dental clinic',
        requirements: 'Appointment booking, services showcase, contact form',
    },
    {
        id: 'PROJ-002',
        name: 'Urban Bites',
        clientId: 'CLI-002',
        clientName: 'Amit Singh',
        status: 'review',
        package: 'Starter',
        amount: 14999,
        dueDate: '2024-11-28',
        createdAt: '2024-10-15T00:00:00Z',
        updatedAt: '2024-11-22T00:00:00Z',
        description: 'Restaurant website with menu and online ordering',
    },
    {
        id: 'PROJ-003',
        name: 'FitLife Gym',
        clientId: 'CLI-003',
        clientName: 'Sarah Jenkins',
        status: 'completed',
        package: 'Starter',
        amount: 14999,
        dueDate: '2024-11-15',
        createdAt: '2024-10-01T00:00:00Z',
        updatedAt: '2024-11-15T00:00:00Z',
        description: 'Gym website with membership plans and class schedules',
    },
]

const INITIAL_CLIENTS: Client[] = [
    {
        id: 'CLI-001',
        name: 'Dr. Rajesh Sharma',
        email: 'rajesh@sharmadentalclinic.com',
        phone: '+91 98765 43210',
        company: 'Sharma Dental Clinic',
        address: 'Mumbai, Maharashtra',
        createdAt: '2024-11-01T00:00:00Z',
        updatedAt: '2024-11-01T00:00:00Z',
        totalProjects: 1,
        totalSpent: 14999,
    },
    {
        id: 'CLI-002',
        name: 'Amit Singh',
        email: 'amit@urbanbites.com',
        phone: '+91 98765 43211',
        company: 'Urban Bites',
        address: 'Delhi, NCR',
        createdAt: '2024-10-15T00:00:00Z',
        updatedAt: '2024-10-15T00:00:00Z',
        totalProjects: 1,
        totalSpent: 14999,
    },
    {
        id: 'CLI-003',
        name: 'Sarah Jenkins',
        email: 'sarah@fitlifegym.com',
        phone: '+91 98765 43212',
        company: 'FitLife Gym',
        address: 'Bangalore, Karnataka',
        createdAt: '2024-10-01T00:00:00Z',
        updatedAt: '2024-10-01T00:00:00Z',
        totalProjects: 1,
        totalSpent: 14999,
    },
]

const INITIAL_SETTINGS: Settings = {
    businessName: 'Emerging Web Solutions',
    email: 'emergingwebsolutions@gmail.com',
    phone: '8688440114',
    address: 'G D complex, opp. R T C, A B M Compound, bustand, Kavali, Andhra Pradesh 524201',
    pricing: {
        starter: 14999,
        professional: 25000,
        enterprise: 50000,
    },
    notifications: {
        emailOnNewProject: true,
        emailOnProjectComplete: true,
    },
}

// Storage utility functions
export const storage = {
    // Projects
    getProjects: (): Project[] => {
        if (typeof window === 'undefined') return INITIAL_PROJECTS
        const data = localStorage.getItem(STORAGE_KEYS.PROJECTS)
        if (!data) {
            localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(INITIAL_PROJECTS))
            return INITIAL_PROJECTS
        }
        return JSON.parse(data)
    },

    getProject: (id: string): Project | null => {
        const projects = storage.getProjects()
        return projects.find(p => p.id === id) || null
    },

    saveProjects: (projects: Project[]): void => {
        if (typeof window === 'undefined') return
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects))
    },

    addProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project => {
        const projects = storage.getProjects()
        const newProject: Project = {
            ...project,
            id: `PROJ-${String(projects.length + 1).padStart(3, '0')}`,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }
        projects.push(newProject)
        storage.saveProjects(projects)
        return newProject
    },

    updateProject: (id: string, updates: Partial<Project>): Project | null => {
        const projects = storage.getProjects()
        const index = projects.findIndex(p => p.id === id)
        if (index === -1) return null

        projects[index] = {
            ...projects[index],
            ...updates,
            updatedAt: new Date().toISOString(),
        }
        storage.saveProjects(projects)
        return projects[index]
    },

    deleteProject: (id: string): boolean => {
        const projects = storage.getProjects()
        const filtered = projects.filter(p => p.id !== id)
        if (filtered.length === projects.length) return false
        storage.saveProjects(filtered)
        return true
    },

    // Clients
    getClients: (): Client[] => {
        if (typeof window === 'undefined') return INITIAL_CLIENTS
        const data = localStorage.getItem(STORAGE_KEYS.CLIENTS)
        if (!data) {
            localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(INITIAL_CLIENTS))
            return INITIAL_CLIENTS
        }
        return JSON.parse(data)
    },

    getClient: (id: string): Client | null => {
        const clients = storage.getClients()
        return clients.find(c => c.id === id) || null
    },

    saveClients: (clients: Client[]): void => {
        if (typeof window === 'undefined') return
        localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(clients))
    },

    addClient: (client: Omit<Client, 'id' | 'createdAt' | 'updatedAt' | 'totalProjects' | 'totalSpent'>): Client => {
        const clients = storage.getClients()
        const newClient: Client = {
            ...client,
            id: `CLI-${String(clients.length + 1).padStart(3, '0')}`,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            totalProjects: 0,
            totalSpent: 0,
        }
        clients.push(newClient)
        storage.saveClients(clients)
        return newClient
    },

    updateClient: (id: string, updates: Partial<Client>): Client | null => {
        const clients = storage.getClients()
        const index = clients.findIndex(c => c.id === id)
        if (index === -1) return null

        clients[index] = {
            ...clients[index],
            ...updates,
            updatedAt: new Date().toISOString(),
        }
        storage.saveClients(clients)
        return clients[index]
    },

    deleteClient: (id: string): boolean => {
        const clients = storage.getClients()
        const filtered = clients.filter(c => c.id !== id)
        if (filtered.length === clients.length) return false
        storage.saveClients(filtered)
        return true
    },

    // Settings
    getSettings: (): Settings => {
        if (typeof window === 'undefined') return INITIAL_SETTINGS
        const data = localStorage.getItem(STORAGE_KEYS.SETTINGS)
        if (!data) {
            localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(INITIAL_SETTINGS))
            return INITIAL_SETTINGS
        }
        return JSON.parse(data)
    },

    saveSettings: (settings: Settings): void => {
        if (typeof window === 'undefined') return
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings))
    },
}
