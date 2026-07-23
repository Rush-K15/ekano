import Navbar from "@/components/layout/Navbar";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}