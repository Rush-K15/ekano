"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { dashboardNavigation } from "./navigation";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r border-zinc-800 bg-zinc-900">
            <div className="border-b border-zinc-800 p-6">
                <h1 className="text-xl font-bold tracking-[0.25em]">
                    EKANO
                </h1>
            </div>

            <nav className="p-4 space-y-2">
                {dashboardNavigation.map((item) => {
                    const isActive =
                        item.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`block rounded-lg px-4 py-3 transition-colors duration-200 ${isActive
                                ? "bg-white text-black font-medium"
                                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                                }`}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}