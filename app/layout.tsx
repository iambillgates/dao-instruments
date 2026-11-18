import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAO Instruments — Lima Instrumen dari Keheningan",
  description:
    "Lima instrumen musik yang bisa dimainkan di browser: PANDORA, WAKE, CHAOS, GATHER, dan Circuit. Suara muncul hanya ketika kamu bergerak.",
};

export const viewport: Viewport = { themeColor: "#0a0a08" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500;700;900&family=Spectral:ital,wght@0,300;0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://unpkg.com/three@0.152.2/build/three.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
