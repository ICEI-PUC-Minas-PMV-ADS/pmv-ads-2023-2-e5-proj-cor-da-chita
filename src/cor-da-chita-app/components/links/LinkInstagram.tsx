import React from "react";
import { Link } from "@nextui-org/react";
import IconInstagram from "@/assets/icons/InstagramIcons";

export default function LinkInstagram({ children, ...props }: any) {
  return (
    <Link
      {...props}
      aria-label="Instagram Cor da Chita"
      href="https://www.instagram.com/cor.da.chita/"
    >
      <div>
        <p>Instagram</p>
        <IconInstagram />
      </div>
    </Link>
  );
}
