import React from "react";

export default function Section({ children, ...props }: any) {
  return <section {...props}>{children}</section>;
}
