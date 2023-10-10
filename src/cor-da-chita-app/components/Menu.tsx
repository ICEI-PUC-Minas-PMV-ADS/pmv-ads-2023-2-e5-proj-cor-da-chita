"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Menu(...props: any) {
  const route = useRouter();

  const category = [
    {
      id: "1",
      name: "Todos os Produtos",
    },
    {
      id: "2",
      name: "Estandartes",
    },
    {
      id: "3",
      name: "Cama e Mesa",
    },
    {
      id: "4",
      name: "Ecobags e Carteiras",
    },
    {
      id: "5",
      name: "Natalinos",
    },
    {
      id: "6",
      name: "Outros",
    },
  ];

  function handleClick(categoryName: string) {
    route.push(`/all-products/${categoryName}`);
  }

  return (
    <nav className="flex  h-16 ">
      <ul className="flex justify-center w-full ">
        {category.map((category) => (
          <li key={category.id}>
            <Link href={`/all-products/${category.name}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
