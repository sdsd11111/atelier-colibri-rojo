import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restauración de Obras de Arte en Ecuador | Atelier Colibrí Rojo",
  description: "Especialistas en restauración de arte sacro, pictórico y escultórico en Ecuador. Más de 30 años de experiencia en conservación con rigor científico y técnico.",
  keywords: ["restauración de arte ecuador", "restauración de cuadros quito", "arte sacro ecuador", "conservación de obras de arte", "atelier colibrí rojo"],
  openGraph: {
    title: "Restauración de Obras de Arte en Ecuador | Atelier Colibrí Rojo",
    description: "Conservación y restauración profesional de arte sacro e histórico con rigor absoluto.",
    images: ["/images/restauracion/hero-restauracion.webp"],
  },
};

export default function RestorationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
