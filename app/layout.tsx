import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConnekFly — APK Tester",
  description: "Descarga oficial de ConnekFly APK tester con QR y link único.",
  openGraph: {
    title: "ConnekFly APK Tester",
    description: "Chat, Wall, FlyMarket y SmartCRM móvil en una sola app.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#8d68ff",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
