"use client";

import Link from "next/link";
import { Instagram, ArrowRight } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
import { siteConfig } from "@/lib/siteConfig";
import { track } from "@/lib/track";
import HeroImagesGallery from "./HeroImagesGallery";

export default function Hero() {
  return (
    <section className="w-full text-center">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide text-elkubo-yellow mb-1 text-center max-w-2xl mx-auto">
        De colecionadores para colecionadores
      </h1>
      <p className="text-sm md:text-base text-white/90 mb-8">
        {siteConfig.headline}
      </p>

      {/* Showcase de cartas */}
      <div className="mb-6">
        <HeroImagesGallery />
      </div>

      {/* Info */}
      <p className="text-xs text-white/70 mb-2">{siteConfig.subheadline}</p>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {siteConfig.chips.map((chip) => (
          <span
            key={chip}
            className="px-3 py-1.5 rounded-full text-xs font-medium text-white/90 bg-white/10 backdrop-blur-sm"
          >
            {chip}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="space-y-3 max-w-sm mx-auto">
        <div className="relative overflow-hidden rounded-2xl btn-shine">
          <Link
            href={siteConfig.groupUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("click_group")}
            className="relative z-0 flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold text-elkubo-teal bg-elkubo-yellow shadow-lg hover:opacity-95 active:opacity-90 transition-opacity"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>{siteConfig.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
          <div className="shimmer-overlay z-10 absolute inset-0 pointer-events-none rounded-2xl" aria-hidden="true" />
        </div>
        <Link
          href={`https://wa.me/${siteConfig.whatsappPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("click_whatsapp")}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-white bg-white/25 backdrop-blur-sm border-2 border-white/40 hover:bg-white/35 transition-colors shadow-lg"
        >
          <WhatsAppIcon className="w-5 h-5 shrink-0" />
          {siteConfig.ctaSecondary}
        </Link>
      </div>

      {/* Instagram */}
      <div className="mt-6">
        <Link
          href={`https://instagram.com/${siteConfig.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("click_instagram")}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-base font-semibold text-white bg-white/25 backdrop-blur-sm border-2 border-white/40 hover:bg-white/35 transition-colors shadow-lg"
        >
          <Instagram className="w-5 h-5 shrink-0" />
          @{siteConfig.instagram}
        </Link>
      </div>
    </section>
  );
}
