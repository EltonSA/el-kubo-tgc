"use client";

import { siteConfig } from "@/lib/siteConfig";

const icons: Record<string, React.ReactNode> = {
  "Cartas individuais": (
    <svg className="w-7 h-7 text-elkubo-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
    </svg>
  ),
  Graduadas: (
    <svg className="w-7 h-7 text-elkubo-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  "Produtos lacrados": (
    <svg className="w-7 h-7 text-elkubo-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  ),
};

const descriptions: Record<string, string> = {
  "Cartas individuais": "Encontre a carta que falta",
  Graduadas: "Cartas certificadas",
  "Produtos lacrados": "Boxes e blisters novos",
};

export default function ProductsHighlights() {
  return (
    <section className="w-full text-center">
      <h2 className="text-lg md:text-xl text-elkubo-yellow font-semibold mb-5">
        Nossos Produtos
      </h2>
      <ul className="grid grid-cols-3 gap-3">
        {siteConfig.highlights.map((title) => (
          <li
            key={title}
            className="flex flex-col items-center gap-2 py-4 px-2 rounded-xl bg-white/5 backdrop-blur-sm text-center"
          >
            {icons[title]}
            <span className="text-white font-medium text-xs">{title}</span>
            <span className="text-[10px] text-white/60 leading-tight">{descriptions[title]}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
