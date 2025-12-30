import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.askwe.fr"),
  title: {
    default: "Askwe — Copilote IA pour annuaire & connaissances internes",
    template: "%s — Askwe",
  },
  description:
    "Une connexion intuitive entre votre annuaire interne et votre messagerie. Askwe répond en secondes, avec sources et droits d’accès respectés.",
  applicationName: "Askwe",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.askwe.fr/",
    siteName: "Askwe",
    title: "Askwe — Copilote IA pour annuaire & connaissances internes",
    description:
      "Connectez annuaire + connaissances. Réponses instantanées dans Teams/Slack, traçables et conformes RGPD.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Askwe — Copilote IA pour annuaire & connaissances internes",
    description:
      "Réponses instantanées dans Teams/Slack, avec sources et droits d’accès respectés.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
