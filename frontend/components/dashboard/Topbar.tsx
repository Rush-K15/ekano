export default function Topbar() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-zinc-800 px-8">
            <h2 className="text-lg font-semibold">
                Dashboard
            </h2>

            <div className="text-sm text-zinc-400">
                Welcome back 👋
            </div>
        </header>
    );
}