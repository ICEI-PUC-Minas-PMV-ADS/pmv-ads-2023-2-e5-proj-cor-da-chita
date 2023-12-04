// Layout das telas referentes ao processo de pedido:
// your-data; shipping-data; sumary-order
import React from "react";

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center px-10">
    <div className="mx-auto">{children}</div>
  </div>
  );
}
