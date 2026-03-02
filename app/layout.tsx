import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "El-Kubo TCG | Os itens mais exclusivos estão aqui",
  description: "Cartas individuais, graduadas e produtos lacrados. Entre no grupo para ofertas e drops. Curitiba/PR • Envio para todo o Brasil.",
  icons: {
    icon: "/faveicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} touch-manipulation`}>
      <body className="font-sans antialiased min-h-screen bg-[#0a1e26] text-elkubo-blue-light min-h-[100dvh] safe-area-padding">
        {children}
      </body>
    </html>
  );
}
