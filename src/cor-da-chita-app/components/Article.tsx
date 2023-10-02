import React from "react";

export default function Article({ children, ...props }: any) {
  return <footer {...props}>{children}</footer>;
}
