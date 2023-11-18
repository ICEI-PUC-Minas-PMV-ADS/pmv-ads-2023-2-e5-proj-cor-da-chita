import React from "react";

export default function ShopCartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mx-auto pb-20">{children}</div>;
}
