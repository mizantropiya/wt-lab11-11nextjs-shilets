export default function About() {
  return (
    <main className="page-section narrow">
      <p className="eyebrow">Маршрут /about</p>
      <h1>О приложении</h1>
      <p>
        Это учебное приложение по дисциплине «Web-технологии», разработанное с
        использованием Next.js и React.
      </p>
      <p>
        В проекте показаны App Router, серверные компоненты, компонент Link,
        собственный компонент ProductCard и серверный обработчик GET /api/products.
      </p>
    </main>
  );
}
