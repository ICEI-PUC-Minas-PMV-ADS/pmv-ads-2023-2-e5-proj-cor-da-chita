import React from "react";

export default function ShopCartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>ShopCartLayout AQUI</h1>
      <p>Esse layout será para a tela do carrinho de compras </p>
      <p>(shop-cart/pages.tsx)</p>
      {children}
    </div>
  );
}
