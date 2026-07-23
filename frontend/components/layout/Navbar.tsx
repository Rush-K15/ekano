import { navigation } from "@/constants/navigation";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      
      <div className="text-xl font-bold tracking-tight">
        EKANO
      </div>

      
      <div className="flex items-center gap-8">
        {navigation.map((navItem) => (
          <Link
            key={navItem.label}
            href={navItem.href}
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            {navItem.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}