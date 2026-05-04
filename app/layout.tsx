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
  metadataBase: new URL("https://www.funemoncalhas.com.br"),
  title: "Calhas em Paranaguá | Funemon Funilaria",
  description:
    "Empresa de calhas em Paranaguá com mais de 45 anos. Instalação, manutenção, rufos e serralheria em todo o litoral.",
  keywords: [
    "calhas em Paranaguá",
    "instalação de calhas",
    "conserto de calhas",
    "rufos para telhado",
    "serralheria em Paranaguá",
    "empresa de calhas Paranaguá",
  ],
  openGraph: {
    title: "Calhas em Paranaguá | Funemon Funilaria",
    description:
      "Soluções completas em calhas, rufos, coifas e serralheria sob medida no litoral do Paraná.",
    url: "https://www.funemoncalhas.com.br",
    siteName: "Funilaria Funemon",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-funemon.jpg",
        width: 1200,
        height: 630,
        alt: "Funilaria Funemon em Paranaguá",
      },
    ],
  },
  alternates: {
    canonical: "https://www.funemoncalhas.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
