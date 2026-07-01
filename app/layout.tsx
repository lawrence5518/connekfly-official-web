import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConnekFly — Web Oficial",
  description: "Web oficial de ConnekFly para lanzamiento, APK, tokens, planes, Stripe y Wise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
