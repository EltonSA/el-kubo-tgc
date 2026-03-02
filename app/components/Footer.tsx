"use client";

import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="py-6 border-t border-white/10 text-center">
      <p className="mb-1 text-white/70 text-sm">{siteConfig.footer}</p>
      <p className="text-xs text-white/40">{siteConfig.website} — Em breve</p>
    </footer>
  );
}
