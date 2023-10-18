"use client";
import React from "react";
import Link from "next/link";

export const category = [
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

export default function Menu(...props: any) {
  return (
    <nav className="flex  h-16 ">
      <ul className="flex justify-center w-full ">
        {category.map((category) => (
          <li key={category.id}>
            <Link
              href={
                category.id !== "1"
                  ? `/all-products/${category.name}`
                  : "/all-products"
              }
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
