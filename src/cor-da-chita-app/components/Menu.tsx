import Link from "next/link";
import React from "react";

export default function Menu(...props: any) {
  const category = [
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
        {category.map((category) => (
          <li key={category.id}>
            <Link href={`/pages/MenuProducts/${category.id} `}>
              {category.nome}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}