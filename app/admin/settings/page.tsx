"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Loader2, Save } from "lucide-react"
import { storage } from "@/lib/data/storage"
import type { Settings } from "@/types/admin"

export default function SettingsPage() {
    const [settings, setSettings] = useState<Settings | null>(null)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        const loadedSettings = storage.getSettings()
        setSettings(loadedSettings)
        setLoading(false)
    }, [])

    const handleSave = () => {
        if (!settings) return
        setSaving(true)

        setTimeout(() => {
            storage.saveSettings(settings)
            setSaving(false)
            alert('Settings saved successfully!')
        }, 500)
    }

    if (loading || !settings) {
        return (
            <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <Button onClick={handleSave} disabled={saving}>
                    {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                    Save Changes
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Business Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="businessName">Business Name</Label>
                            <Input
                                id="businessName"
                                value={settings.businessName}
                                onChange={(e) => setSettings({ ...settings, businessName: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={settings.email}
                                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                id="phone"
                                value={settings.phone}
                                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input
                                id="address"
                                value={settings.address}
                                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Pricing Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                            <Label htmlFor="starter">Starter Package (₹)</Label>
                            <Input
                                id="starter"
                                type="number"
                                value={settings.pricing.starter}
                                onChange={(e) => setSettings({
                                    ...settings,
                                    pricing: { ...settings.pricing, starter: parseInt(e.target.value) }
                                })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="professional">Professional Package (₹)</Label>
                            <Input
                                id="professional"
                                type="number"
                                value={settings.pricing.professional}
                                onChange={(e) => setSettings({
                                    ...settings,
                                    pricing: { ...settings.pricing, professional: parseInt(e.target.value) }
                                })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="enterprise">Enterprise Package (₹)</Label>
                            <Input
                                id="enterprise"
                                type="number"
                                value={settings.pricing.enterprise}
                                onChange={(e) => setSettings({
                                    ...settings,
                                    pricing: { ...settings.pricing, enterprise: parseInt(e.target.value) }
                                })}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Email on New Project</Label>
                            <p className="text-sm text-muted-foreground">
                                Receive email notifications when a new project is created
                            </p>
                        </div>
                        <Switch
                            checked={settings.notifications.emailOnNewProject}
                            onCheckedChange={(checked: boolean) => setSettings({
                                ...settings,
                                notifications: { ...settings.notifications, emailOnNewProject: checked }
                            })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Email on Project Complete</Label>
                            <p className="text-sm text-muted-foreground">
                                Receive email notifications when a project is marked as completed
                            </p>
                        </div>
                        <Switch
                            checked={settings.notifications.emailOnProjectComplete}
                            onCheckedChange={(checked: boolean) => setSettings({
                                ...settings,
                                notifications: { ...settings.notifications, emailOnProjectComplete: checked }
                            })}
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
