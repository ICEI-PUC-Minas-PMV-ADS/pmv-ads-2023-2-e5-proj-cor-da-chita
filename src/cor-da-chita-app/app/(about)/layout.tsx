import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>About Layout AQUI</h1>
      <p>(about/pages.tsx)</p>
      {children}
    </div>
  );
}
