import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "WT-11 Next.js",
  description: "Обзорная лабораторная работа по Next.js",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <header className="site-header">
          <div className="container nav-row">
            <Link className="brand" href="/">WT-11</Link>
            <nav className="nav-links" aria-label="Основная навигация">
              <Link href="/">Главная</Link>
              <Link href="/about">О приложении</Link>
              <Link href="/products">Товары</Link>
            </nav>
          </div>
        </header>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
