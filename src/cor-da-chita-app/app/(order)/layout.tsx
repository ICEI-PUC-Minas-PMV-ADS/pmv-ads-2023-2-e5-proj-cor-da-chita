// Layout das telas referentes ao processo de pedido:
// your-data; shipping-data; sumary-order
import React from "react";

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto pb-20">
      {children}
    </div>
  );
}
