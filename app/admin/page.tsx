"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, FolderOpen, Users, Zap, Plus, Eye } from "lucide-react"
import type { Project, Client, DashboardStats } from "@/types/admin"

export default function AdminDashboard() {
    const [projects, setProjects] = useState<Project[]>([])
    const [clients, setClients] = useState<Client[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const [projectsRes, clientsRes] = await Promise.all([
                fetch('/api/projects'),
                fetch('/api/clients'),
            ])

            const projectsData = await projectsRes.json()
            const clientsData = await clientsRes.json()

            if (projectsData.success) setProjects(projectsData.data)
            if (clientsData.success) setClients(clientsData.data)
        } catch (error) {
            console.error('Failed to fetch data:', error)
        } finally {
            setLoading(false)
        }
    }

    // Calculate stats
    const stats: DashboardStats = {
        totalRevenue: projects.reduce((sum, p) => sum + p.amount, 0),
        activeProjects: projects.filter(p => p.status === 'in-progress').length,
        totalClients: clients.length,
        leads: 0, // Placeholder
        revenueChange: '+12%',
        projectsDueThisWeek: projects.filter(p => {
            const dueDate = new Date(p.dueDate)
            const today = new Date()
            const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
            return dueDate >= today && dueDate <= weekFromNow
        }).length,
        newClients: clients.filter(c => {
            const created = new Date(c.createdAt)
            const monthAgo = new Date()
            monthAgo.setMonth(monthAgo.getMonth() - 1)
            return created >= monthAgo
        }).length,
        unreadLeads: 0, // Placeholder
    }

    const statsCards = [
        {
            title: "Total Revenue",
            value: `₹${stats.totalRevenue.toLocaleString()}`,
            icon: DollarSign,
            trend: stats.revenueChange + " from last month",
        },
        {
            title: "Active Projects",
            value: stats.activeProjects.toString(),
            icon: FolderOpen,
            trend: `${stats.projectsDueThisWeek} due this week`,
        },
        {
            title: "Total Clients",
            value: stats.totalClients.toString(),
            icon: Users,
            trend: `+${stats.newClients} new clients`,
        },
        {
            title: "Leads",
            value: stats.leads.toString(),
            icon: Zap,
            trend: `${stats.unreadLeads} unread`,
        },
    ]

    const recentProjects = projects
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 5)

    const formatStatus = (status: string) => {
        return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {statsCards.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">
                                {stat.trend}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {recentProjects.map((project) => (
                                <div key={project.id} className="flex items-center">
                                    <div className="ml-4 space-y-1 flex-1">
                                        <p className="text-sm font-medium leading-none">{project.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            Due: {new Date(project.dueDate).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="ml-auto flex items-center gap-4">
                                        <Badge variant={project.status === "completed" ? "default" : "secondary"}>
                                            {formatStatus(project.status)}
                                        </Badge>
                                        <div className="font-medium">₹{project.amount.toLocaleString()}</div>
                                        <Button variant="ghost" size="sm" asChild>
                                            <Link href={`/admin/projects/${project.id}`}>
                                                <Eye className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                            {recentProjects.length === 0 && (
                                <div className="text-center text-muted-foreground py-4">
                                    No projects yet
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button className="w-full justify-start" asChild>
                            <Link href="/admin/projects/new">
                                <Plus className="mr-2 h-4 w-4" />
                                Create New Project
                            </Link>
                        </Button>
                        <Button className="w-full justify-start" variant="outline" asChild>
                            <Link href="/admin/clients/new">
                                <Plus className="mr-2 h-4 w-4" />
                                Add New Client
                            </Link>
                        </Button>
                        <Button className="w-full justify-start" variant="outline" asChild>
                            <Link href="/admin/projects">
                                <Eye className="mr-2 h-4 w-4" />
                                View All Projects
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
