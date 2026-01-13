// Admin Panel Type Definitions

export interface Project {
    id: string
    name: string
    clientId: string
    clientName: string
    status: 'pending' | 'in-progress' | 'review' | 'completed' | 'on-hold'
    package: string
    amount: number
    dueDate: string
    createdAt: string
    updatedAt: string
    description?: string
    requirements?: string
    notes?: string
}

export interface Client {
    id: string
    name: string
    email: string
    phone: string
    company?: string
    address?: string
    notes?: string
    createdAt: string
    updatedAt: string
    totalProjects: number
    totalSpent: number
}

export interface Settings {
    businessName: string
    email: string
    phone: string
    address: string
    pricing: {
        starter: number
        professional: number
        enterprise: number
    }
    notifications: {
        emailOnNewProject: boolean
        emailOnProjectComplete: boolean
    }
}

export interface DashboardStats {
    totalRevenue: number
    activeProjects: number
    totalClients: number
    leads: number
    revenueChange: string
    projectsDueThisWeek: number
    newClients: number
    unreadLeads: number
}

export interface Activity {
    id: string
    type: 'project_created' | 'project_updated' | 'client_added' | 'payment_received'
    message: string
    timestamp: string
}

// API Response types
export interface ApiResponse<T> {
    success: boolean
    data?: T
    error?: string
}

export interface PaginatedResponse<T> {
    data: T[]
    total: number
    page: number
    pageSize: number
}
