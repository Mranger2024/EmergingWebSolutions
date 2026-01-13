"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ArrowLeft, Edit, Loader2, Save, Trash2, X } from "lucide-react"
import Link from "next/link"
import type { Client, Project } from "@/types/admin"

export default function ClientDetailsPage({ params }: { params: { id: string } }) {
    const router = useRouter()
    const [client, setClient] = useState<Client | null>(null)
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [formData, setFormData] = useState<Partial<Client>>({})

    useEffect(() => {
        fetchClient()
        fetchClientProjects()
    }, [params.id])

    const fetchClient = async () => {
        try {
            const response = await fetch(`/api/clients/${params.id}`)
            const data = await response.json()
            if (data.success) {
                setClient(data.data)
                setFormData(data.data)
            }
        } catch (error) {
            console.error('Failed to fetch client:', error)
        } finally {
            setLoading(false)
        }
    }

    const fetchClientProjects = async () => {
        try {
            const response = await fetch(`/api/projects?clientId=${params.id}`)
            const data = await response.json()
            if (data.success) {
                setProjects(data.data)
            }
        } catch (error) {
            console.error('Failed to fetch projects:', error)
        }
    }

    const handleSave = async () => {
        setSaving(true)
        try {
            const response = await fetch(`/api/clients/${params.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const data = await response.json()
            if (data.success) {
                setClient(data.data)
                setEditMode(false)
            } else {
                alert('Failed to update client: ' + data.error)
            }
        } catch (error) {
            alert('Failed to update client')
        } finally {
            setSaving(false)
        }
    }

    const handleDelete = async () => {
        setDeleting(true)
        try {
            const response = await fetch(`/api/clients/${params.id}`, {
                method: 'DELETE',
            })

            const data = await response.json()
            if (data.success) {
                router.push('/admin/clients')
            } else {
                alert('Failed to delete client: ' + data.error)
            }
        } catch (error) {
            alert('Failed to delete client')
        } finally {
            setDeleting(false)
        }
    }

    const formatStatus = (status: string) => {
        return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
        )
    }

    if (!client) {
        return (
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/admin/clients">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-bold tracking-tight">Client Not Found</h1>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/admin/clients">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{client.name}</h1>
                        <p className="text-muted-foreground">{client.id}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    {!editMode ? (
                        <>
                            <Button onClick={() => setEditMode(true)}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                            </Button>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="destructive">
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        Delete
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete the client.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={handleDelete} disabled={deleting}>
                                            {deleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                            Delete
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleSave} disabled={saving}>
                                {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                                Save
                            </Button>
                            <Button variant="outline" onClick={() => {
                                setEditMode(false)
                                setFormData(client)
                            }}>
                                <X className="mr-2 h-4 w-4" />
                                Cancel
                            </Button>
                        </>
                    )}
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">{client.totalProjects}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Total Spent</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">₹{client.totalSpent.toLocaleString()}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Active Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">{projects.filter(p => p.status === 'in-progress').length}</div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Client Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {editMode ? (
                        <>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        value={formData.name || ""}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email || ""}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input
                                        id="phone"
                                        value={formData.phone || ""}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input
                                        id="company"
                                        value={formData.company || ""}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="address">Address</Label>
                                    <Input
                                        id="address"
                                        value={formData.address || ""}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="notes">Notes</Label>
                                <Textarea
                                    id="notes"
                                    value={formData.notes || ""}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    rows={3}
                                />
                            </div>
                        </>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <Label className="text-muted-foreground">Email</Label>
                                <p className="text-lg font-medium">{client.email}</p>
                            </div>
                            <div>
                                <Label className="text-muted-foreground">Phone</Label>
                                <p className="text-lg font-medium">{client.phone}</p>
                            </div>
                            {client.company && (
                                <div>
                                    <Label className="text-muted-foreground">Company</Label>
                                    <p className="text-lg font-medium">{client.company}</p>
                                </div>
                            )}
                            {client.address && (
                                <div>
                                    <Label className="text-muted-foreground">Address</Label>
                                    <p className="text-lg font-medium">{client.address}</p>
                                </div>
                            )}
                            <div>
                                <Label className="text-muted-foreground">Client Since</Label>
                                <p className="text-lg font-medium">{new Date(client.createdAt).toLocaleDateString()}</p>
                            </div>
                            {client.notes && (
                                <div className="md:col-span-2">
                                    <Label className="text-muted-foreground">Notes</Label>
                                    <p className="mt-1">{client.notes}</p>
                                </div>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Projects</CardTitle>
                </CardHeader>
                <CardContent>
                    {projects.length === 0 ? (
                        <div className="py-8 text-center text-muted-foreground">
                            No projects yet
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {projects.map((project) => (
                                <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                                    <div>
                                        <p className="font-medium">{project.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            Due: {new Date(project.dueDate).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Badge>{formatStatus(project.status)}</Badge>
                                        <p className="font-medium">₹{project.amount.toLocaleString()}</p>
                                        <Button variant="ghost" size="sm" asChild>
                                            <Link href={`/admin/projects/${project.id}`}>View</Link>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
