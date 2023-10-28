// Menu fixo, abaixo de Navbar

import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
    <nav {...props}>
      <div className="bg-light text-tiny">
        <div>
          <ul className="flex flex-auto	justify-around">
            {category.map((category) => (
              <li key={category.id}>
                <p
                  className="p-5 tracking-wide underline  decoration-green"
                  onClick={() => handleClick(category.id, category.name)}
                >
                  {category.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
