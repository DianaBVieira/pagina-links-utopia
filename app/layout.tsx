import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Utopia Desenvolvimentos | Nossas soluções",
  description:
    "Conheça as soluções digitais da Utopia Desenvolvimentos: FinançasPro, VemPraPista, Pulso Utopia e muito mais.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${space.variable}`}>{children}</body>
    </html>
  );
}
