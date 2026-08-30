"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { navigation } from "@/constants/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="rounded-md p-2 text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 z-50 w-52 rounded-xl border border-zinc-800 bg-zinc-950 p-2 shadow-xl">
          {navigation.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      )}
    </div>
  );
}
