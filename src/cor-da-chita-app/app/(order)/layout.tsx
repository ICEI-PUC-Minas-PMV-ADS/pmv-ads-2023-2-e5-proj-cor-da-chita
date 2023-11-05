// Layout das telas referentes ao processo de pedido:
// your-data; shipping-data; sumary-order
import React from "react";

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>OrderLayout AQUI</h1>
      {children}
    </div>
  );
}
