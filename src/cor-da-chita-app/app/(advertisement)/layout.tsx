// Layout das telas referentes ao processo de pedido:
// all-products; search-products/
import React from "react";

export default function AdvertisementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <h1>ProductAdvertisement AQUI</h1>
      <p>
        Esse layout será para a tela de anúncio de um produto, quando o user
        clica no produto
      </p>
      <p>(advertisement/page.tsx)</p>
      {children}
    </main>
  );
}
