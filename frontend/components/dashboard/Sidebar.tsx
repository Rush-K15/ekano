"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";
import { dashboardNavigation } from "./navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  async function handleLogout() {
    await logout();
    router.push("/login");
  }

  return (
    <aside className="flex w-64 flex-col border-r border-zinc-800 bg-zinc-900">
      <div className="border-b border-zinc-800 p-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-[0.25em] transition-opacity hover:opacity-80"
        >
          EKANO
        </Link>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {dashboardNavigation.map((item) => {
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`block rounded-lg px-4 py-3 transition-colors duration-200 ${
                isActive
                  ? "bg-white font-medium text-black"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-zinc-800 p-4">
        {user && (
          <div className="mb-4 px-2">
            <p className="truncate text-sm font-medium text-white">
              {user.name}
            </p>

            <p className="mt-1 truncate text-xs text-zinc-500">{user.email}</p>
          </div>
        )}

        <div className="space-y-1">
          <Link
            href="/"
            className="block rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          >
            ← Back to home
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full rounded-lg px-3 py-2 text-left text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          >
            Log out
          </button>
        </div>
      </div>
    </aside>
  );
}
