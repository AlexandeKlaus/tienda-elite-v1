import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Usamos Inter para un estilo moderno y limpio
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boutique | Tienda Online",
  description: "Descubre nuestra colección exclusiva de productos premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
