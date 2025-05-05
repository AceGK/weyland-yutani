import "../styles/globals.scss";
import type { ReactNode } from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";

export const metadata = {
  title: "Weyland Yutani Corp",
  description: "Weyland Yutani Corporation",
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
          {/* <Nav /> */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
