"use client";

import { siteConfig } from "@/lib/siteConfig";

export default function HowItWorks() {
  return (
    <section className="w-full text-center">
      <h2 className="text-lg md:text-xl text-elkubo-yellow font-semibold mb-5">
        Como Funciona
      </h2>
      <ol className="space-y-4 max-w-sm mx-auto">
        {siteConfig.howItWorks.map((item) => (
          <li key={item.step} className="flex items-center gap-4">
            <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-elkubo-yellow text-elkubo-teal font-bold text-sm flex items-center justify-center shadow-md">
              {item.step}
            </span>
            <span className="text-white/90 text-sm md:text-base text-left">{item.title}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
