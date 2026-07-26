import Link from "next/link";

const navigation = [
    {
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        label: "Knowledge",
        href: "/knowledge",
    },
    {
        label: "Chat",
        href: "/chat",
    },
    {
        label: "Settings",
        href: "/settings",
    },
];

export default function Sidebar() {
    return (
        <aside className="w-64 border-r border-zinc-800 bg-zinc-900">
            <div className="border-b border-zinc-800 p-6">
                <h1 className="text-xl font-bold tracking-[0.25em]">
                    EKANO
                </h1>
            </div>

            <nav className="flex flex-col p-4">
                {navigation.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="rounded-lg px-4 py-3 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}