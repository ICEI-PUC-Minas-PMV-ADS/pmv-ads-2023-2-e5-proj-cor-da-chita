"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
  const route = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (categoryId: string, categoryName: string) => {
    setIsClicked(!isClicked);

    categoryId !== "1"
      ? route.push(`/all-products/${categoryName}`)
      : route.push("/all-products");
  };

  return (
    <nav {...props} className="flex  h-16 ">
      <ul className="flex justify-center w-full ">
        {category.map((category) => (
          <li
            key={category.id}
            className={"flex w-32 h-32 bg-blue-500 rounded-md cursor-pointer }"}
          >
            <p onClick={() => handleClick(category.id, category.name)}>
              {category.name}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
