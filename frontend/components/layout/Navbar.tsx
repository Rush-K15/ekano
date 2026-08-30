"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-zinc-800 bg-zinc-950/70 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-[0.25em] transition-opacity hover:opacity-80"
          >
            EKANO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          {/* Mobile Navigation */}
          <MobileMenu />
        </div>
      </Container>
    </nav>
  );
}
