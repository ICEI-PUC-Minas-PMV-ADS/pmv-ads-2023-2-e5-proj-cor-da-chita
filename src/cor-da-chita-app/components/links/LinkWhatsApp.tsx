import React from "react";
import IconWhatsapp from "@/assets/icons/WhatsappIcon";
import { Link } from "@nextui-org/react";

export default function LinkWhatsApp({ children, ...props }: any) {
  return (
    <Link
      {...props}
      isExternal
      aria-label="WhatsApp Cor da Chita"
      href="https://wa.me/5583987261972"
    >
      <div>
        <p>WhatsApp</p>
        <IconWhatsapp />
      </div>
    </Link>
  );
}
