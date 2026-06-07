import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConnekFly — Descarga oficial",
  description: "Entrada oficial a ConnekFly con invitación, QR y descarga segura.",
  openGraph: {
    title: "ConnekFly",
    description: "Chat, Wall, FlyMarket y SmartCRM móvil en una sola app.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
