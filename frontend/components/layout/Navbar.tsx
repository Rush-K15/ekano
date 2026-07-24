import { navigation } from "@/constants/navigation";
import Link from "next/link";
import Container from "../ui/Container";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/70 backdrop-blur-md border-b border-zinc-800">
      <Container>
        <div className="flex items-center justify-between py-4">
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
        </div>
      </Container>
    </nav>
  );
}