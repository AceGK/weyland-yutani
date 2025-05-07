import "../styles/globals.scss";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Overlay from "../components/overlay";

export const metadata: Metadata = {
  title: "Weyland Yutani Corporation",
  description: "Advancing humanity through innovation, exploration, and synthetic intelligence. Building better worlds since 2151.",
  metadataBase: new URL("https://weyland-yutani.vercel.app"),

  openGraph: {
    title: "Weyland Yutani Corporation",
    description: "Advancing humanity through innovation, exploration, and synthetic intelligence. Building better worlds since 2151.",
    url: "https://weyland-yutani.vercel.app",
    siteName: "Weyland Yutani Corporation",
    images: [
      {
        url: "/og-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Weyland-Yutani Logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Weyland Yutani Corp",
    description: "Advancing humanity through innovation, exploration, and synthetic intelligence. Building better worlds since 2151.",
    images: ["/og-thumbnail.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Microgramma-bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Microgramma.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Thedus-Condensed.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="content scanlines">
          <Overlay />
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
