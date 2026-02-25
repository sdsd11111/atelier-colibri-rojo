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
  title: "Atelier Colibrí Rojo | Arte, Restauración y Academia en Loja, Ecuador",
  description:
    "Atelier Colibrí Rojo: 20 años de maestría en arte monumental, restauración de bienes pictóricos, producción audiovisual y academia de artes plásticas en Loja, Ecuador. Formación artística profesional para todas las edades.",
  keywords: [
    "atelier loja ecuador",
    "restauración de arte loja",
    "arte monumental ecuador",
    "academia de arte loja",
    "muralismo loja",
    "escultura monumental",
    "producción audiovisual loja",
    "colibrí rojo",
    "restauración pictórica",
    "cursos de pintura loja",
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
    description: "Maestros en arte monumental, restauración, academia de pintura y producción audiovisual en el corazón de Loja, Ecuador.",
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
      </body>
    </html>
  );
}
