"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { track } from "@/lib/track";

const contacts: Array<{
  href: string;
  label: string;
  value: string;
  trackEvent?: "click_instagram" | "click_whatsapp" | "click_site";
  icon: React.ReactNode;
}> = [
  {
    href: `https://instagram.com/${siteConfig.instagram}`,
    label: "Instagram",
    value: `@${siteConfig.instagram}`,
    trackEvent: "click_instagram",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="18" height="18" rx="4" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5v.01" />
      </svg>
    ),
  },
  {
    href: `https://wa.me/${siteConfig.whatsappPhone}`,
    label: "WhatsApp",
    value: siteConfig.whatsappDisplay,
    trackEvent: "click_whatsapp",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
  },
  {
    href: `mailto:${siteConfig.email}`,
    label: "E-mail",
    value: siteConfig.email,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    href: `https://${siteConfig.website}`,
    label: "Site",
    value: siteConfig.website,
    trackEvent: "click_site",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

export default function ContactButtons() {
  return (
    <section className="flex flex-col gap-3 w-full">
      {contacts.map((item) => (
        <Link
          key={item.value}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => item.trackEvent && track(item.trackEvent)}
          className="flex items-center gap-4 w-full rounded-xl py-3.5 px-4 bg-white/5 backdrop-blur-sm hover:bg-white/10 active:scale-[0.99] transition-all no-underline"
        >
          <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-elkubo-yellow/20 flex items-center justify-center text-elkubo-yellow">
            {item.icon}
          </span>
          <span className="flex flex-col items-start min-w-0 flex-1">
            <span className="text-xs text-white/60">{item.label}</span>
            <span className="text-sm text-white font-semibold truncate w-full">{item.value}</span>
          </span>
          <span className="text-white/40 shrink-0" aria-hidden>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </Link>
      ))}
    </section>
  );
}
