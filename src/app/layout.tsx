import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
// import {Providers} from "./providers";
// import { Analytics } from '@vercel/analytics/react';

const figtree = Figtree({
  subsets: ["latin"], 
  weight:["300", '400', "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "IDEAL Indonesia",
  description: "Pendidikan Untuk Semua, Tingkatkan Potensi Diri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={figtree.className}>
        {children}
      </body>
    </html>
  );
}
