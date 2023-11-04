import React from "react";

export default function ShopCartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>ShopCartLayout</h1>
      {children}
    </div>
  );
}
