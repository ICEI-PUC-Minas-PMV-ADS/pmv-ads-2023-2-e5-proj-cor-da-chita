import React from "react";

export default function Main({ children, ...props }: any) {
  return <main {...props}>{children}</main>;
}
