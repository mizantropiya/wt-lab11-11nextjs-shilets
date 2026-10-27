export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  isAvailable: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Ноутбук",
    price: 2500,
    category: "Компьютеры",
    description: "Учебная карточка ноутбука для демонстрации Next.js.",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Мышь",
    price: 80,
    category: "Аксессуары",
    description: "Компактная беспроводная мышь.",
    isAvailable: true,
  },
  {
    id: 3,
    name: "Клавиатура",
    price: 150,
    category: "Аксессуары",
    description: "Механическая клавиатура для рабочего места.",
    isAvailable: false,
  },
];
