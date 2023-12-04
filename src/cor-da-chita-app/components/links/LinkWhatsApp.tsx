import React from "react";
import IconWhatsapp from "@/assets/icons/WhatsappIcon";
import { Link } from "@nextui-org/react";

export default function LinkWhatsApp({ children, ...props }: any) {
  return (
    <Link
      {...props}
      isExternal
      aria-label="WhatsApp Cor da Chita"
      href="https://api.whatsapp.com/send?phone=5583987261972"
    >
      <div className="flex flex-row items-center gap-1 text-light text-tiny py-1 hover:underline underline-offset-4 hover:opacity-80 decoration-wavy">
        <p className="text-tiny">WhatsApp</p>
        <IconWhatsapp />
      </div>
    </Link>
  );
}
