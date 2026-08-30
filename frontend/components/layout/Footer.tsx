import Link from "next/link";

import Container from "@/components/ui/Container";
import { navigation } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold tracking-[0.25em]">
              EKANO
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
              Enterprise Knowledge Assistant powered by AI. Search, discover and
              chat with your organization&apos;s knowledge in seconds.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Links
            </h3>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@ekano.ai"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} Ekano. All rights reserved.</p>

          <p>
            Created by{" "}
            <span className="font-medium text-zinc-300">Rushabh Kunte</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
