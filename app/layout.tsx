import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Admin Session",
  description: "Responsive admin user editor mockup"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink text-slate-900">{children}</body>
    </html>
  );
}
