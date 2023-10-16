"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const category = [
  {
    id: "1",
    name: "Todos os Produtos",
    route:"all-products"
  },
  {
    id: "2",
    name: "Estandartes",
    route:"estandartes"
  },
  {
    id: "3",
    name: "Cama e Mesa",
    route:"cama-mesa"
  },
  {
    id: "4",
    name: "Ecobags e Carteiras",
    route:"ecobags-carteiras"
  },
  {
    id: "5",
    name: "Natalinos",
    route:"natalinos"
  },
  {
    id: "6",
    name: "Outros",
    route:"outros"

  },
];

export default function Menu(...props: any) {
  const route = useRouter();

  return (
    <nav className="flex  h-16 ">
      <ul className="flex justify-center w-full ">
        {category.map((category) => (
          // EM TESTES
          <li key={category.id}>
           
            <Link href={`/${category.route}`} className="ml-2">{category.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
