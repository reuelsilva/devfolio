import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Reuel Dev",
  description: "Olá! Sou o dev Reuel Silva, desenvolvedor Front-end em nível Júnior, formado em Análise e Desenvolvimento de Sistemas. Atualmente dedico meu tempo a criar projetos pessoais que me ajudam a aprimorar minhas habilidades e expandir meu conhecimento na área.",
};

const poppins = Poppins({
  weight: ['400', '500', "600"],
  subsets: ['latin'],
  display: "swap"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`bg-color-01 ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
