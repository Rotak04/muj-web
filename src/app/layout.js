import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata = {
  title: "RotCode | Tvorba moderních webů na míru",
  description: "Pomáhám podnikatelům a značkám získat profesionální webové stránky, které vypadají skvěle a přinášejí výsledky.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" data-scroll-behavior="smooth">
      <body className={`${inter.className} bg-[#090b14] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}