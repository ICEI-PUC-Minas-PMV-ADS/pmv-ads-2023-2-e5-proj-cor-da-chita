// Layout das telas referentes ao processo de pedido:
// all-products; search-products/
import React from "react";

export default function AdvertisementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mx-auto">{children}</div>;
}
