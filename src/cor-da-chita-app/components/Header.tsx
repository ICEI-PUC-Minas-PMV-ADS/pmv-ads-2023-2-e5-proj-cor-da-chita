import React from "react";

export default function Header({ children, ...props }: any) {
  return (
    <header  {...props}>
      {children}
    </header>
  );
}
