import React from "react";
import IconWhatsapp from "@/assets/icons/WhatsappIcon";
import { Link } from "@nextui-org/react";

export default function LinkWhatsApp({ children, ...props }: any) {
  return (
    <Link
      {...props}
      isExternal
      aria-label="WhatsApp Cor da Chita"
      href="https://api.whatsapp.com/send?phone=5583987261972&text=oiiiiiiiiii"
    >
      <div className="flex flex-row items-center gap-1 text-light text-tiny py-1">
        <p>WhatsApp</p>
        <IconWhatsapp />
      </div>
    </Link>
  );
}
