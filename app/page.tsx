import Link from "next/link";

export default function Home() {
  return (
    <main className="hero">
      <p className="eyebrow">Web-технологии · WT-11</p>
      <h1>Обзорная работа по Next.js</h1>
      <p className="lead">
        Учебное приложение на React и Next.js с App Router, серверными компонентами,
        маршрутизацией и API Route.
      </p>
      <div className="actions">
        <Link className="button" href="/products">Открыть товары</Link>
        <Link className="button button--secondary" href="/about">О приложении</Link>
      </div>
    </main>
  );
}
