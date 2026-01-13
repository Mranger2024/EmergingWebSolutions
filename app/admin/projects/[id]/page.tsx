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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
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
import type { Project, Client } from "@/types/admin"

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
    const router = useRouter()
    const [project, setProject] = useState<Project | null>(null)
    const [clients, setClients] = useState<Client[]>([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [formData, setFormData] = useState<Partial<Project>>({})

    useEffect(() => {
        fetchProject()
        fetchClients()
    }, [params.id])

    const fetchProject = async () => {
        try {
            const response = await fetch(`/api/projects/${params.id}`)
            const data = await response.json()
            if (data.success) {
                setProject(data.data)
                setFormData(data.data)
            }
        } catch (error) {
            console.error('Failed to fetch project:', error)
        } finally {
            setLoading(false)
        }
    }

    const fetchClients = async () => {
        try {
            const response = await fetch('/api/clients')
            const data = await response.json()
            if (data.success) {
                setClients(data.data)
            }
        } catch (error) {
            console.error('Failed to fetch clients:', error)
        }
    }

    const handleSave = async () => {
        setSaving(true)
        try {
            const response = await fetch(`/api/projects/${params.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const data = await response.json()
            if (data.success) {
                setProject(data.data)
                setEditMode(false)
            } else {
                alert('Failed to update project: ' + data.error)
            }
        } catch (error) {
            alert('Failed to update project')
        } finally {
            setSaving(false)
        }
    }

    const handleDelete = async () => {
        setDeleting(true)
        try {
            const response = await fetch(`/api/projects/${params.id}`, {
                method: 'DELETE',
            })

            const data = await response.json()
            if (data.success) {
                router.push('/admin/projects')
            } else {
                alert('Failed to delete project: ' + data.error)
            }
        } catch (error) {
            alert('Failed to delete project')
        } finally {
            setDeleting(false)
        }
    }

    const handleClientChange = (clientId: string) => {
        const client = clients.find(c => c.id === clientId)
        setFormData({
            ...formData,
            clientId,
            clientName: client?.name || "",
        })
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

    if (!project) {
        return (
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/admin/projects">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-bold tracking-tight">Project Not Found</h1>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/admin/projects">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
                        <p className="text-muted-foreground">{project.id}</p>
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
                                            This action cannot be undone. This will permanently delete the project.
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
                                setFormData(project)
                            }}>
                                <X className="mr-2 h-4 w-4" />
                                Cancel
                            </Button>
                        </>
                    )}
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {editMode ? (
                        <>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Project Name</Label>
                                    <Input
                                        id="name"
                                        value={formData.name || ""}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="client">Client</Label>
                                    <Select value={formData.clientId} onValueChange={handleClientChange}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {clients.map((client) => (
                                                <SelectItem key={client.id} value={client.id}>
                                                    {client.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="package">Package</Label>
                                    <Input
                                        id="package"
                                        value={formData.package || ""}
                                        onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="amount">Amount (₹)</Label>
                                    <Input
                                        id="amount"
                                        type="number"
                                        value={formData.amount || ""}
                                        onChange={(e) => setFormData({ ...formData, amount: parseInt(e.target.value) })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="status">Status</Label>
                                    <Select value={formData.status} onValueChange={(value: any) => setFormData({ ...formData, status: value })}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="in-progress">In Progress</SelectItem>
                                            <SelectItem value="review">Review</SelectItem>
                                            <SelectItem value="completed">Completed</SelectItem>
                                            <SelectItem value="on-hold">On Hold</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="dueDate">Due Date</Label>
                                    <Input
                                        id="dueDate"
                                        type="date"
                                        value={formData.dueDate?.split('T')[0] || ""}
                                        onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={formData.description || ""}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    rows={3}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="requirements">Requirements</Label>
                                <Textarea
                                    id="requirements"
                                    value={formData.requirements || ""}
                                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                    rows={3}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="notes">Notes</Label>
                                <Textarea
                                    id="notes"
                                    value={formData.notes || ""}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    rows={2}
                                />
                            </div>
                        </>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <Label className="text-muted-foreground">Client</Label>
                                <p className="text-lg font-medium">{project.clientName}</p>
                            </div>
                            <div>
                                <Label className="text-muted-foreground">Status</Label>
                                <div className="mt-1">
                                    <Badge>{formatStatus(project.status)}</Badge>
                                </div>
                            </div>
                            <div>
                                <Label className="text-muted-foreground">Package</Label>
                                <p className="text-lg font-medium">{project.package}</p>
                            </div>
                            <div>
                                <Label className="text-muted-foreground">Amount</Label>
                                <p className="text-lg font-medium">₹{project.amount.toLocaleString()}</p>
                            </div>
                            <div>
                                <Label className="text-muted-foreground">Due Date</Label>
                                <p className="text-lg font-medium">{new Date(project.dueDate).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <Label className="text-muted-foreground">Created</Label>
                                <p className="text-lg font-medium">{new Date(project.createdAt).toLocaleDateString()}</p>
                            </div>
                            {project.description && (
                                <div className="md:col-span-2">
                                    <Label className="text-muted-foreground">Description</Label>
                                    <p className="mt-1">{project.description}</p>
                                </div>
                            )}
                            {project.requirements && (
                                <div className="md:col-span-2">
                                    <Label className="text-muted-foreground">Requirements</Label>
                                    <p className="mt-1">{project.requirements}</p>
                                </div>
                            )}
                            {project.notes && (
                                <div className="md:col-span-2">
                                    <Label className="text-muted-foreground">Notes</Label>
                                    <p className="mt-1">{project.notes}</p>
                                </div>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
