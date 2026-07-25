"use client";

import { Menu } from "lucide-react";

export default function MobileMenu() {
    return (
        <button
            className="rounded-md p-2 text-zinc-400 transition hover:bg-zinc-900 hover:text-white md:hidden"
            aria-label="Open menu"
        >
            <Menu size={22} />
        </button>
    );
}