import React from "react";

export default function ShopCartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col max-w-sm p-10">{children}</div>;
}
