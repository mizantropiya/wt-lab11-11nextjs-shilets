import Link from "next/link";

export type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  isAvailable: boolean;
};

export default function ProductCard({
  id,
  name,
  price,
  category,
  description,
  isAvailable,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card__top">
        <span className="product-category">{category}</span>
        <span className={isAvailable ? "status status--ok" : "status"}>
          {isAvailable ? "В наличии" : "Нет в наличии"}
        </span>
      </div>
      <h2>{name}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">{price.toLocaleString("ru-RU")} BYN</p>
      <Link className="button button--small" href={`/products/${id}`}>
        Подробнее
      </Link>
    </article>
  );
}
