import React from "react";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>ProductLayout AQUI</h1>
      <p>Esse layout será para as telas que renderizam os cards de produtos</p>
      <p>(products/page.tsx)</p>
      <p>(search-products/page.tsx)</p>
      {children}
    </div>
  );
}
