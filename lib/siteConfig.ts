/**
 * Configuração central da landing. Altere aqui sem mexer no layout.
 */
export const siteConfig = {
  brandName: "El-Kubo TCG",
  headline: "Os itens mais exclusivos estão aqui",
  subheadline: "Cartas individuais • Graduadas • Produtos lacrados",
  ctaPrimary: "Entrar no grupo (ofertas e drops)",
  ctaSecondary: "Falar no WhatsApp",
  instagram: "elkubotcg",
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5541987884341",
  whatsappDisplay: "(41) 98788-4341",
  email: "elkubotcg.adm@gmail.com",
  website: "elkubotcg.com.br",
  groupUrl: process.env.NEXT_PUBLIC_GROUP_URL || "https://chat.whatsapp.com/COLE_SEU_LINK_AQUI",
  location: "Curitiba/PR",
  highlights: ["Cartas individuais", "Graduadas", "Produtos lacrados"],
  chips: ["Envio para todo o BR", "Curitiba/PR"],
  trust: {
    claim: "+ novidades toda semana",
    atendimento: "Atendimento rápido",
  },
  howItWorks: [
    { step: 1, title: "Entre no grupo" },
    { step: 2, title: "Veja drops, promoções e novidades" },
    { step: 3, title: "Reserve/compre pelo WhatsApp" },
  ],
  ctaSectionTitle: "Quer pegar os melhores itens primeiro?",
  ctaSectionSupport: "Link abre direto no app",
  footer: "El-Kubo TCG • Curitiba/PR • Envio para todo o Brasil",
} as const;

export type SiteConfig = typeof siteConfig;
