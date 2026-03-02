"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { PUBLIC_IMAGES } from "@/lib/publicAssets";
import { siteConfig } from "@/lib/siteConfig";

const CARD_ASPECT = "3/4";
const INTERVAL_MS = 3500;
const FADE_MS = 350;

export default function HeroImagesGallery() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const total = PUBLIC_IMAGES.length;

  const goTo = (next: number) => {
    const nextIndex = (next + total) % total;
    setPrevIndex(index);
    setIndex(nextIndex);
  };

  useEffect(() => {
    if (total <= 0) return;
    const t = setInterval(() => {
      setIndex((i) => {
        setPrevIndex(i);
        return (i + 1) % total;
      });
    }, INTERVAL_MS);
    return () => clearInterval(t);
  }, [total]);

  useEffect(() => {
    if (prevIndex === null) return;
    const id = setTimeout(() => setPrevIndex(null), FADE_MS);
    return () => clearTimeout(id);
  }, [prevIndex]);

  if (total <= 0) return null;

  const src = PUBLIC_IMAGES[index];
  const showPrev = prevIndex !== null && prevIndex !== index;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center gap-2 md:gap-4 w-full max-w-[min(420px,95vw)] mx-auto">
        {/* Botão anterior - estilo Pokémon TCG */}
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-lg bg-elkubo-yellow text-elkubo-teal flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
          aria-label="Carta anterior"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
        </button>

        {/* Card central */}
        <div
          className="relative flex-1 min-w-0 rounded-2xl overflow-hidden bg-black/30 shadow-2xl transition-all duration-300"
          style={{ aspectRatio: CARD_ASPECT }}
        >
          {showPrev && (
            <div className="absolute inset-0 z-0">
              <Image
                src={encodeURI(PUBLIC_IMAGES[prevIndex!])}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 85vw, 320px"
              />
            </div>
          )}
          <div key={index} className="absolute inset-0 z-10 carousel-fade">
            <Image
              src={encodeURI(src)}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 85vw, 320px"
            />
            <div className="shimmer-overlay" aria-hidden="true" />
          </div>
          {/* Logo como selo no canto inferior direito */}
          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-20 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden ring-2 md:ring-[3px] ring-elkubo-yellow/80 shadow-lg bg-white/95 rotate-[-5deg]">
            <Image
              src="/logo.png"
              alt={siteConfig.brandName}
              fill
              className="object-contain p-1"
              sizes="(max-width: 768px) 80px, (max-width: 1024px) 112px, 128px"
            />
          </div>
        </div>

        {/* Botão próximo */}
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-lg bg-elkubo-yellow text-elkubo-teal flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
          aria-label="Próxima carta"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-4">
        {PUBLIC_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              if (i !== index) goTo(i);
            }}
            className="w-2.5 h-2.5 rounded-full transition-all"
            style={{
              backgroundColor: i === index ? "#FDD835" : "rgba(255, 255, 255, 0.3)",
              transform: i === index ? "scale(1.4)" : "scale(1)",
            }}
            aria-label={`Ver carta ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
