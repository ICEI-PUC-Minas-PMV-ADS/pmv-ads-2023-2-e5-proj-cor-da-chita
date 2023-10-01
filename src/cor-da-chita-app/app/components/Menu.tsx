import Link from "next/link";
import React from "react";

export default function Menu(...props: any) {
  return (
    <nav className="flex justify-center">
      <ul className="flex">
        <li>
          <Link href="#">Todos os Produtos</Link>
        </li>
        <li>
          <Link href="#">Estandartes</Link>
        </li>
        <li>
          <Link href="#">Cama e Mesa</Link>
        </li>
        <li>
          <Link href="#">Ecobags e Carteiras</Link>
        </li>
        <li>
          <Link href="#">Outros</Link>
        </li>
      </ul>
    </nav>
  );
}
