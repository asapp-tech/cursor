import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Admin Session",
  description: "Add & Edit User modal (Next.js + TS + Tailwind)"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

