import type { Metadata } from "next";
import { Geist, Cinzel, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Atelier Colibrí Rojo | Arte Monumental, Restauración y Artes Plásticas en Loja",
  description:
    "Atelier Colibrí Rojo: Estudio de arte en Loja, Ecuador. Especialistas en murales artísticos, escultura monumental, restauración de obra pictórica, cuadros al óleo y pinturas por encargo. 20 años de trayectoria.",
  keywords: [
    "restauración de arte sacro",
    "mantenimiento de obra pictórica",
    "restauración escultórica",
    "maquetismo y diseño loja",
    "atelier loja ecuador",
    "restauración de arte loja",
    "murales artísticos loja",
    "escultura monumental ecuador",
    "cuadros al óleo loja",
    "pinturas por encargo loja",
    "colibrí rojo",
  ],
  authors: [{ name: "Atelier Colibrí Rojo", url: "https://ateliercolibri.com" }],
  creator: "Atelier Colibrí Rojo",
  metadataBase: new URL("https://ateliercolibri.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/Logo.webp",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://ateliercolibri.com",
    siteName: "Atelier Colibrí Rojo",
    title: "Atelier Colibrí Rojo | Arte y Restauración en Loja, Ecuador",
    description: "Maestros en murales artísticos, escultura monumental, restauración y artes plásticas en el corazón de Loja, Ecuador. Cuadros y pinturas por encargo.",
    images: [{
      url: "/Logo.webp",
      width: 800,
      height: 800,
      alt: "Atelier Colibrí Rojo Logo"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Colibrí Rojo | Arte y Restauración en Loja",
    description: "20 años de maestría en arte, restauración y formación artística en Loja, Ecuador.",
    images: ["/Logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${cinzel.variable} ${outfit.variable} antialiased font-[family-name:var(--font-outfit)]`}
      >
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
