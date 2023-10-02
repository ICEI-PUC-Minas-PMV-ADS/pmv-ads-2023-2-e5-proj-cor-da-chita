import React from "react";

export default function Main({ children, ...props }: any) {
  return <header {...props}>{children}</header>;
}
