import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diseño y Creación de Arte Monumental en Ecuador | Atelier Colibrí Rojo",
  description: "Expertos en escultura monumental, muralismo de gran formato y diseño urbano en Ecuador. Proyectos icónicos para instituciones públicas y privadas con impacto cultural.",
  keywords: ["arte monumental ecuador", "escultura monumental", "murales de gran formato quito", "monumentos públicos ecuador", "diseño urbano artístico"],
  openGraph: {
    title: "Diseño y Creación de Arte Monumental en Ecuador | Atelier Colibrí Rojo",
    description: "Transformamos el entorno urbano con obras monumentales que trascienden. Especialistas en proyectos institucionales.",
    images: ["/images/monumental/hero-monumental.webp"],
  },
};

export default function MonumentalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
