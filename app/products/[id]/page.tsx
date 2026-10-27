import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/app/lib/products";

type ProductDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <main className="page-section narrow">
      <p className="eyebrow">Динамический маршрут /products/[id]</p>
      <h1>{product.name}</h1>
      <dl className="details-list">
        <div><dt>Категория</dt><dd>{product.category}</dd></div>
        <div><dt>Цена</dt><dd>{product.price.toLocaleString("ru-RU")} BYN</dd></div>
        <div><dt>Доступность</dt><dd>{product.isAvailable ? "В наличии" : "Нет в наличии"}</dd></div>
      </dl>
      <p>{product.description}</p>
      <Link className="button button--secondary" href="/products">Назад к товарам</Link>
    </main>
  );
}
