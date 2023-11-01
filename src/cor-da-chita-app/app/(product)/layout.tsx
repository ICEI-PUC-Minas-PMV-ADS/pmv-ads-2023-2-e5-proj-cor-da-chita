// Layout das telas referentes ao processo de pedido:
// all-products; search-products/
import React from "react";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto p-3">
      <section className="grid grid-cols-3 gap-3">
        {children}
        {/* <h1>ProductLayout AQUI</h1>s
      <p>Esse layout será para as telas que renderizam os cards de produtos</p>
      <p>(all-products/page.tsx)</p>
      {children} */}
      </section>
    </main>
  );
}
