import { headers } from "next/headers";
import ProductCard from "../components/ProductCard";
import type { Product } from "../lib/products";

async function getProducts(): Promise<Product[]> {
  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const protocol = headersList.get("x-forwarded-proto") ?? "http";

  const response = await fetch(`${protocol}://${host}/api/products`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не удалось получить товары");
  }

  return response.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="page-section">
      <p className="eyebrow">Server Component → GET /api/products</p>
      <h1>Товары</h1>
      <p className="section-intro">
        Страница получает данные серверным fetch и отображает их через компонент ProductCard.
      </p>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
