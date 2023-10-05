import React from "react";

export default function Header({ children, ...props }: any) {
  return (
    <header className="w-full" {...props}>
      {children}
    </header>
  );
}
