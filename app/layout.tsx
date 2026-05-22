import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { SITE_URL } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bikey",
    template: "%s | Bikey",
  },
  description:
    "Privacy, support, and terms pages for Bikey, a bilingual keyboard app for Japanese and English.",
};

export const viewport: Viewport = {
  themeColor: "#fbfaf9",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand" aria-label="Bikey home">
            Bikey
          </Link>
          <nav className="nav" aria-label="Legal pages">
            <Link href="/privacy">Privacy</Link>
            <Link href="/support">Support</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
