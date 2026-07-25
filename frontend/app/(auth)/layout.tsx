export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6">
            {children}
        </main>
    );
}