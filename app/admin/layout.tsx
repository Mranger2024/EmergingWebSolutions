import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart3, FolderKanban, LayoutDashboard, LogOut, Settings, Users } from "lucide-react"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-muted/20">
            {/* Sidebar */}
            <aside className="hidden w-64 flex-col border-r bg-background md:flex">
                <div className="flex h-16 items-center border-b px-6">
                    <Link href="/admin" className="flex items-center gap-2 font-bold text-lg">
                        <span className="text-primary">Web</span>Solutions Admin
                    </Link>
                </div>
                <div className="flex-1 overflow-auto py-6">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        <Link
                            href="/admin"
                            className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all hover:text-primary"
                        >
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                        </Link>
                        <Link
                            href="/admin/projects"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                        >
                            <FolderKanban className="h-4 w-4" />
                            Projects
                        </Link>
                        <Link
                            href="/admin/clients"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                        >
                            <Users className="h-4 w-4" />
                            Clients
                        </Link>
                        <Link
                            href="/admin/settings"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                        >
                            <Settings className="h-4 w-4" />
                            Settings
                        </Link>
                    </nav>
                </div>
                <div className="border-t p-4">
                    <Button variant="outline" className="w-full justify-start gap-2" asChild>
                        <Link href="/">
                            <LogOut className="h-4 w-4" />
                            Exit Admin
                        </Link>
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
                    <h1 className="text-lg font-semibold">Dashboard</h1>
                    <div className="ml-auto flex items-center gap-4">
                        <div className="h-8 w-8 rounded-full bg-primary/20" />
                    </div>
                </header>
                <div className="flex-1 p-6">
                    {children}
                </div>
            </main>
        </div>
    )
}
