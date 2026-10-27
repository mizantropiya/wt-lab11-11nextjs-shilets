# WT-11 — Next.js

Обзорная лабораторная работа по Next.js.

## Маршруты

- `/` — главная страница
- `/about` — страница «О приложении»
- `/products` — каталог товаров
- `/products/[id]` — дополнительный динамический маршрут товара
- `/api/products` — Route Handler, JSON с товарами

## Запуск

```bash
npm install
npm run dev
```

Открыть: `http://localhost:3000`.

## Проверка production-сборки

```bash
npm run build
npm start
```

## Дополнительное задание

Реализованы расширенная карточка товара и динамический маршрут `/products/[id]`.
