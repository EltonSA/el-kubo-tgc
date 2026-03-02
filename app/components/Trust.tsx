"use client";

import { siteConfig } from "@/lib/siteConfig";

export default function Trust() {
  return (
    <section className="flex flex-wrap gap-3 justify-center">
      <span className="px-4 py-2.5 rounded-full text-sm font-semibold text-elkubo-teal bg-elkubo-yellow shadow-md">
        {siteConfig.trust.claim}
      </span>
      <span className="px-4 py-2.5 rounded-full text-sm font-semibold text-elkubo-teal bg-elkubo-yellow shadow-md">
        {siteConfig.trust.atendimento}
      </span>
    </section>
  );
}
