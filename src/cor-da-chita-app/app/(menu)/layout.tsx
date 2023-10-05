import React from "react";

export default function CategoryMenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>CategoryMenuLayout AQUI</h1>
      <p>Esse layout será para as telas referentes ao Menu </p>
      <p>Obs.: O Menu está dentro de Header na renderização do RootLayout</p>
      <p>Menu (category-menu)</p>
      {children}
    </div>
  );
}
