import Navbar from "@/components/layout/Navbar";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import ProductPreview from "@/components/sections/ProductPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <ProductPreview />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}