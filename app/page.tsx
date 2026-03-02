"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ProductsHighlights from "./components/ProductsHighlights";
import Trust from "./components/Trust";
import CTASection from "./components/CTASection";
import ContactButtons from "./components/ContactButtons";
import Footer from "./components/Footer";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center min-h-[100dvh] w-full bg-[#0a1e26]"
        style={{
          backgroundImage: "url('/plano%20de%20fundo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(10, 30, 38, 0.95) 0%, rgba(10, 30, 38, 0.7) 50%, rgba(10, 30, 38, 0.5) 80%)",
          }}
        />
        <h1 className="relative z-10 text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide text-[#FDD835] text-center max-w-2xl mx-auto px-4">
          De colecionadores para colecionadores
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] flex flex-col overflow-x-hidden bg-[#0a1e26] animate-[fadeIn_0.4s_ease-out]">
      {/* Primeira seção: Hero com plano de fundo */}
      <section
        className="relative w-full"
        style={{
          backgroundImage: "url('/plano%20de%20fundo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(10, 30, 38, 0.95) 0%, rgba(10, 30, 38, 0.75) 50%, rgba(10, 30, 38, 0.5) 80%)",
          }}
          aria-hidden
        />
        <div className="relative px-4 md:px-6 pt-5 pb-8 max-w-[480px] mx-auto w-full">
          <Hero />
        </div>
      </section>

      {/* Demais seções: fundo normal */}
      <main className="flex-1 pb-8 px-4 md:px-6 w-full box-border">
        <div className="flex flex-col gap-8 max-w-[480px] mx-auto w-full pt-8">
          <HowItWorks />
          <ProductsHighlights />
          <Trust />
          <CTASection />
          <ContactButtons />
          <Footer />
        </div>
      </main>
    </div>
  );
}
