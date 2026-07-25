export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <aside className="border-b border-zinc-800 p-6">
                Dashboard Layout
            </aside>

            <main>{children}</main>
        </div>
    );
} 