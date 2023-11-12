import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div  className="container mx-auto py-20">
      {children}
    </div>
  );
}
