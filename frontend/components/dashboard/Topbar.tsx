"use client";

import { usePathname } from "next/navigation";

const pageMetadata = {
  "/dashboard": {
    title: "Dashboard",
    description: "Welcome back 👋",
  },
  "/chat": {
    title: "Ask Ekano",
    description: "Search your organization's knowledge.",
  },
  "/knowledge-base": {
    title: "Knowledge Base",
    description: "Manage the knowledge available to Ekano.",
  },
  "/settings": {
    title: "Settings",
    description: "Manage your Ekano preferences.",
  },
};

export default function Topbar() {
  const pathname = usePathname();

  const currentPage =
    pageMetadata[pathname as keyof typeof pageMetadata] ??
    pageMetadata["/dashboard"];

  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-800 px-8">
      <h2 className="text-lg font-semibold">{currentPage.title}</h2>

      <div className="text-sm text-zinc-400">{currentPage.description}</div>
    </header>
  );
}
