import React from "react";

export default function QuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>QuestionLayout AQUI</h1>
      <p>(question/pages.tsx)</p>
      {children}
    </div>
  );
}
