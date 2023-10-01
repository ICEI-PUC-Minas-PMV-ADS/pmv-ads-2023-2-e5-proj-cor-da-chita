import React from "react";
import { Button } from "@nextui-org/react";

export default function ButtonOnlyIcon({ children, ...props }: any) {
  return <Button {...props}>{children}</Button>;
}
