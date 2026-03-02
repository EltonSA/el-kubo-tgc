/**
 * Métricas simples: track de cliques para grupo, WhatsApp, Instagram, site.
 * Troque por Google Analytics / Meta Pixel depois se quiser.
 */
export type TrackEvent =
  | "click_group"
  | "click_whatsapp"
  | "click_instagram"
  | "click_site";

export function track(event: TrackEvent) {
  if (typeof window === "undefined") return;
  try {
    // console para dev; depois pode enviar para gtag ou dataLayer
    if (process.env.NODE_ENV === "development") {
      console.log("[track]", event);
    }
    // Exemplo para quando integrar GA: window.gtag?.("event", event, { ... });
  } catch {
    // ignore
  }
}
