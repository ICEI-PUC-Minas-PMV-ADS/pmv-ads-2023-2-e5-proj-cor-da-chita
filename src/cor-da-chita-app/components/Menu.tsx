import Link from "next/link";
import React from "react";

export default function Menu(...props: any) {
  const categorias = [
    {
      id: 1,
      nome: "Todos os Produtos",
    },
    {
      id: 2,
      nome: "Estandartes",
    },
    {
      id: 3,
      nome: "Cama e Mesa",
    },
    {
      id: 4,
      nome: "Ecobags e Carteiras",
    },
    {
      id: 5,
      nome: "Natalinos",
    },
    {
      id: 6,
      nome: "Outros",
    },
  ];

  return (
    <nav className="flex  h-16 ">
      <ul className="flex justify-center w-full ">
        {categorias.map((categoria) => (
          <li>
            <Link
            className=""
              href={`/pages/MenuProducts/${categoria.id} `}
              key={categoria.id}
            >
              {categoria.nome}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
