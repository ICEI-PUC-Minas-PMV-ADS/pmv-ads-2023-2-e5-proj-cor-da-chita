import React from "react";
import { Link } from "@nextui-org/react";
import IconInstagram from "@/assets/icons/InstagramIcons";

export default function LinkInstagram({ children, ...props }: any) {
  return (
    <Link
      {...props}
      isExternal
      aria-label="Instagram Cor da Chita"
      href="https://www.instagram.com/cor.da.chita/"
    >
      <div className="flex flex-row items-center gap-x-1 text-light text-tiny py-1 hover:underline underline-offset-4 hover:opacity-80 decoration-wavy">
        <p>Instagram</p>
        <IconInstagram />
      </div>
    </Link>
  );
}
