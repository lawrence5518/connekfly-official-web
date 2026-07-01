import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConnekFly — Web Oficial",
  description:
    "Descarga la APK tester oficial de ConnekFly y entra al ecosistema social y comercial: Chat, Wall, FlyMarket, SmartCRM y más.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7f43ff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
