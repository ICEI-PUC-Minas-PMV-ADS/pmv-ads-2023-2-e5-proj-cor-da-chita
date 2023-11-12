import React from "react";

export default function QuestionLayout({
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
