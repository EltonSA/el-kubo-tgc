"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function ObrigadoPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-5 bg-[#113642] text-center safe-area-padding">
      <h1 className="text-2xl font-bold text-elkubo-blue-light mb-2">
        Obrigado!
      </h1>
      <p className="text-elkubo-blue-light/90 mb-6">
        Você está a um passo. Abra o link do grupo no seu app e entre na comunidade.
      </p>
      <Link
        href={siteConfig.groupUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block py-4 px-8 rounded-elkubo-lg font-bold bg-elkubo-yellow text-elkubo-teal"
      >
        Abrir grupo
      </Link>
      <Link href="/" className="mt-4 text-elkubo-blue-light/80 text-sm underline">
        Voltar ao início
      </Link>
    </div>
  );
}
