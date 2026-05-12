import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pinturas por Encargo y Cuadros Personalizados en Ecuador | Atelier Colibrí Rojo",
  description: "Servicio profesional de pinturas por encargo y cuadros personalizados en Ecuador. Retratos al óleo, paisajes y obras de autor hechas a medida con rigor académico.",
  keywords: ["pinturas por encargo ecuador", "cuadros personalizados", "retratos al óleo quito", "venta de cuadros ecuador", "artes plásticas de autor"],
  openGraph: {
    title: "Pinturas por Encargo y Cuadros Personalizados en Ecuador | Atelier Colibrí Rojo",
    description: "Encargue su obra de arte personalizada. Retratos y cuadros originales con envío a todo Ecuador.",
    images: ["/images/galeria/escultura-2.webp"],
  },
};

export default function ArtesPlasticasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
