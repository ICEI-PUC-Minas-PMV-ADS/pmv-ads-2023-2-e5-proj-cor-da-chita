// Layout das telas referentes ao processo de pedido:
// all-products; search-products/
import React from "react";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <h1>ProductLayout AQUI</h1>
      <p>Esse layout será para as telas que renderizam os cards de produtos</p>
      <p>(all-products/page.tsx)</p>
      {children}
    </main>
  );
}
